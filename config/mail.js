const path = require("path");

// module.exports = {
//   host: "smtp.mailtrap.io",
//   port: "2525",
//   user: "95e8cc177f4310",
//   pass: "d4f266fe6b0e89",
// };

module.exports = {
  // auth
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  user: process.env.MAIL_USER,
  pass: process.env.MAIL_PASS,

  // templates path
  templatesPath: path.resolve("./resources/mail"),
};
