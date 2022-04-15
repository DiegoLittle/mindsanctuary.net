import { NextApiRequest } from 'next'
import prisma from '../../../lib/prisma'


export default async function handler(req: NextApiRequest, res) {
    const email = req.query.email
    const confirmationCode=parseInt(req.query.confirmatoncode)

    var user = await prisma.user.findUnique({
        where:{
          email: email
        }
      })
    if(user?.confirmationCode==confirmationCode){
        user = await prisma.user.update({
            where:{
              email: email,
            },
            data:{
                emailVerified:new Date().toISOString()
            }
          })
          if(user.passwordhash){
            res.redirect(`${process.env.NEXT_PUBLIC_HOST}/auth/signin?success=Account succesfully verified. Login below`)
          }
          else{
            res.redirect(`${process.env.NEXT_PUBLIC_HOST}/dashboard`)
          }
          
    }
    else{
      res.redirect(`${process.env.NEXT_PUBLIC_HOST}/dashboard`)
    }

    // res.json(user)
}