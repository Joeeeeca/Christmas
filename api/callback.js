export default function handler(req, res) {
  const { code } = req.query;

  if (!code) {
    return res.status(400).send("Missing authorization code");
  }

  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Authorizing...</title>
      </head>
      <body>
        <script>
          if (window.opener) {
            window.opener.postMessage(
              'authorization:github:success:${JSON.stringify({ code })}',
              '*'
            );
            window.close();
          }
        </script>
        <p>Authorization successful! This window should close automatically.</p>
      </body>
    </html>
  `);
}
