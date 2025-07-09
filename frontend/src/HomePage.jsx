import React from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'

export default function HomePage() {
  return (
    <>
        <Navbar/>
        {/* About ------------------------------------------------------------- */}
        <div className='flex flex-row justify-start items-start py-20'>
            {/* <div className='border-2 border-purple-500 p-10'> */}
            <div className='flex-1'>
                <h1 className='font-primary text-5xl mb-5'>Hello, I'm Haripriya</h1>
                <h2 className='font-secondary text-3xl text-gray-500 mb-10'>Data Analyst</h2>
                <p className='font-primary'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, exercitationem cupiditate veniam, cum delectus sit sunt quibusdam laboriosam aspernatur, voluptatibus possimus? Praesentium amet ducimus recusandae totam aperiam dolorum rerum, non laboriosam autem et dolore architecto atque nostrum? Possimus, fugit provident.</p>
            </div>
            {/* <div className='h-80 w-70 bg-gradient-to-r from-purple-500 to-blue-500 text-white ml-20'> */}
            <div className='w-70 text-white ml-20'>
                {/* Avatar or something */}
                {/* Hii */}
            </div>
        </div>
        {/* Skills ------------------------------------------------------------- */}
        <div className='flex flex-row flex-wrap justify-start items-start gap-5'>
            <img src="src/assets/c.png" alt="Placeholder" className='w-20 h-20' />
            <img src="src/assets/cpp.png" alt="Placeholder" className='w-20 h-20' />
            <img src="src/assets/python.png" alt="Placeholder" className='w-20 h-20' />
            <img src="src/assets/react.svg" alt="Placeholder" className='w-20 h-20' />
            <img src="src/assets/html2.png" alt="Placeholder" className='w-20 h-20' />
            <img src="src/assets/css.png" alt="Placeholder" className='h-20' />
            <img src="src/assets/tailwind.png" alt="Placeholder" className='h-20' />
            <img src="src/assets/js2.png" alt="Placeholder" className='w-20 h-20' />
            <img src="src/assets/mongo.png" alt="Placeholder" className='h-18' />
            <img src="src/assets/flutter.png" alt="Placeholder" className='h-20 w-20' />
            <img src="src/assets/mysql.png" alt="Placeholder" className='h-20' />
            <img src="src/assets/rpi.png" alt="Placeholder" className='h-20' />
            <img src="src/assets/splunk.png" alt="Placeholder" className='w-40' />
        </div>
        {/* Projects ------------------------------------------------------------- */}
        <div className='flex flex-row gap-10 flex-wrap justify-start items-start py-20'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            
        </div>
    </>
  )
}
