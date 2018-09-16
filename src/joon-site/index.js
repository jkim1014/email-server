const Mailgun = require('mailgun-js')

const mailgunApiKey =
  process.env.MAILGUN_API_KEY || 'key-7130514599706e9b484f4540166e82bc'
const mailgunDomain =
  process.env.MAILGUN_DOMAIN ||
  'sandboxe224e682a8c149a3941547647f3e0efe.mailgun.org'
const mailgunFromEmail =
  process.env.MAILGUN_FROM_EMAIL ||
  '<inquiry@sandboxe224e682a8c149a3941547647f3e0efe.mailgun.org>'

const mailgun = new Mailgun({
  apiKey: mailgunApiKey,
  domain: mailgunDomain,
})

const to = 'joon.young1014@gmail.com'

exports.sendApplyEmail = (
  { body: { name, role, email, details } },
  res,
  next,
) => {
  const data = {
    from: `Apply ${mailgunFromEmail}`,
    to,
    subject: 'New Application in /join Form!',
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
    `,
  }
  mailgun.messages().send(data, (err, body) => {
    if (err) return next(err)
    return res.json(body)
  })
}

exports.sendContactEmail = (
  { body: { name, email, affiliation, reason, heard, details } },
  res,
  next,
) => {
  const data = {
    from: `Apply ${mailgunFromEmail}`,
    to,
    subject: 'New Contact in /contact Form!',
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
    `,
  }
  mailgun.messages().send(data, (err, body) => {
    if (err) return next(err)
    return res.json(body)
  })
}
