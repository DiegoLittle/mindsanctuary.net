import { PrismaClient } from "@prisma/client"
import { getSession } from "next-auth/react"
import { NextApiRequest } from "next"
import { Survey } from "../../../components/types"
import prisma from "../../../lib/prisma"
import BecksDepressionData from '../../../lib/surveys/BecksDepression.json'
import PHQ9Data from '../../../lib/surveys/PHQ9.json'
import IPIPData from '../../../lib/surveys/IPIP.json'
import GAD7Data from '../../../lib/surveys/GAD7.json'






export default async function handler(req:NextApiRequest, res) {
    // const {title,content} = JSON.parse(req.body)
    const session = await getSession({ req })
    switch (req.method) {
        case "GET":
            if(req.query.title){
                var readResult = await prisma.survey.findFirst({
                    where:{
                        title:req.query.title
                    }
                })
                res.json(readResult)
            }
            else{
            if(session){
            // console.log(session)
            var readResult = await prisma.survey.findMany({
                },
              )
            if(readResult.length==0){
                const createBecks = await prisma.survey.create({
                    data: BecksDepressionData
                  })
                  const createPHQ9 = await prisma.survey.create({
                    data: PHQ9Data
                  })
                  
                  const createIPIP = await prisma.survey.create({
                      data: IPIPData
                  })
                  const createGAD7 = await prisma.survey.create({
                    data: GAD7Data
                  })
            }
            res.json(readResult)
        }
    }
            break;
        case "POST":
            const survey:Survey = JSON.parse(req.body)
            // console.log(survey)
            // const {title,content} = JSON.parse(req.body)
            const createResult = await prisma.surveyResponse.create({
                data: {
                survey: { connect: { id: survey.id } },
                respondent: { connect: { email: session.user?.email } },
                questions: survey.questions
                },
              })
              res.json(createResult)
            //   res.redirect(`${process.env.NEXT_PUBLIC_HOST}/survey/${createResult.id}`)
        
            break;
    
        default:
            res.setHeader('Allow', ['GET', 'POST'])
            res.status(405).end(`Method ${method} Not Allowed`)
            break;
    }

    
    
}
