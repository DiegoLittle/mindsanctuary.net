import { NextApiRequest, NextApiResponse } from 'next';
import sendEmail from '../../../lib/email/personalWelcome'
import prisma from '../../../lib/prisma';

export default async (req:NextApiRequest, res:NextApiResponse) => {
    let template = JSON.parse(req.body).template
    let list = JSON.parse(req.body).emailList


    async function createAndSendEmail(body){
        let createdEmail = await prisma.email.create({
            data:{
                user: {connect :{email:body.email}},
                title: template.name
            }
        })
        let firstName = body.name.split(" ")[0]
        sendEmail(createdEmail.id,template,body.email,firstName)
    }
    // Needs to know which template to send
    await list.forEach((body)=>{
        createAndSendEmail(body)
        // Create email record in database
    })
    

    res.send(200)
}