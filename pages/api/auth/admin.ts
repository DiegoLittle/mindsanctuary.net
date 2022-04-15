// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'
import prisma from "../../../lib/prisma"


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const session = await getSession({ req })
    switch (req.method) {
      case "GET":
        if(session.user.email=="diegochelittle@gmail.com"){
            res.json({admin:true})
        }
        else{
            res.json({admin:false})
        }
        // let userData = JSON.parse(req.body).password
        // let updateResult = await prisma.user.update({
        //   where:{
        //     email:session.user?.email
        //   },
        //   data:{
        //     data:userData
        //   }
        // })
        // res.json(session.user)
        break
      default:
        res.setHeader('Allow', ['PUT','DELETE'])
        res.status(405).end(`Method ${req.method} Not Allowed`)
        break;
    }
}
