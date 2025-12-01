export default async function handler(req, res) {
  // Enable CORS
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
  res.setHeader("Access-Control-Allow-Headers", "Content-Type")

  if (req.method === "OPTIONS") {
    return res.status(200).end()
  }

  const { code } = req.query

  if (!code) {
    // No code means we need to start the OAuth flow - redirect to GitHub
    const clientId = process.env.GITHUB_CLIENT_ID
    const redirectUri = `${process.env.OAUTH_CALLBACK_URL || "https://christmas-lights-cms.vercel.app"}/api/callback`
    const scope = "repo,user"

    const authUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${scope}`

    return res.redirect(authUrl)
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
      return res.status(400).json({ error: data.error_description || data.error })
    }

    // Return HTML that sends the token back to Decap CMS
    res.send(`
      <!DOCTYPE html>
      <html>
        <head><title>Authorizing...</title></head>
        <body>
          <script>
            (function() {
              function receiveMessage(e) {
                console.log("receiveMessage %o", e);
                window.opener.postMessage(
                  'authorization:github:success:${JSON.stringify({ token: data.access_token, provider: "github" })}',
                  e.origin
                );
                window.removeEventListener("message", receiveMessage, false);
              }
              window.addEventListener("message", receiveMessage, false);
              window.opener.postMessage("authorizing:github", "*");
            })();
          </script>
          <p>Authorizing...</p>
        </body>
      </html>
    `)
  } catch (error) {
    console.error("OAuth error:", error)
    res.status(500).json({ error: "Authentication failed" })
  }
}
