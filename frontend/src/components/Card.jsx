import React from 'react'

export default function () {
  return (
    // <div className='flex flex-col overflow-auto border-3 border-gray-700 p-5 rounded-lg shadow-lg h-110 w-100 hover:shadow-2xl hover:shadow-gray-500/70'>
    <div className='flex flex-col overflow-auto border-3 border-gray-700 p-5 rounded-lg shadow-lg h-110 w-100 shadow-[0_0_15px_rgba(250,250,250,0.3)] hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]'>
        <div className='flex flex-row justify-between items-start mb-4'>
            <div className='font-secondary font-semibold text-xl'>
                Alzheimer's Ally
            </div>
            <div class="w-5 h-5">
                <a href="https://rgbacolorpicker.com/" target="_blank" class="group">
                    <img src="src/assets/icons/link.png" alt="link"
                        class="w-5 h-5 inline-block group-hover:hidden cursor-pointer align-middle" />
                    <img src="src/assets/icons/link2.png" alt="link"
                        class="w-5 h-5 hidden group-hover:inline-block cursor-pointer align-middle" />
                </a>
            </div>
        </div>
        <p className='mb-5'>A IoT project, also our major project - prototype of a device that helps Alzheimer patients more independent, uses ESP32 microcontroller, AI models for face recognition, scream detection and MERN website</p>
        <img src="/src/assets/projects/p1.png" alt="project" className='rounded-lg'/>
        {/* <div className='w-full h-10 bg-gray-700 text-gray-400 rounded-sm p-2 pl-3'>
            Ask anything about this project
        </div> */}
    </div>
  )
}
