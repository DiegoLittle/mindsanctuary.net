import { getSession } from 'next-auth/react'
import { NextApiRequest } from 'next'
import prisma from '../../../lib/prisma'

export default async function handler(req: NextApiRequest, res) {
  // const {title,content} = JSON.parse(req.body)
  const session = await getSession({ req })
  switch (req.method) {
    case 'GET':
      if(session){
      var readResult = await prisma.moodLog.findMany({
        where: {
          user: {
            email: session.user?.email,
          },
        },
      })
      if (readResult.length == 0) {
        const createResult = await prisma.moodLog.create({
          data: {
            user: { connect: { email: session.user?.email } },
          },
        })
        var readResult = await prisma.moodLog.findMany({
            where: {
              user: {
                email: session.user?.email,
              },
            },
          })
      }
      
      
      // console.log(result)

      res.json(readResult)
    }
    else{
      res.json(Error("No Session"))
    }
      break
    case 'POST':
    //   var { title, content } = JSON.parse(req.body)
      const createResult = await prisma.moodLog.create({
        data: {
            user: { connect: { email: session.user?.email } },
        },
      })
      res.json(createResult)

      break
      case 'PUT':
        let moodlog = JSON.parse(req.body)
        // var { title, description,id,moodvalue} = JSON.parse(req.body)
        if(moodlog.symptoms==null){
          moodlog.symptoms = undefined
        }
        const updateResult = await prisma.moodLog.update({
        where:{
            // User = session and date is log date passed through as a prop
            // id:moodlog.id
            id: moodlog.id
        },
        data: {
            title: moodlog.title,
            description: moodlog.description,
            moodvalue:moodlog.moodvalue,
            symptoms:moodlog.symptoms
          },
        })
        res.send(200)
  
        break

    default:
      res.setHeader('Allow', ['GET', 'POST','PUT'])
      res.status(405).end(`Method ${method} Not Allowed`)
      break
  }
}
