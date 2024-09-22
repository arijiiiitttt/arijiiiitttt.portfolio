import React from 'react'
import { Button } from '../ui/button'

const About = () => {
  return (
    <>
      <div className='min-h-screen flex flex-col  place-items-center py-10' id='aboutPg'>
        <div className='text-center text-[2.5rem] px-10 popBlack font-bold bg-[#defbff] '><h1>Meet the Developer</h1></div>
        <div className='flex flex-row gap-x-6 p-12'>
          <img src='./Logos/cat.png' className='rounded-full size-[29rem] border-white border-3 shadow-sm' alt='img'></img>
          <div className='flex flex-col place-items-start place-content-center'>
            <p>click the button below or visit his LinkedIn profile.</p>
            <div className='flex flex-row gap-3 font-medium'>
              <button className='hover:bg-black bg-[#ff0000] px-7 py-2 border-2 shadow-md border-white text-white rounded-lg text-[22px]'>Hire Me</button>
              <button className='hover:bg-black hover:text-white text-[22px] border-2 px-8 shadow-md border-black rounded-lg'>View Resume</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About