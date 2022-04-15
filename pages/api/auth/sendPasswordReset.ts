import { NextApiRequest } from 'next'
import { getSession } from 'next-auth/react'
import { resetPassword } from '../../../lib/auth'
import prisma from '../../../lib/prisma'

export default async function handler(req: NextApiRequest, res) {
    const email = req.query.email
    // const name = req.query.name
    // const session = await getSession({ req })
    resetPassword(email)
    // res.redirect(`${process.env.NEXT_PUBLIC_HOST}/auth/signin?success=Account succesfully verified. Login below`)
    res.send(200)
    // res.json(user)
}