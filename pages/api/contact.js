import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  console.log(process.env.SENDGRID_API_KEY)
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    try {
      await sendgrid.send({
        to: "hearthustlefilms@gmail.com", // Replace with your email
        from: "eric@hearthustlefilms.com", // Replace with a verified sender email (can be temporary)
        subject: `New Contact Form Submission from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      });

      res.status(200).json({ success: true });
    } catch (err) {
      console.error("Error sending email:", err);
      res.status(500).json({ error: "Failed to send email" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
