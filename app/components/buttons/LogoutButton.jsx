"use client"
import { signOut } from "next-auth/react"


export const LogoutButton = () => {
    return (
      <button onClick={() => signOut()} className="p-4 bg-neutral-200 rounded-lg">
        log out
      </button>
    )
  }
  