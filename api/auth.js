export default async function handler(req, res) {
  const { provider } = req.query;

  if (provider !== "github") {
    return res.status(400).json({ error: "Invalid provider" });
  }

  const clientId = process.env.GITHUB_CLIENT_ID;
  const redirectUrl = `${process.env.VERCEL_URL || "https://christmas-lights-cms.vercel.app"}/api/callback`;

  const authorizeUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=repo`;

  return res.redirect(authorizeUrl);
}
