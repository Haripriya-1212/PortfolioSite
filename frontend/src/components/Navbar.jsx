import React from 'react'

export default function Navbar() {
  return (
    <div className='flex flex-row justify-between items-center'>
    <div className='text-white'>
        <ul className='flex flex-row gap-10 text-xl font-secondary'>
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            {/* <li>Certifications</li> */}
        </ul>
    </div>
    <div className='text-white font-secondary'>
        <ul className='text-xl'>
            <li>Contact</li>
        </ul>
    </div>
    </div>
  )
}
