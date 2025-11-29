export default async function handler(req, res) {
  const { provider } = req.query;

  if (provider !== "github") {
    return res.status(400).json({ error: "Invalid provider" });
  }

  const clientId = process.env.GITHUB_CLIENT_ID;
  const redirectUri = `${process.env.SITE_URL}/api/callback`;

  const githubAuthUrl = `https://github.com/login/oauth/authorize?` +
    `client_id=${clientId}` +
    `&redirect_uri=${encodeURIComponent(redirectUri)}` +
    `&scope=repo`;

  return res.redirect(githubAuthUrl);
}
