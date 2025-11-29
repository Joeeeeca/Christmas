export default async function handler(req, res) {
  const client_id = process.env.GITHUB_CLIENT_ID;
  const client_secret = process.env.GITHUB_CLIENT_SECRET;

  const { code } = req.query;

  if (!code) {
    return res.status(400).json({ error: "Missing ?code parameter" });
  }

  // Exchange code for token
  const response = await fetch(
    `https://github.com/login/oauth/access_token?client_id=${client_id}&client_secret=${client_secret}&code=${code}`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
    }
  );

  const data = await response.json();

  if (data.error) {
    return res.status(400).json({ error: data.error_description });
  }

  // Redirect back to CMS with token
  return res.redirect(
    `/admin/#access_token=${data.access_token}`
  );
}
