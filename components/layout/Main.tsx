import React from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

export const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
    <Navbar/>
    <main>{children}</main>
    <Footer/>
    </>
  )
}
