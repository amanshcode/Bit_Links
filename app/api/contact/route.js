import { Resend } from "resend";
import { db } from "@/lib/db";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();

    // Save message to MySQL
    await db.execute(
      `INSERT INTO messages (name, email, message)
       VALUES (?, ?, ?)`,
      [body.name, body.email, body.message]
    );

    // Send Email Notification
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "amam04sharma@gmail.com",
      replyTo: body.email,
      subject: "New BitLinks Contact Form Message",
      html: `
        <h2>New Contact Form Submission</h2>

        <p><strong>Name:</strong> ${body.name}</p>

        <p><strong>Email:</strong> ${body.email}</p>

        <p><strong>Message:</strong></p>

        <p>${body.message}</p>
      `,
    });
    
    if (error) {
      return Response.json({
        success: false,
        error: true,
        message: error.message,
      });
    }

    return Response.json({
      success: true,
      error: false,
      message: "Message sent successfully!",
    });

  } catch (error) {
    console.error("CONTACT API ERROR:", error);

    return Response.json(
      {
        success: false,
        error: true,
        message: error.message,
      },
      { status: 500 }
    );
  }
}