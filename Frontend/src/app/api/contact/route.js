import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return Response.json({ error: 'All fields are required.' }, { status: 400 });
    }

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: 'kiran.chaudhary.cg@gmail.com',
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0A192F; color: #E2E8F0; padding: 32px; border-radius: 12px; border: 1px solid #D4AF3733;">
          <h2 style="color: #D4AF37; margin-bottom: 24px; font-size: 24px;">📬 New Message from Your Portfolio</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #1E3A5F; width: 100px;">
                <strong style="color: #D4AF37;">Name</strong>
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #1E3A5F;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #1E3A5F;">
                <strong style="color: #D4AF37;">Email</strong>
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #1E3A5F;">
                <a href="mailto:${email}" style="color: #D4AF37;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #1E3A5F;">
                <strong style="color: #D4AF37;">Subject</strong>
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #1E3A5F;">${subject}</td>
            </tr>
          </table>
          <div style="margin-top: 24px;">
            <strong style="color: #D4AF37; display: block; margin-bottom: 12px;">Message:</strong>
            <div style="background: #0D2137; padding: 20px; border-radius: 8px; border-left: 3px solid #D4AF37; line-height: 1.7; white-space: pre-wrap;">${message}</div>
          </div>
          <p style="margin-top: 24px; font-size: 12px; color: #64748b;">
            Sent from portfolio contact form • Reply-To: ${email}
          </p>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error('Mail error:', err.message);
    return Response.json({ error: err.message }, { status: 500 });
  }
}
