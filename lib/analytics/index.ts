


export default class log {

    public static async event(event){
        let body = {
            event:event.event_name,
            email:event.email,
            userid:event.user_id,
            timestamp: new Date().toISOString()
          }
          let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/log/analytics`,{
            method:'POST',
            body:JSON.stringify(body)
          })
          try {
            let data = await res.json()
            return data
          } catch (error) {
            console.log(error)
          }

    }
}