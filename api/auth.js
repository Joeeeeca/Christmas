export default function handler(req, res) {
  const clientId = process.env.GITHUB_CLIENT_ID;
  const redirectUri = `${process.env.VERCEL_URL}/api/callback`;

  if (!clientId) {
    return res.status(500).json({ error: "Missing GITHUB_CLIENT_ID" });
  }

  const url = new URL("https://github.com/login/oauth/authorize");
  url.searchParams.set("client_id", clientId);
  url.searchParams.set("redirect_uri", `https://${redirectUri}`);
  url.searchParams.set("scope", "repo");

  return res.redirect(url.toString());
}
