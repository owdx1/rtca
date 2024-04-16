"use client"

import { signIn } from "next-auth/react"

export const LoginButton = () => {
  return (
    <button onClick={() => signIn("google")}>
      login
    </button>
  )
}