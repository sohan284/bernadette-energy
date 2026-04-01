"use server";

import { Resend } from "resend";

const resend = new Resend("re_c7ydXccn_CQGPmo2Q1BDnEZFHMispnpuT");

interface SendEmailResponse {
  success: boolean;
  message: string;
}

export async function sendEmail(formData: FormData): Promise<SendEmailResponse> {
  const subject = formData.get("subject") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  // if (!process.env.RESEND_API_KEY) {
  //   console.error("RESEND_API_KEY is not set in environment variables.");
  //   return {
  //     success: false,
  //     message: "Server configuration error. Please try again later.",
  //   };
  // }

  try {
    const { data, error } = await resend.emails.send({
      from: "Bernadette Energy <onboarding@resend.dev>",
      to: ["sr.sohan088@gmail.com"],
      subject: `New Message: ${subject}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #7c3aed; padding: 24px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Message</h1>
          </div>
          <div style="padding: 24px; background-color: white;">
            <p style="color: #64748b; font-size: 14px; text-transform: uppercase; letter-spacing: 0.1em; font-weight: bold; margin-bottom: 8px;">From</p>
            <p style="color: #1e293b; font-size: 18px; margin-top: 0; margin-bottom: 24px;">${email}</p>
            
            <p style="color: #64748b; font-size: 14px; text-transform: uppercase; letter-spacing: 0.1em; font-weight: bold; margin-bottom: 8px;">Subject</p>
            <p style="color: #1e293b; font-size: 18px; margin-top: 0; margin-bottom: 24px;">${subject}</p>
            
            <p style="color: #64748b; font-size: 14px; text-transform: uppercase; letter-spacing: 0.1em; font-weight: bold; margin-bottom: 8px;">Message</p>
            <div style="color: #1e293b; font-size: 16px; line-height: 1.6; background-color: #f8fafc; padding: 16px; border-radius: 4px; border-left: 4px solid #7c3aed;">
              ${message.replace(/\n/g, '<br />')}
            </div>
          </div>
          <div style="background-color: #f8fafc; padding: 16px; text-align: center; border-top: 1px solid #e2e8f0;">
            <p style="color: #94a3b8; font-size: 12px; margin: 0;">&copy; ${new Date().getFullYear()} Bernadette Energy. All rights reserved.</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);
      return { success: false, message: "Failed to send email. Please try again." };
    }

    return { success: true, message: "Email sent successfully!" };
  } catch (err) {
    console.error("Server Error:", err);
    return { success: false, message: "An unexpected error occurred." };
  }
}
