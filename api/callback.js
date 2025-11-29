import { OAuth } from "@netlify/netlify-cms-oauth-provider";

const oauth = new OAuth({
  clientId: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
});

export default oauth.callback;