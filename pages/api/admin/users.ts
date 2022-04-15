import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'
import prisma from '../../../lib/prisma'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req })
  let user = await prisma.user.findFirst({
    where: {
      email: session.user.email,
    },
  })
  if (parseInt(req.query.dayspast) == 1) {
    let emailList = await prisma.$queryRaw`
        SELECT name,email,role
        FROM "User"
        WHERE "emailVerified" BETWEEN NOW() - INTERVAL '24 HOURS' AND NOW();`
    console.log(emailList)
    res.send(emailList)
  }
  else if (user.role == 'admin') {
    let emailList =
      await prisma.$queryRaw`SELECT name,email,role FROM "User" WHERE "email_list" = true;`
    res.send(emailList)
  } else {
    res.status(403)
    res.json([])
  }
}
