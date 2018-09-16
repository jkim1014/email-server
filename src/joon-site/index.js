const Mailgun = require("mailgun-js");

const mailgunApiKey =
  process.env.MAILGUN_API_KEY ||
  "1678fb0d3fcf0ab36c7174671a6f5c8e-7bbbcb78-08978c27";
const mailgunDomain =
  process.env.MAILGUN_DOMAIN ||
  "sandbox7643b823e2294cc5832af0e2128ab5ea.mailgun.org";
const mailgunFromEmail =
  process.env.MAILGUN_FROM_EMAIL ||
  "<inquiry@sandbox7643b823e2294cc5832af0e2128ab5ea.mailgun.org>";

const mailgun = new Mailgun({
  apiKey: mailgunApiKey,
  domain: mailgunDomain
});

const to = "joon.young1014@gmail.com";

exports.sendApplyEmail = (
  { body: { name, role, email, details } },
  res,
  next
) => {
  const data = {
    from: `Apply ${mailgunFromEmail}`,
    to,
    subject: "New Application in /join Form!",
    html: `
    <b>Name</b>: ${name}
    <br>
    <br>
    <b>Role</b>: ${role}
    <br>
    <br>
    <b>Email</b>: ${email}
    <br>
    <br>
    <b>Details</b>: ${details}
    `
  };
  mailgun.messages().send(data, (err, body) => {
    if (err) return next(err);
    return res.json(body);
  });
};

exports.sendContactEmail = (
  { body: { name, email, affiliation, reason, heard, details } },
  res,
  next
) => {
  const data = {
    from: `Apply ${mailgunFromEmail}`,
    to,
    subject: "New Contact in /contact Form!",
    html: `
    <b>Name</b>: ${name}
    <br>
    <br>
    <b>Affiliation</b>: ${affiliation}
    <br>
    <br>
    <b>Heard</b>: ${heard}
    <br>
    <br>
    <b>Email</b>: ${email}
    <br>
    <br>
    <b>Reason</b>: ${reason}
    <br>
    <br>
    <b>Details</b>: ${details}
    `
  };
  mailgun.messages().send(data, (err, body) => {
    if (err) return next(err);
    return res.json(body);
  });
};
