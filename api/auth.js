export default async function handler(req, res) {
  // Enable CORS
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
  res.setHeader("Access-Control-Allow-Headers", "Content-Type")

  if (req.method === "OPTIONS") {
    return res.status(200).end()
  }

  const { code, provider } = req.query

  if (!code) {
    return res.status(400).json({ error: "Missing code parameter" })
  }

  try {
    // Exchange code for access token
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

    // Return token in the format Decap CMS expects
    res.status(200).json({
      token: data.access_token,
      provider: "github",
    })
  } catch (error) {
    console.error("OAuth error:", error)
    res.status(500).json({ error: "Authentication failed" })
  }
}
