import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'
import prisma from '../../../lib/prisma'
import { chat_session,message } from '../../../components/types'
import * as dayjs from 'dayjs';


const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);



export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req })
  let data = JSON.parse(req.body)

  switch (req.method) {
    case 'POST':
      // Should generate response and then create record with response or just update i
      data.messages = await getBotResponse(data.messages)
      // console.log(data.messages)
      let createSession = await prisma.chat_session.create({
        data: {
          user: { connect: { email: session.user?.email } },
          messages: data.messages,
        },
      })
      res.json(createSession)
      break
    case 'PUT':
      
      data.messages = await getBotResponse(data.messages)
      // console.log("Updating chat_session record",data)
      let updateSession = await prisma.chat_session.update({
        where: {
          id: data.id,
        },
        data: data,
      })
      res.json(updateSession)

      break
    default:
      break
  }
}

async function getBotResponse(messages:message[]){
  console.log(messages)
  console.log(messages.length)
  let gpt3_res
    // I'll likely want more than just the messages so the bot can better understand the user or context
    if(messages.length==2){
      gpt3_res = await openai.createCompletion("text-davinci-002", {
        prompt: `The following is a conversation with an AI assistant. The assistant is empathetic and very friendly.\n\nHuman: Hello, who are you?\nAI: I am an AI created by OpenAI. How are you feeling today?\nHuman: ${messages[messages.length-1].text}.\nAI:`,
        temperature: 0.9,
        max_tokens: 150,
        top_p: 1,
        frequency_penalty: 0.0,
        presence_penalty: 0.6,
        stop: [" Human:", " AI:"],
      });
    }
    else{
      let dialog;
      messages.forEach((message)=>{
        dialog += (`${message.speaker}: ${message.text}\n`)
      })
      dialog += "AI:"
      console.log(dialog)
      gpt3_res = await openai.createCompletion("text-davinci-002", {
        prompt: `The following is a conversation with an AI assistant.
         The assistant is empathetic and very friendly.
         \n\nHuman: Hello, who are you?\n
         AI: I am an AI created by OpenAI. ${dialog}`,
        temperature: 0.9,
        max_tokens: 150,
        top_p: 1,
        frequency_penalty: 0.0,
        presence_penalty: 0.6,
        stop: [" Human:", " AI:"],
      });

    }
    let gpt3_text = gpt3_res.data.choices[0].text
    let response:message = {
        text: `${gpt3_text}`,
        speaker: 'AI',
        timestamp: dayjs().toISOString(),
        choices:["Breathing exercise","Journal entry"]
      }
    messages.push(response)
    return messages

}