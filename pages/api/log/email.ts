import { NextApiRequest, NextApiResponse } from 'next';
import prisma from "../../../lib/prisma"


export default async (req:NextApiRequest, res:NextApiResponse) => {
    // Email id -> random number created and passed as prop to the email generation
    let body = JSON.parse(req.body)
    let updateResult = await prisma.email.update({
        where:{
            id: body.emailID
        },
        data:{
            read: new Date().toISOString()
        }
    })

    res.json(updateResult)
    
    // req.statusCode = 200


}