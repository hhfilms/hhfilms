export default function handler(req, res) {
  const VERIFY_TOKEN = process.env.VERIFY_TOKEN; // Replace with your verify token

  if (req.method === "GET") {
    // Verification request
    const mode = req.query["hub.mode"];
    const token = req.query["hub.verify_token"];
    const challenge = req.query["hub.challenge"];

    if (mode && token === VERIFY_TOKEN) {
      res.status(200).send(challenge); // Verification success
    } else {
      res.status(403).send("Forbidden"); // Verification failed
    }
  } else if (req.method === "POST") {
    // Handle incoming webhook events
    const body = req.body;

    console.log("Webhook received:", body);

    // Respond with a 200 status to acknowledge receipt
    res.status(200).send("EVENT_RECEIVED");
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
