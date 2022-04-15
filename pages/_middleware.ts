import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'
import prisma from "../lib/prisma"

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
  if(req.nextUrl.pathname=='/api/log/analytics'){
    // console.log(req)
  }
  if(req.nextUrl.pathname=="/collect/collect.png"){
    let date = new Date()
    let timestamp = date.toISOString()
    let emailID = req.nextUrl.searchParams.get("emailID")
    let email = req.nextUrl.searchParams.get("email")
    let body = {emailID,timestamp:timestamp,email:email}
    fetch(`${process.env.NEXT_PUBLIC_HOST}/api/log/email`,{
      method:"POST",
      body:JSON.stringify(body)
  })
  }
  


    let response = NextResponse.next()
    let ip = req.headers.get("x-forwarded-for")
    if(typeof(ip)=='undefined'){
      ip = req.headers.get('host')
    }
    let headers= {}
    req.headers.forEach((value,key)=>{
      headers[key] = value
    })
    // console.log(JSON.stringify(headers))
    // var newvoiceObject = $.extend(newvoiceObject,voiceObject);
    

    fetch(`${process.env.NEXT_PUBLIC_HOST}/api/log`,{
        method:"POST",
        body:JSON.stringify({
            message: 'Log from the edge',
            headers:headers,
            nested: {
              page: req.nextUrl.href,
              referrer: req.referrer,
              ua: req.ua?.ua,
              geo: req.geo,
              ip: ip,
            },
          })
    })
  return response
}