export default async function handler(req, res) {
  const { code } = req.query

  if (!code) {
    return res.status(400).send("Missing authorization code")
  }

  try {
    const tokenResponse = await fetch("https://github.com/login/oauth/access_token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      }),
    })

    const data = await tokenResponse.json()

    if (data.error) {
      return res.status(400).send(`Authentication error: ${data.error_description || data.error}`)
    }

    // Return HTML that sends the token back to Decap CMS
    res.send(`
      <!DOCTYPE html>
      <html>
        <head><title>Success!</title></head>
        <body>
          <script>
            (function() {
              function receiveMessage(e) {
                console.log("receiveMessage %o", e);
                window.opener.postMessage(
                  'authorization:github:success:{"token":"${data.access_token}","provider":"github"}',
                  e.origin
                );
                window.removeEventListener("message", receiveMessage, false);
              }
              window.addEventListener("message", receiveMessage, false);
              window.opener.postMessage("authorizing:github", "*");
            })();
          </script>
          <p>Authorization successful! This window should close automatically.</p>
        </body>
      </html>
    `)
  } catch (error) {
    console.error("OAuth error:", error)
    res.status(500).send("Authentication failed")
  }
}
