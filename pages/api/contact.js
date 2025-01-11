import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const {name, email, phone, serviceType, location, date, message} = req.body;

    if (!name || !email || !phone || !serviceType || !location || !date || !message) {
      return res.status(400).json({error: "All fields are required"});
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
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Date:</strong> ${date}</p>
          <p><strong>Location:</strong> ${location}</p>
          <p><strong>Service Type:</strong> ${serviceType}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      });

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
