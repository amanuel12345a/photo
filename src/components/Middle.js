import React from 'react'
import { Link } from 'react-router-dom'

function Middle() {
  return (
      <div className='mt-[150px] xs:mt-[150px] sm:mt-[100px] lsm:mt-[0px] text-[20px]  pl-4 bg-white md:bg-[#FAEEE7] md:w-[90%] pt-4 mx-[10px] lg:mt-[-30px] lg:w-[60%] lg:mx-auto xl:w-[50%] '>
        <div className='md:text-center'>
        <h1 className='text-[30px] font-semibold md:inline-block pr-5'>
Aruba Family </h1>
<h1 className='text-[30px] font-semibold pb-5 md:inline-block'>Photographer</h1>
        </div>
      
<div className=''>
Hey, hey, hey! What's up, folks? We're Eyla and Jonnathan, a fun-loving duo of photographers based right here in Aruba. We specialize in capturing those precious moments that families and couples share, and we're all about making the experience as enjoyable and relaxed as possible.
</div>
<div className='py-7'>
As a family photographer, I Eyla love nothing more than capturing the laughter and love between family members, whether it's on a sandy beach or in a cozy living room. And as a couple photographer, my partner Jonnathan is all about capturing the romance and connection that partners share in the most stunning locations that our island has to offer.
</div><div>
We believe that every photoshoot is a unique experience, and we're all about bringing out the personality and natural beauty of each and every one of our clients. We don't do stiff and posed - we want you to be yourself and have fun!
    </div><div className='py-7'>
    So whether you're visiting our little slice of paradise or you call Aruba home, we'd be thrilled to capture your family or couple's special moments and create stunning memories that you'll cherish forever.
    </div>
    <div className='flex justify-center my-5'>
         <Link className="w-[150px]" to='/package'>
        <button className='bg-red-300 mx-auto w-[150px] h-[30px] text-[18px] font-semibold hover:bg-white ' >PACKAGES</button>
        </Link>
        </div>
    <div>
        <h1 className='text-[25px] font-bold text-center'>FOR FAMILIES, COUPLES AND SINGLES
WHO WANT TO HAVE FUN!</h1>
<p className='d-none'>It is our goal to preserve a moment in time in order for you to look back and remember all of the exclusive moments during your stay in the island.</p>
<p className='my-5 text-center text-pink-500 text-[30px]'>
Leave the details to us!</p>
    </div>
    </div>
  )
}

export default Middle
