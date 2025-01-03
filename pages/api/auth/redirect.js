export default function handler(req, res) {
    const { code, error } = req.query;
  
    if (error) {
      console.error("Error during Instagram login:", error);
      res.status(400).send("Instagram login failed");
      return;
    }

    if (code) {
      // Exchange the code for an access token
      const clientId = process.env.INSTAGRAM_CLIENT_ID;
      const clientSecret = process.env.INSTAGRAM_CLIENT_SECRET;
      const redirectUri = "https://hearthustlefilms.com/api/auth/redirect"; // Same as the one provided to Instagram
  
      fetch(`https://api.instagram.com/oauth/access_token`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          client_id: clientId,
          client_secret: clientSecret,
          grant_type: "authorization_code",
          redirect_uri: redirectUri,
          code,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.error) {
            console.error("Error fetching access token:", data.error);
            res.status(400).send("Error fetching access token");
          } else {
            console.log("Access token received:", data.access_token);
            res.status(200).send("Instagram login successful");
            // Store the access token securely for future API requests
          }
        })
        .catch((error) => {
          console.error("Error during token exchange:", error);
          res.status(500).send("Server error");
        });
    } else {
      res.status(400).send("No code provided");
    }
  }
  