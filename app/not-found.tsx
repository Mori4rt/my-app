'use client'
import React from 'react'
import Link from 'next/link'

const NotFoundPage = () => {
  return (
    <>
        <div className="text-center m-20 font-bold text-5xl">Такой страницы не существует как и тебя</div>
        <Link href="/" className="text-center flex justify-center"><button className="bg-transparent hover:bg-fuchsia-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Вернуться в начало</button></Link>
    </>
   
  )
}

export default NotFoundPage