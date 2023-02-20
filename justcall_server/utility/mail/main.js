import env from "dotenv";
import nodemailer from "nodemailer";
import nehb from "nodemailer-express-handlebars";
import path from "path";
env.config();

async function send_mail({ userEmail, hash_code, subject, type }) {
  const __dirname = process.env.PWD;

  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL,
      pass: process.env.MAIL_PASS,
    },
  });
  transporter.use(
    "compile",
    nehb({
      viewEngine: {
        extname: ".handlebars",
        partialsDir: path.resolve(`${__dirname}/template/${type}`),
        defaultLayout: false,
      },
      viewPath: path.resolve(`${__dirname}/template/${type}`),
      extname: ".handlebars",
    })
  );

  const err = await transporter.sendMail({
    from: process.env.MAIL,
    to: userEmail,
    subject: subject,
    template: "mail",
    attachments: [
      {
        path: `${__dirname}/assets/background/backgraund.png`,
        filename: "backgraund.png",
        cid: "logo1",
      },
    ],
    context: {
      hash_code: hash_code,
    },
  });

  if (err.accepted[0] == userEmail) {
    return true;
  } else {
    return false;
  }
}

export default send_mail;
