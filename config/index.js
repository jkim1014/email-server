const dotenv = require("dotenv").config();

module.exports = {
  mailgun: {
    apiKey:
      process.env.MAILGUN_API_KEY ||
      "1678fb0d3fcf0ab36c7174671a6f5c8e-7bbbcb78-08978c27",
    domain:
      process.env.MAILGUN_DOMAIN ||
      "sandbox7643b823e2294cc5832af0e2128ab5ea.mailgun.org",
    mailgunFromEmail:
      process.env.MAILGUN_FROM_EMAIL ||
      "<inquiry@sandbox7643b823e2294cc5832af0e2128ab5ea.mailgun.org>"
  }
};
