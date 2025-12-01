export default function handler(req, res) {
  // This handles the OAuth callback and sends the code back to the CMS
  const { code } = req.query

  if (!code) {
    return res.status(400).send("Missing authorization code")
  }

  // Send the code back to the CMS window
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
              window.location.origin
            );
            window.close();
          }
        </script>
        <p>Authorization successful! This window should close automatically.</p>
      </body>
    </html>
  `)
}
