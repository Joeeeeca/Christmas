export default async function handler(req, res) {
  const clientId = process.env.GITHUB_CLIENT_ID;

  const redirectUri = "https://highfieldroadchristmaslights.com/api/callback";

  const githubUrl =
    "https://github.com/login/oauth/authorize" +
    `?client_id=${clientId}` +
    `&redirect_uri=${encodeURIComponent(redirectUri)}` +
    `&scope=repo`;

  return res.redirect(githubUrl);
}
