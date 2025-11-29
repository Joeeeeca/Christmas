export default function handler(req, res) {
  return res
    .status(400)
    .json({ error: "Token exchange is not used for GitHub OAuth" });
}
