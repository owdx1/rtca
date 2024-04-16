import { getServerSession } from 'next-auth'
import { redirect } from "next/navigation"
import React from 'react'
import { authOptions } from '../lib/auth'
import SendMessageForm from '../components/forms/SendMessageForm'
import Chatbox from '../components/chatbox/Chatbox'
import { prisma } from '../lib/db'

const getData = async () => {
  const data = await prisma.message.findMany({
    select: {
      message: true,
      id: true,
      User: {
        select: {
          name: true,
          image: true
        }
      }
    },
    orderBy: {
      createdAt: "asc"
    },
    take: 50
  })
  return data;
}

export const dynamic = "force-dynamic"

const ChatPage = async () => {

  const data = await getData();
  const session = await getServerSession(authOptions);

  if(!session) {
    redirect("/")
  }


  return (
    <div className="h-screen bg-neutral-300 flex">
      <Chatbox data={data as any}/>
      <SendMessageForm /> 
    </div>
  )
}

export default ChatPage