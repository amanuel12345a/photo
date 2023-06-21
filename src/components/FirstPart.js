import React from 'react'
import Process from './process'

function FirstPart() {
  return (
    <div className='mt-[90px]'>
        <div className=''>
      <div className='border border-b-2 bg-hero-pattern h-[300px]'>
        <div className='w-[85%] m-auto border-2 my-6 text-center'>
            <h1 className='text-pink-500 font-extrabold pl-3 text-[30px]'>Hey there!</h1>
            <h1 className='font-bold pl-3 text-[30px] py-6'>LET'S CAPTURE THOSE MEMORIES!</h1>
            <h2 className='text-center px-3 text-[30px] font-light mb-5'>The key to a stress-free session is to have fun so we can showcase genuine moments!</h2>
        </div>
        </div>
        <div className=''>
            <h1 className='text-center font-bold my-5 text-[25px]'>THE PROCESS</h1>
            <div className='md:flex md:justify-between'>
            <Process />
            <Process />
            <Process />
            </div>
            
        </div>
      
      </div>
    </div>
  )
}

export default FirstPart
