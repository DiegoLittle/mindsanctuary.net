import { NextApiRequest, NextApiResponse } from 'next';
import { json } from 'stream/consumers';
import prisma from '../../lib/prisma'

export default  async (req:NextApiRequest, res:NextApiResponse) => {

    let contact = JSON.parse(req.body)
    let createResult = await prisma.contactForm.create({
        data:{
            firstName:contact.firstName,
            lastName:contact.lastName,
            email:contact.email,
            phone:contact.phone,
            subject:contact.subject,
            message:contact.message
        }
    })

    res.json(createResult)
}