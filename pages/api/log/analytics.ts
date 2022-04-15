import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'
import nodemailer from 'nodemailer'


export default async (req: NextApiRequest, res: NextApiResponse) => {
  let data = JSON.parse(req.body)
  console.log(data)
  let createLog
  if(data.event=="user_signup"){
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
      from: '"Mind Sanctuary" mindsanctuarybot@gmail.com',
      to: 'diegochelittle@gmail.com',
      subject: `New User`,
      text:`New User Signed up!`,
      html: ` User with the email: ${data.email} just signed up! Make sure to follow their journey and ensure their success.
      `
    }
    transport.sendMail(mailData, function (err, info) {
      if(err)
        console.log(err)
      else
        console.log(info)
    })
  }
  if (data.email) {
    createLog = await prisma.analytics_event.create({
      data: {
        name: data.event,
        user: { connect: { email: data.email } },
      },
    })
  } else if (data.userid) {
    createLog = await prisma.analytics_event.create({
      data: {
        name: data.event,
        user: { connect: { id: data.userid } },
      },
    })
  }
  else{
    createLog = await prisma.analytics_event.create({
      data: {
        name: data.event,
      },
    })
  }

  req.statusCode = 200
  res.json(createLog)
}
