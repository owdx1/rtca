"use server"

import { getServerSession } from "next-auth";
import { prisma } from "./lib/db"
import { authOptions } from "./lib/auth";
import { image } from "@nextui-org/react";

export const postData = async (message: string) => {
    console.log("postdata enter")
    "use server";
    const Pusher = require("pusher");
    const session = await getServerSession(authOptions)
    const response = await prisma.message.create({
      data: {
        message: message,
        email: session?.user?.email,
      },
      include: {
        User: {
          select: {
            name: true,
            image: true,
          }
        }
      }
    })
    const pusher = new Pusher({
      appId: process.env.PUSHER_APP_ID,
      key: process.env.NEXT_PUBLIC_PUSHER_KEY,
      secret: process.env.PUSHER_SECRET,
      cluster:'eu',
      useTLS: true
    })

    pusher.trigger('chat' , 'send', {
      message: `${JSON.stringify(message)}\n\n`,
      User: {
        name: session?.user?.name,
        image: session?.user?.image
      },
    
    })
}