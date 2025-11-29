import { OAuth } from "@netlify/netlify-cms-oauth-provider";

const oauth = new OAuth({
  // Vercel provides these automatically:
  clientId: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
});

export default oauth.authorize;
