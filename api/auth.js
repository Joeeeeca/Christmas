export default async function handler(req, res) {
  const clientId = process.env.GITHUB_CLIENT_ID;

  // 🔒 Hard-code your real site URL for now
  const siteUrl = "https://highfieldroadchristmaslights.com";

  const redirectUri = `${siteUrl}/api/callback`;

  const githubUrl =
    `https://github.com/login/oauth/authorize?client_id=${clientId}` +
    `&redirect_uri=${encodeURIComponent(redirectUri)}` +
    `&scope=repo`;

  return res.redirect(githubUrl);
}
