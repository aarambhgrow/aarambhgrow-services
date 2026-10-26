
import { Resend } from "resend";
import {
  contactAdminEmail,
  contactConfirmationEmail,
} from "@/app/lib/email/templates";
import { pushLeadToLms } from "@/app/lib/lms";

export async function POST(request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await request.json();
    const fullName = (body.fullName || "").trim();
    const email = (body.email || "").trim();
    const phone = (body.phone || "").trim();
    const subject = (body.subject || "").trim();
    const message = (body.message || "").trim();

    if (!fullName || !email || !phone || !message) {
      return Response.json(
        {
          success: false,
          message: "Full name, email, phone and message are required.",
        },
        { status: 400 },
      );
    }

    // DPDP: contact only with an explicit, recorded consent.
    if (body.consent !== true) {
      return Response.json(
        { success: false, message: "Please accept the consent to submit." },
        { status: 400 },
      );
    }

    const consentNote = `Agreed to be contacted about this enquiry via the website form, ${new Date().toISOString()}`;

    // The lead is captured if either the LMS or the admin email accepts it.
    const [leadSaved, { data, error }] = await Promise.all([
      pushLeadToLms({
        name: fullName,
        email,
        phone,
        // The LMS has no consent field yet, so the consent record travels in the message.
        message: `${subject ? `[${subject}] ` : ""}${message}\n\n[Consent] ${consentNote}`,
      }),
      resend.emails.send({
        from: process.env.CONTACT_FROM_EMAIL,
        to: process.env.CONTACT_TO_EMAIL,
        replyTo: email,
        subject: subject
          ? `New Contact Inquiry - ${subject}`
          : "New Contact Inquiry - AarambhGrow Services Private Limited",
        html: contactAdminEmail({ fullName, email, phone, subject, message, consentNote }),
      }),
    ]);

    if (error) {
      console.error("Resend API error:", error);

      if (!leadSaved) {
        return Response.json(
          { success: false, message: error.message || "Failed to send email." },
          { status: 500 },
        );
      }
    }

    // Acknowledge the sender; a failure here shouldn't fail the request.
    const { error: confirmationError } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL,
      to: email,
      subject: "We've received your message - AarambhGrow",
      html: contactConfirmationEmail({ fullName, subject, message }),
    });
    if (confirmationError) {
      console.error("Resend confirmation error:", confirmationError);
    }

    return Response.json({
      success: true,
      message: "Your message has been sent successfully.",
      id: data?.id,
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return Response.json(
      { success: false, message: "Something went wrong." },
      { status: 500 },
    );
  }
}