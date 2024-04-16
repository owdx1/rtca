"use client"
import { SessionProvider } from "next-auth/react"
import type { ReactNode } from "react"
import { NextUIProvider } from "@nextui-org/react"


export const NextAuthProvider = ({children}:{children: ReactNode}) => {
    return (
      <SessionProvider>
        <NextUIProvider>
          {children}
        </NextUIProvider>
      </SessionProvider>
    )
}