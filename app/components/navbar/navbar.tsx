'use client'

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

const NavBar = () => {
  const pathname = usePathname()
  return (
    <div className='flex bg-red-950 text-zinc-50 p-5 justify-center'>
        <Link href="/" className={` m-5 ${pathname === '/' ? 'text-green-200' : ''}`}>Home</Link>
        <Link href="/jokes/" className= {` m-5 ${pathname === '/jokes' ? 'text-red-300' : ''}`}>Jokes</Link>
        <Link href="/history " className={` m-5 ${pathname === '/history' ? 'text-blue-600' : ''}`}>History</Link>

    </div>
  )
}

export default NavBar