import { MenuRounded } from '@mui/icons-material'
import React, { useState } from 'react'

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <>
    <nav className='bg-black text-white py-4 flex justify-between px-4 sm:px-8 items-center relative'>
      <div className='flex items-center gap-2'>
        <img className='w-24' src="/images/logoTest.png" alt="prueba tecnica" />
        <h1 className='text-xl font-semibold'>Best Movies</h1>
      </div>
      <ul className='text-lg font-medium hidden sm:flex gap-12 items-center'>
        <li>Popular</li>
        <li>Favoritos</li>
      </ul>
      <button className='sm:hidden' onClick={()=> setShowMenu(!showMenu)}>
        <MenuRounded/>
      </button>
    </nav>
      <div className={`w-full bg-black flex flex-col sm:hidden gap-4 justify-center items-center transition-all duration-700 absolute z-10 top-20 ${showMenu === true ? 'h-[200px] overflow-hidden py-4 top-10' : 'h-0 overflow-hidden py-0'}`}>
        <ul className='text-xl text-center'>
        <li>Popular</li>
        <li className='mt-8'>Favoritos</li>
        </ul>
      </div>
    </>
  )
}
