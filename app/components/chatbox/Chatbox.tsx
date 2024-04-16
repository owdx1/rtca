"use client"

import React, { useEffect, useRef, useState } from 'react'
import {Image} from "@nextui-org/react"
import Pusher from 'pusher-js'


interface IAppProps {
  data: {
    User: {
      name: string | null;
      image: string | null;
    }
    message: string;
  }[];
}

const Chatbox = ({ data }: IAppProps) => {

  
  const [messages, setMessages] = useState(data);
  const messageEndRef = useRef<HTMLInputElement>(null);
  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({behavior: 'smooth'})
  }
  useEffect(() => {
    scrollToBottom();
  }, [messages])

  useEffect(() => {
    var pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY as string, {
      cluster: 'eu'
    });
  
    var channel = pusher.subscribe('chat');
    channel.bind('send', function(data: any) {
      console.log(data , "from CHANNELLLL")
      setMessages((prev) => [...prev, data])
    });

    return () => {
      pusher.unsubscribe('chat')
    }
    
  }, [])
  return (
    <div className='p-6 flex-grow max-h-screen overflow-y-auto py-32'>
      <div className='flex flex-col gap-4'>
        {messages.map((elem, index) => (
          <div key={index}>
            <div className='flex gap-2 items-center'>
              <Image alt='' src={elem.User.image as string}
                width={50} height={50}
                className='object-cover rounded-lg mr-4 w-12 h-12'
              />
              <div className='rounded-lg p-4 bg-white shadow-md self-start'>{elem.message}</div>
            </div>
            <p>{elem.User?.name}</p>
          </div>
        ))}
        <div  ref={messageEndRef}></div>
      </div>
    </div>
  )
}

export default Chatbox