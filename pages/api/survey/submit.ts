import { getSession } from "next-auth/react"
import prisma from "../../../lib/prisma"
import {gradeSurvey} from '../../../lib/util-survey'
import {Survey, SurveyResponse} from '../../../components/types'

export default async function handler(req, res) {
    const sid = req.query.id
    const session = await getSession({ req })
    switch (req.method) {
      case "POST":
          const surveyResponse:SurveyResponse = JSON.parse(req.body)
          var results = gradeSurvey(surveyResponse)
          const createResult = await prisma.surveyResponse.updateMany({
            where:{
              id: surveyResponse.id,
              respondent:{
                email:session.user?.email
              }
            },
            data:{
              isComplete:true,
              results: results
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
          res.json(updatedResponse)
          break;
      default:
          res.setHeader('Allow', ['GET', 'PUT'])
          res.status(405).end(`Method ${req.method} Not Allowed`)
          break;
  }
    // console.log(result)
  }