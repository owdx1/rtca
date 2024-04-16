"use client"
import { useSession } from 'next-auth/react'
import React from 'react'
import Image from 'next/image'
import { LoginButton } from "../buttons/LoginButton"
import { LogoutButton } from "../buttons/LogoutButton"


type Props = {}

function Navbar({}: Props) {

    const session = useSession();
  return (
    <nav className='w-full h-24 items-center flex justify-between px-10'>
      <p>ogulcan&zeyno</p>
      {session.status === "authenticated" ? 
        ( 
          <div className='flex gap-4 items-center justify-center h-full px-4'>
            <Image alt='' src={session.data.user?.image as string} className='h-full rounded-full' width={90} height={90}/>
            <p>logged in as: {session.data.user?.name}</p>
            <LogoutButton />
          </div>
        )
        :
          <LoginButton />
      }
    </nav>
  )
}

export default Navbar