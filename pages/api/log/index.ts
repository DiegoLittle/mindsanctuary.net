import { NextApiRequest } from "next/types"
import prisma from "../../../lib/prisma"



export default async function handler(req:NextApiRequest, res) {
    let data = JSON.parse(req.body)
    await prisma.requestLog.create({
        data:{
            message: data.message,
            headers: data.headers,
            page: data.nested.page,
            referrer: data.nested.referrer,
            useragent: data.nested.ua,
            geo: data.nested.geo,
            ip: data.nested.ip
        }
    })

    res.send(200)
}