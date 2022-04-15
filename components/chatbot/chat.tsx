import React, { useEffect, useRef, useState } from 'react'
// import styles from './chat.module.css'
import * as dayjs from 'dayjs';
import { chat_session } from '../types';
import MessageLoader from '../ui/loader/loader'

const chat = () => {

    const [chat_session,setChat_session] = useState(null)
    const [loading,setLoading] = useState(false)
    var [userMessage, setUserMessage] = useState("")
    const [messages, setMessages] = useState([{
        text: "How are you feeling today?",
        speaker: "AI",
        timestamp:dayjs().toISOString(),
        choices:["Depressed", "Anxious", "Angry"]
    }])
    console.log(messages.length-1)
// Session initalized on first response.
// Chat Response Post -> /api/chatbot endpoint which creates a prisma record called chatSession with
    const [choices, setChoice] = useState(["Depressed", "Anxious", "Angry"])

    async function submitMessage(e,choice?:string) {
        e?.preventDefault()
        scrollToBottom()
        let time = dayjs().toISOString()
        // if choice passed in then set it to the userMessage
        userMessage = choice ?? userMessage
        let userResponse:chat_session = { text: userMessage, speaker: "Human", timestamp:time,choices:[] }
        messages.push(userResponse)
        setMessages(messages)
        setUserMessage("")
        

        // If session is null send a post request otherwise send a PUT request.
        if(chat_session){
            chat_session.messages.push(userResponse)
            let res = await fetch("/api/chatbot",{
                method:"PUT",
                body:JSON.stringify(chat_session)
            })
            let data = await res.json()
            console.log("PUT",data)
            setChat_session(data)
        }
        else{
            let res = await fetch("/api/chatbot",{
                method:"POST",
                body:JSON.stringify({messages:messages})
            })
            let data = await res.json()
            console.log("POST",data)
            setChat_session(data)
        }  


    }
    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }
    useEffect(() => {
        scrollToBottom()
      }, [chat_session]);

    return (
        <div className="flex flex-col w-full md:w-80 h-[34rem] mx-auto lg:mx-0 rounded-lg border border-gray-300">
            <div className='text-center w-full h-[10%]'>Mind Sanctuary Bot</div>

            <div className='flex flex-col bg-gray-100 w-full h-[75%] mt-auto pt-4 px-2 overflow-scroll'>
                {/* Bot chat bubble */}
                {/* <div className='inline-flex ml-4 shadow-sm bg-white text-sm p-2 rounded-md my-2'>How are you feeling today?</div> */}
                {/* User chat bubble */}
                {/* <div className='inline-flex float-right mr-4 shadow-sm text-sm p-2 rounded-md bg-blue-500 my-2 text-white'>I'm feeling anxious</div>
                <hr className='w-full border-0'></hr> */}

                {chat_session?chat_session.messages.map((message) =>
                    <div>
                        <div className={`${message.speaker == "Human" ? 'max-w-11/12 inline-block float-right mr-2 ml-4 shadow-sm text-sm p-2 rounded-md bg-blue-500 my-2 text-white' : 'inline-flex ml-2 mr-4 shadow-sm bg-white text-sm p-2 rounded-md my-2'}`}>{message.text}</div>
                        <hr className='w-full border-0'></hr>
                    </div>)
                :messages.map((message) =>
                <div>
                    <div className={`${message.speaker == "Human" ? 'block max-w-11/12  float-right mr-2 ml-4  shadow-sm text-sm p-2 rounded-md bg-blue-500 my-2 text-white' : 'inline-flex  ml-2 mr-4 shadow-sm bg-white text-sm p-2 rounded-md my-2'}`}>{message.text}</div>
                    <hr className='w-full border-0'></hr>
                </div>
                )}
                {/* Choices */}
                <div className='flex flex-col-reverse h-full w-full mb-8 '>
                    <div className='w-3/4'>
                        {chat_session?chat_session.messages[chat_session.messages.length-1].choices.map((choice) =>
                            <button onClick={()=>{
                                setUserMessage(choice)
                                submitMessage(null,choice)
                            }} className='inline-flex my-2 p-2 ml-4 bg-white hover:bg-gray-50 text-sm rounded-xl border border-blue-500 text-blue-500'>
                                {choice}
                            </button>
                        ):messages[messages.length-1]?.choices?.map((choice) =>
                        <button onClick={()=>{
                            setUserMessage(choice)
                            submitMessage(null,choice)
                        }} className='inline-flex my-2 p-2 ml-4 bg-white hover:bg-gray-50 text-sm rounded-xl border border-blue-500 text-blue-500'>
                            {choice}
                        </button>
                    )}

                    </div>
                </div>
                {/* <div className='inline-flex ml-4 shadow-sm bg-white text-sm p-2 rounded-md my-2'>How are you feeling today?</div> */}
                <div ref={messagesEndRef}></div>
            </div>

            <form onSubmit={(e) => { submitMessage(e) }} className='flex border-t border-gray-300 h-[12%]'>
                <textarea onKeyPress={(e)=>{
                    if(e.key=="Enter"&&!e.shiftKey){
                        submitMessage(e)
                    }
                }} onChange={(e) => setUserMessage(e.target.value)} value={userMessage} type="text" placeholder='Type your message' className='focus:outline-none text-sm p-4 w-5/6'></textarea>
                <button type="submit" className='w-8 h-8 my-auto ml-auto mr-4 fill-blue-400 hover:fill-blue-500 cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>send</title><g id="send"><path d="M27,5a3.31,3.31,0,0,0-3.42-.8L6.29,10a3.3,3.3,0,0,0-2.28,3,3.33,3.33,0,0,0,1.92,3.23l5.8,2.7,5.68-5.68a1,1,0,0,1,1.42,1.42l-5.68,5.68,2.7,5.8a3.33,3.33,0,0,0,3,1.93h.2a3.3,3.3,0,0,0,3-2.28L27.82,8.4A3.31,3.31,0,0,0,27,5Z"></path></g></svg></button>
            </form>
        </div>
    )
}

export default chat