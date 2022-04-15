import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import prisma from '../../../lib/prisma'

export default async (req:NextApiRequest, res:NextApiResponse) => {
    const session = await getSession({ req })

    
    switch (req.method) {
        case "GET":
            let readResult = await prisma.medication.findMany({
                where:{
                    user: {
                        email : session.user.email
                    },
                    stopped_tracking: null
                }
            })
            res.json(readResult)
            break;
        case "POST":
            let body = JSON.parse(req.body)
            let createResult = await prisma.medication.create({
                data:{
                    user: { connect: { email: session.user?.email } },
                    name:body.name,
                    dose: parseInt(body.dose),
                    daily_frequency: parseInt(body.countFrequency)
                }
            })
            res.json(createResult)
            break;
        case "DELETE":
            let med = JSON.parse(req.body)
            let stopResult = await prisma.medication.update({
                where:{
                    id: med.id
                },
                data:{
                    stopped_tracking: new Date().toISOString()
                }
            })
            res.json(stopResult)
            break;
        default:
            res.setHeader('Allow', ["POST"])
            res.status(405).end(`Method ${req.method} Not Allowed`)
            break;
    }
}