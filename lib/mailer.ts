
import nodemailer from 'nodemailer'
import {emailConfirmationHTML, passwordResetHTML} from './confirmationEmail'

export default function sendConfirmationEmail(email:string,name:string,confirmationCode:number){
    console.log("Inside Mail Function")
    const transport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        auth: {
          user: "mindsanctuarybot@gmail.com",
          pass: process.env.GMAIL_PASS,
        },
        secure: false,
        tls: {rejectUnauthorized: false}
      });
      const mailData = {
        from: '"Mind Sanctuary" sanctuarybot@gmail.com',
        to: email,
        subject: `Mind Sanctuary Email Verification`,
        text:`We received a request to reset your password. Continue by clicking on the following link. If you didn't create an account with Mind Sanctuary, you can safely delete this email.
        Confirm your email If that doesn't work, copy and paste the following link in your browser:
        https://${process.env.NEXT_PUBLIC_HOST}/api/auth/confirm?confirmatoncode=${confirmationCode}&email=${email}
        Thank you,
        Mind Sanctuary
        You received this email because we received a request for the password reset of your account. If you didn't request to reset your password you can safely delete this email.
        `,
        html: emailConfirmationHTML(name,confirmationCode,email)
        // `<div><h1>Email Confirmation</h1>
        // <h2>Hello ${name}</h2>
        // <p>Thank you for subscribing. Please confirm your email by clicking on the following link</p>
        // <a href=${process.env.NEXT_PUBLIC_HOST}/api/auth/confirm?confirmatoncode=${confirmationCode}&email=${email}> Click here</a>
        // </div>`
       
        // text: req.body.message + " | Sent from: " + req.body.email,
        // html: `<div>${req.body.message}</div><p>Sent from:
        // ${req.body.email}</p>`
        // emailHTML(name,confirmationCode,email)
      }
      transport.sendMail(mailData, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info)
      })
}

export function sendPasswordReset(email:string,confirmationCode:number){
  console.log("Inside Mail Function")
  const transport = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: "mindsanctuarybot@gmail.com",
        pass: process.env.GMAIL_PASS,
      },
      secure: false,
      tls: {rejectUnauthorized: false}
    });
    const mailData = {
      from: '"Mind Sanctuary" sanctuarybot@gmail.com',
      to: email,
      subject: `Mind Sanctuary Password Reset`,
      text:`
      We received a request to reset your password. Continue by clicking on the following link. If you didn't create an account with Mind Sanctuary, you can safely delete this email.
Confirm your email If that doesn't work, copy and paste the following link in your browser:
https://${process.env.NEXT_PUBLIC_HOST}/api/auth/confirm?confirmatoncode=${confirmationCode}&email=${email}
Thank you,
Mind Sanctuary
You received this email because we received a request for the password reset of your account. If you didn't request to reset your password you can safely delete this email.
`,
      html: passwordResetHTML(confirmationCode,email)
     
      // text: req.body.message + " | Sent from: " + req.body.email,
      // html: `<div>${req.body.message}</div><p>Sent from:
      // ${req.body.email}</p>`
      // emailHTML(name,confirmationCode,email)
    }
    transport.sendMail(mailData, function (err, info) {
      if(err)
        console.log(err)
      else
        console.log(info)
    })
}