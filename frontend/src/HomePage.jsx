import React from 'react'
import Navbar from './components/Navbar'

export default function HomePage() {
  return (
    <>
        <Navbar/>
        {/* About ------------------------------------------------------------- */}
        <div className='flex flex-row justify-start items-start py-20'>
            <div className='h-80 w-70 bg-gradient-to-r from-purple-500 to-blue-500 text-white mr-10'>
                {/* Avatar or something */}
                {/* Hii */}
            </div>
            {/* <div className='border-2 border-purple-500 p-10'> */}
            <div className='flex-1 p-10'>
                <h1 className='font-primary text-5xl mb-5'>Hello, I'm Haripriya</h1>
                <h2 className='font-secondary text-3xl text-gray-500 mb-10'>Data Analyst</h2>
                <p className='font-primary'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, exercitationem cupiditate veniam, cum delectus sit sunt quibusdam laboriosam aspernatur, voluptatibus possimus? Praesentium amet ducimus recusandae totam aperiam dolorum rerum, non laboriosam autem et dolore architecto atque nostrum? Possimus, fugit provident.</p>
            </div>
        </div>
        {/* Skills ------------------------------------------------------------- */}
    </>
  )
}
