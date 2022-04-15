import Cookies from 'universal-cookie'

const cookies = new Cookies()
export async function collect(url) {
  let sessionID = cookies.get('sessionID')

// creates session if doesn't exist
  if (typeof sessionID == 'undefined') {
    sessionID = generateID()
    cookies.set("sessionID",sessionID)
  }
  let body = {
    sessionID: sessionID,
    referrer: document.referrer,
    page:url
  }
  let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/log/analytics`, {
    method: 'POST',
    body: JSON.stringify(body),
  })
  let data = await res.json()
}

var generateID = function () {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return '_' + Math.random().toString(36).substr(2, 9)
}
