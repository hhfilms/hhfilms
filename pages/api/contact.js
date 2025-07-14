import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const {name, email, phone, eventType, budget, location, date, message} = req.body;

    if (!name || !email || !phone || !eventType || !budget || !location || !date || !message) {
      return res.status(400).json({error: "All fields are required"});
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // your Gmail address
        pass: process.env.GMAIL_APP_PASSWORD, // your Gmail app password
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: "hearthustlefilms@gmail.com", // recipient
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
  <html>
    <body style="background-color: #121212; padding: 40px 20px; font-family: Arial, sans-serif; color: #f0f0f0;">
      <table align="center" cellpadding="0" cellspacing="0" width="600" style="background-color: #1e1e1e; border-radius: 8px; padding: 30px;">
        <tr>
          <td align="center" style="color: #bf0b26; font-size: 24px; font-weight: bold; padding-bottom: 24px;">
            New Contact Submission
          </td>
        </tr>
        <tr><td style="padding: 8px 0;"><strong style="color:#9fc5e8;">Name:</strong> ${name}</td></tr>
        <tr><td style="padding: 8px 0;"><strong style="color:#9fc5e8;">Email:</strong> ${email}</td></tr>
        <tr><td style="padding: 8px 0;"><strong style="color:#9fc5e8;">Phone:</strong> ${phone}</td></tr>
        <tr><td style="padding: 8px 0;"><strong style="color:#9fc5e8;">Date:</strong> ${date}</td></tr>
        <tr><td style="padding: 8px 0;"><strong style="color:#9fc5e8;">Location:</strong> ${location}</td></tr>
        <tr><td style="padding: 8px 0;"><strong style="color:#9fc5e8;">Service Type:</strong> ${eventType}</td></tr>
        <tr><td style="padding: 8px 0;"><strong style="color:#9fc5e8;">Budget:</strong> ${budget}</td></tr>
        <tr>
          <td style="padding-top: 20px;">
            <p style="margin: 0; color: #cccccc;"><strong style="color:#f5c242;">Message:</strong></p>
            <div style="margin-top: 10px; background-color: #2a2a2a; padding: 15px; border-radius: 4px; color: #bf0b26; white-space: pre-wrap;">
              ${message}
            </div>
          </td>
        </tr>
      </table>
    </body>
  </html>
`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({success: true});
    } catch (err) {
      console.error("Error sending email:", err);
      res.status(500).json({error: "Failed to send email"});
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
