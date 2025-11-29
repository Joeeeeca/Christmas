export default async function handler(req, res) {
  const { code } = req.query;

  if (!code) {
    return res.status(400).json({ error: "Missing code query parameter" });
  }

  const clientId = process.env.GITHUB_CLIENT_ID;
  const clientSecret = process.env.GITHUB_CLIENT_SECRET;

  const response = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: { Accept: "application/json" },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      code,
    }),
  });

  const data = await response.json();

  if (data.error) {
    return res.status(400).json(data);
  }

  // Redirect back to Decap CMS
  const token = data.access_token;
  const cmsRedirect = `/admin/#access_token=${token}&token_type=bearer`;

  return res.redirect(cmsRedirect);
}
