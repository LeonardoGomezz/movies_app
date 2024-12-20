import React from 'react'
import { Navbar } from './Navbar'

export const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
    <Navbar/>
    <main>{children}</main>
    </>
  )
}
