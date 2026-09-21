import { Resend } from "resend";
import {
  contactAdminEmail,
  contactConfirmationEmail,
} from "@/app/lib/email/templates";

export async function POST(request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await request.json();
    const { fullName, email, phone, subject, message } = body;

    if (!fullName || !email || !message) {
      return Response.json(
        {
          success: false,
          message: "Full name, email and message are required.",
        },
        { status: 400 },
      );
    }

    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: subject
        ? `New Contact Inquiry - ${subject}`
        : "New Contact Inquiry - AarambhGrow Services Private Limited",
      html: contactAdminEmail({ fullName, email, phone, subject, message }),
    });

    if (error) {
      console.error("Resend API error:", error);
      return Response.json(
        { success: false, message: error.message || "Failed to send email." },
        { status: 500 },
      );
    }

    // Acknowledge the sender; a failure here shouldn't fail the request.
    const { error: confirmationError } = await resend.emails.send({
      from: process.env.EMAIL_FROM,
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
