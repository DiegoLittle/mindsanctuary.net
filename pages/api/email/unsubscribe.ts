import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma'

export default async (req:NextApiRequest, res:NextApiResponse) => {

    let email = req.query.email

    let updateResult = await prisma.user.update({
        where:{
            email:email
        },
        data:{
            email_list: false
        }
    })
    let data = {email:updateResult.email,emailList:updateResult.email_list}

    res.redirect(`${process.env.NEXT_PUBLIC_HOST}/notice/unsubscribe?success=${"You have succesfully unsubscribed"}`)


}