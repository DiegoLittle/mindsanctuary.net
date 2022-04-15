import { NextApiRequest } from 'next'
import prisma from '../../../lib/prisma'
import bcrypt from 'bcrypt'
const saltRounds = 10;

export default async function handler(req: NextApiRequest, res) {
  const email = req.query.email
  const confirmationCode = parseInt(req.query.confirmatoncode)



  switch (req.method) {
    case 'GET':
      var user = await prisma.user.findUnique({
        where: {
          email: email,
        },
      })
      if (user?.confirmationCode == confirmationCode) {
        res.redirect(
          `${process.env.NEXT_PUBLIC_HOST}/auth/reset-password?confirmationCode=${confirmationCode}&email=${email}`
        )
        // Redirect user to a Reset Password form with confirmation code in query
        // user = await prisma.user.update({
        //     where:{
        //       email: email,
        //     },
        //     data:{
        //         emailVerified:new Date().toISOString()
        //     }
        //   })
      } else {
        res.redirect(`${process.env.NEXT_PUBLIC_HOST}/dashboard`)
      }
      break
    case 'POST':
      let body = JSON.parse(req.body)
      const hash = await bcrypt.hash(body.password, saltRounds);
      var update = await prisma.user.updateMany({
        where: {
          email:body.email,
          confirmationCode: parseInt(body.confirmationCode)
        },
        data:{
          passwordhash:hash
        }
      })
      var user = await prisma.user.findFirst({
        where: {
          email:body.email,
          confirmationCode: parseInt(body.confirmationCode)
        }
      })
      delete user.passwordhash
      
      res.json(user)
      break
    default:
      res.setHeader('Allow', ['PUT', 'DELETE'])
      res.status(405).end(`Method ${req.method} Not Allowed`)
      break
  }
  // res.json(user)
}
