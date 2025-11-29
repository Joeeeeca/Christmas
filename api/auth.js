export default function handler(req, res) {
  const { query } = req;

  if (!query.code) {
    return res.status(400).json({ error: "Missing code query parameter" });
  }

  return res.redirect(
    `https://github.com/login/oauth/access_token?client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}&code=${query.code}`
  );
}
