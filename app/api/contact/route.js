
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

    // The lead is captured if either the LMS or the admin email accepts it.
    const [leadSaved, { data, error }] = await Promise.all([
      pushLeadToLms({
        name: fullName,
        email,
        phone,
        message: subject ? `[${subject}] ${message}` : message,
      }),
      resend.emails.send({
        from: process.env.CONTACT_FROM_EMAIL,
        to: process.env.CONTACT_TO_EMAIL,
        replyTo: email,
        subject: subject
          ? `New Contact Inquiry - ${subject}`
          : "New Contact Inquiry - AarambhGrow Services Private Limited",
        html: contactAdminEmail({ fullName, email, phone, subject, message }),
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