const config = require("../../config");
const mailgunServer = require("../../config/mailgun");

const { mailgunFromEmail } = config.mailgun;

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
  mailgunServer.messages().send(data, (err, body) => {
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
  mailgunServer.messages().send(data, (err, body) => {
    if (err) return next(err);
    return res.json(body);
  });
};
