"use server";

import { Resend } from "resend";

// NOTE: It is recommended to move this API key to .env.local
const resend = new Resend(process.env.RESEND_API_KEY);

interface SendEmailResponse {
  success: boolean;
  message: string;
}

export async function sendEmail(formData: FormData): Promise<SendEmailResponse> {
  const email = formData.get("email") as string;

  // Contact form fields
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  // Lead form fields
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const country = formData.get("country") as string;
  const phone = formData.get("phone") as string;

  const isLeadForm = !!firstName;

  const mailSubject = isLeadForm
    ? `New Lead Request from ${firstName} ${lastName}`
    : `New Message: ${subject}`;

  const htmlContent = isLeadForm ? `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #059669; padding: 24px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Lead Submission</h1>
          </div>
          <div style="padding: 24px; background-color: white;">
            <p style="color: #64748b; font-size: 14px; text-transform: uppercase; letter-spacing: 0.1em; font-weight: bold; margin-bottom: 8px;">Name</p>
            <p style="color: #1e293b; font-size: 18px; margin-top: 0; margin-bottom: 24px;">${firstName} ${lastName}</p>

            <p style="color: #64748b; font-size: 14px; text-transform: uppercase; letter-spacing: 0.1em; font-weight: bold; margin-bottom: 8px;">Email</p>
            <p style="color: #1e293b; font-size: 18px; margin-top: 0; margin-bottom: 24px;">${email}</p>
            
            <p style="color: #64748b; font-size: 14px; text-transform: uppercase; letter-spacing: 0.1em; font-weight: bold; margin-bottom: 8px;">Phone</p>
            <p style="color: #1e293b; font-size: 18px; margin-top: 0; margin-bottom: 24px;">${phone}</p>
            
            <p style="color: #64748b; font-size: 14px; text-transform: uppercase; letter-spacing: 0.1em; font-weight: bold; margin-bottom: 8px;">Country</p>
            <p style="color: #1e293b; font-size: 18px; margin-top: 0; margin-bottom: 24px;">${country}</p>
          </div>
          <div style="background-color: #f8fafc; padding: 16px; text-align: center; border-top: 1px solid #e2e8f0;">
            <p style="color: #94a3b8; font-size: 12px; margin: 0;">&copy; ${new Date().getFullYear()} Bernadette Energy. All rights reserved.</p>
          </div>
        </div>
      ` : `
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
              ${message?.replace(/\n/g, '<br />') || "No message provided."}
            </div>
          </div>
          <div style="background-color: #f8fafc; padding: 16px; text-align: center; border-top: 1px solid #e2e8f0;">
            <p style="color: #94a3b8; font-size: 12px; margin: 0;">&copy; ${new Date().getFullYear()} Bernadette Energy. All rights reserved.</p>
          </div>
        </div>
      `;

  try {
    const { data, error } = await resend.emails.send({
      from: "Bernadette Energy <onboarding@resend.dev>",
      to: ["sr.sohan088@gmail.com"],
      subject: mailSubject,
      replyTo: email,
      html: htmlContent,
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
