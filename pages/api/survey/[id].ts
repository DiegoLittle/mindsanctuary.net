
import { PrismaClient } from "@prisma/client"
import { getSession } from "next-auth/react"
import prisma from "../../../lib/prisma"

export default async function handler(req, res) {
    const sid = req.query.id
    const session = await getSession({ req })
    switch (req.method) {
      case "GET":
          // console.log(session)
          const readResult = await prisma.surveyResponse.findFirst({
              where:{
                id:sid,
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
          const surveyResponse= JSON.parse(req.body)
          // console.log(survey.questions[0].choice)
          const createResult = await prisma.surveyResponse.updateMany({
            where:{
              id:sid,
              respondent:{
                email:session.user?.email
              }
            },
            data:{
              questions: surveyResponse.questions
            }
            })
          const updatedResponse = await prisma.surveyResponse.findFirst({
            where:{
              id:sid,
              respondent:{
                email:session.user?.email
              }
            },
          })
            res.send(updatedResponse)
      
          break;
  
      default:
          res.setHeader('Allow', ['GET', 'PUT'])
          res.status(405).end(`Method ${req.method} Not Allowed`)
          break;
  }
    // console.log(result)
  }