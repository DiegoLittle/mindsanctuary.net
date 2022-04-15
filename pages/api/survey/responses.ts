
import { getSession } from "next-auth/react"
import prisma from "../../../lib/prisma"

export default async function handler(req, res) {
    const session = await getSession({ req })
    switch (req.method) {
      case "GET":
          // console.log(session)
          const readResult = await prisma.surveyResponse.findMany({
              where:{
                respondent:{
                  email:session.user?.email
                }
              },
              include:{
                  survey:true
              }
            })
          // console.log(readResult)
          
          res.json(readResult)
          break;
      case "PUT":
          const survey= JSON.parse(req.body)
          // console.log(survey.questions[0].choice)
          const createResult = await prisma.survey.update({
            where:{
              id:sid
            },
            data:{
              questions: survey.questions
            }
            })
            res.send(200)
      
          break;
  
      default:
          res.setHeader('Allow', ['GET', 'PUT'])
          res.status(405).end(`Method ${req.method} Not Allowed`)
          break;
  }
    // console.log(result)
  }