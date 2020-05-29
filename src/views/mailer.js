const fs = require("fs");
const path = require("path");
const nodemailer = require("nodemailer");
const hbs = require("handlebars");
const { host, port, user, pass, templatesPath } = require("../../config/mail");

const transport = nodemailer.createTransport({
  host,
  port,
  auth: { user, pass },
});

// create html in frontend, use css inliner then paste it at template file
// const transport = nodemailer.createTransport({
//   service: "gmail",
//   auth: { user: "email", pass: "password" },
// });

module.exports = ({ template, context, ...options }) => {
  // template
  let hbsTemplate;

  if (template) {
    const file = fs.readFileSync(path.join(templatesPath, `${template}.hbs`), "utf8");
    hbsTemplate = hbs.compile(file)(context);
  }

  const mailHtml = hbsTemplate || options.html;

  transport.sendMail({ ...options, html: mailHtml });
};
