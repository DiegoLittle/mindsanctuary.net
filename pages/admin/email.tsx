import React, { useEffect, useState } from 'react'
import EmailTemplate from '../../components/admin/email/templateDisplay'
import SelectTemplate from '../../components/admin/email/selectTemplate'
import DisplayTemplate from '../../components/admin/email/templateDisplay'
import UsersTable from '../../components/admin/usersTable'
import UsersTableChecked from '../../components/admin/usersTableChecked'

const Email = () => {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [emailTemplate, setEmailTemplate] = useState({ id: 1, name: 'Personal Welcome' })
  const [emailList,setEmailList] = useState([])
  const [users,setUsers] = useState([])
  const [selectMailList,setSelectMailList] = useState(false)

  useEffect(() => {
    const fetchPosts = async (url, setData) => {
      // get the data from the api
      const data = await fetch(url)
      // convert data to json
      const json = await data.json()
      setData(json)
      return json
    }
    fetchPosts(`${process.env.NEXT_PUBLIC_HOST}/api/admin/users`, setUsers)
  }, [])

  async function handleSubmit(){
      fetch(`${process.env.NEXT_PUBLIC_HOST}/api/email/send`,{
        method:"POST",
        body:JSON.stringify({emailList:emailList,template:emailTemplate})
      })
  }
  return (
    <div className='flex'>
<div className='block'>
<SelectTemplate selected={emailTemplate} setSelected={setEmailTemplate}></SelectTemplate>
        {/* <div>
          <input onChange={(e)=>setName(e.target.value)} className='' placeholder='Name'></input>
          <input  onChange={(e)=>setEmail(e.target.value)} className='' placeholder='email'></input>
          <button onClick={handleSubmit}>Send email</button>
        </div>
        <div>
          <label>Entire Mail List</label>
        <input onChange={(e)=>setSelectMailList(!selectMailList)} type="checkbox" ></input>
        <button onClick={handleSubmit}>Send email</button>
        </div> */}
        {/* <UsersTable users={users}></UsersTable> */}
        <UsersTableChecked bulk={{message:"Bulk mail",function:handleSubmit}} selectedPeople={emailList} setSelectedPeople={setEmailList} people={users}></UsersTableChecked>
</div>
        <DisplayTemplate selected={emailTemplate} name={"Diego"} email={"diego@mindsanctuary.net"}></DisplayTemplate>

    </div>
  )
}

export default Email