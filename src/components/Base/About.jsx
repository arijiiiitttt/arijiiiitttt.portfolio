import React from 'react'
import { Button } from '../ui/button'

const About = () => {
  return (
    <>
      <div className='lg:min-h-screen h-[68vh] flex flex-col justify-center items-center lg:py-10' id='aboutPg'>
        <div className='text-center text-[1.3rem] md:text-[1.99rem] md:px-6 lg:text-[2.5rem] lg:px-10 popBlack font-bold bg-[#defbff] '>
          <h1>Meet the Developer</h1>
        </div>
        <div className='flex flex-col md:flex-row lg:flex-row md:gap-x-3 lg:gap-x-6 md:p-6 lg:p-12 items-center justify-center'>
          <img src='./Logos/cat.png' className='rounded-full w-[18rem] md:w-[24.5rem] lg:w-[29rem] border-white lg:border-3 shadow-sm' alt='img'></img>
          <div className='flex flex-col items-center md:items-start justify-center mt-4 md:mt-0 lg:mt-0'>
            <p className='text-center md:text-left'>Click the button below or visit his LinkedIn profile.</p>
            <div className='flex flex-row gap-2 md:gap-3 lg:gap-3 font-medium mt-4'>
              <button className='hover:bg-black bg-[#ff0000] px-5 py-1 md:px-7 md:py-2 lg:px-7 lg:py-2 border-2 md:border-2 lg:border-2 shadow-md border-white text-white rounded-lg text-[19px] md:text-[21.5px] lg:text-[22px]'>Hire Me</button>
              <button className='hover:bg-black hover:text-white lg:text-[22px] text-[19px] md:text-[21.5px] border-2 lg:border-2 md:px-6 px-5 lg:px-8 shadow-md border-black rounded-lg'>View Resume</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
