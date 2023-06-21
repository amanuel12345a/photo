import React from 'react'

function Info() {
  return (
    <div className='bg-white rounded-full py-10'>
      <div>
        <h1 className='text-pink-400 text-[18px] font-semibold'>
        Let's have some fun!
        </h1>
      </div>
      <div>
        <h1 className='font-bold'>THE PROCESS</h1>
      </div><div className='px-4'>
        <p className='font-semibold py-3' >Photo sessions with us will be a relaxing and enjoyable stress-free experience where we'll show you every step so there won't be any pressure while facing the camera.</p>
        <p className='font-semibold'>All you have to do is enjoy moments and let us do the rest!﻿</p>
        </div>
        <div>
            <button className='text-red-600 font-semibold bg-green-400 mt-3 w-[120px] ' >Learn more</button>
        </div>
    </div>
  )
}

export default Info
