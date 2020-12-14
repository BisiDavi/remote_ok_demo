const withPWA = require("next-pwa");

module.exports = withPWA({
  env: {
    JWT_SECRET: "goodmorning",
    DATABASE_URL:
      "mongodb+srv://bisidave:zXVEC34YiYC4bsd9@cluster0.1xh9d.mongodb.net/remoteok?retryWrites=true&w=majority",
    NEXT_PUBLIC_API_HOST: "http://localhost:3000",
    GITHUB_ID: 'c33967d1412be8f14e44',
    GITHUB_SECRET: 'ef78fba8c196a5446c02cab6c9da25595a2af088',
  },
  pwa: {
    dest: "public"
  }
});
