import sendConfirmationEmail, { sendPasswordReset } from './mailer'
import prisma from "./prisma"


export async function confirmEmail(email,name){
    var confirmationCode = Math.floor(Math.random() * 899999 + 100000)
    const checkUser = await prisma.user.findUnique({
        where:{
          email: email
        }
      })
      if(checkUser){
        if(!checkUser.emailVerified){
          const test = await prisma.user.update({
            where:{
              email: email
            },
            data:{
              confirmationCode:confirmationCode
            }
          })
          sendConfirmationEmail(email,name,confirmationCode)
        }
    }
}

export async function resetPassword(email){
  console.log(email)
  var confirmationCode = Math.floor(Math.random() * 899999 + 100000)
  const checkUser = await prisma.user.findFirst({
    where:{
      email:email
    }
  })
  if(checkUser.emailVerified){
    const test = await prisma.user.update({
      where:{
        email: email
      },
      data:{
        confirmationCode:confirmationCode
      }
    })
    sendPasswordReset(email,confirmationCode)
  }
}