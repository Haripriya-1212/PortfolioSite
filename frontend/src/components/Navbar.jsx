import React from 'react'

export default function Navbar() {
  return (
    <div className='flex flex-row justify-between items-center'>
    <div className='text-white flex flex-row gap-10 text-xl font-secondary'>
            <a href="#about" className="hover:underline cursor-pointer">About</a>
            <a href="#skills" className="hover:underline cursor-pointer">Skills</a>
            <a href="#projects" className="hover:underline cursor-pointer">Projects</a>
            {/* <li>Certifications</li> */}
    </div>
    <div className='text-white font-secondary text-xl'>
            <a href="#contact" className="hover:underline cursor-pointer">Contact</a>
    </div>
    </div>
  )
}
