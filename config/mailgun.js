const Mailgun = require("mailgun-js");
const { apiKey, domain } = require("./index").mailgun;
const mailgunServer = new Mailgun({ apiKey, domain });

module.exports = mailgunServer;
