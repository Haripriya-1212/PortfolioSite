import React from 'react'

export default function Word({word}) {
  return (
    <div className='flex flex-col justify-center items-center h-fit w-fit px-3 py-2 bg-gray-700 rounded-md text-white text-sm mb-3'>
        {word}
    </div>
  )
}
