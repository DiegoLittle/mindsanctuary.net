import { NextApiRequest } from 'next'
import prisma from '../../../lib/prisma'
import sendConfirmationEmail from '../../../lib/mailer'
import bcrypt from 'bcrypt'
const saltRounds = 10;
import Cors from 'cors'
import log from '../../../lib/analytics';

const cors = Cors({
  methods: ['GET', 'HEAD'],
})
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}


export default async function handler(req: NextApiRequest, res) {
  
  await runMiddleware(req,res,cors)

  const {name,email,password} = JSON.parse(req.body)
  var confirmationCode = Math.floor(Math.random() * 899999 + 100000)
  
  const hash = await bcrypt.hash(password, saltRounds);
  const user = await prisma.user.findUnique({
      where:{
        email: email
      }
    })
  if (user){
      res.json({error:"An account with that email already exists"})
  }
  else{
      console.log("Creating new user")
      const createResult = await prisma.user.create({
          data: {
              name:name,
              email:email,
              passwordhash:hash,
              confirmationCode:confirmationCode
          },
        })
        sendConfirmationEmail(email,name,confirmationCode)
        delete createResult.passwordhash
        res.json({user:createResult,error:false})
    }


}