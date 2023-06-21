import React from 'react'

function Package() {
  return (
    <div >
      <div className='text-center'>
        <h1 className='text-[24px] font-bold '>Roundtrip</h1>
        <p className='my-3 text-[18px] '>Let us take you to amazing places!</p>
        <div className='bg-white w-[65%] mx-auto font-bold text-[25px] md:hidden'>
            ENJOY
        </div>
      </div>
      <div className='md:flex md-w-[70%] md:mx-auto'>
      <div>
        <img className='w-[97%] mx-auto ' src='https://images.unsplash.com/photo-1687156025945-c1008a847e51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80' alt='' />
      </div>
      <div className='md:bg-[#F8F4F1] md:h-[70%] md:relative md:right-[100px] md:top-5'>
        <div className='text-center'>
        <div className=' w-[65%] mx-auto font-bold text-[25px] d-none md:block'>
            ENJOY
        </div>
            <p className='text-[20px] font-light m-3 '>Perfect for couples or small families .</p>
            <p className='text-[18px] font-light'>(max 3 people)</p>
<h2 className='mb-3 text-[20px] text-pink-500'>This package includes:</h2>
<p className='px-8 text-[20px] font-light'>4 hours guide tour & photo session, 40 JPEG edited photos, drinks and snacks.</p>
<p className='bg-green-500 w-[150px] mx-auto text-[20px] font-semibold'>Price: 800 USD</p>
        </div>
        <div className=' w-[150px] mx-auto  font-semibold'>
            <button className='text-white bg-pink-400 w-[150px] text-[20px] my-3 '>BOOK NOW</button>
        </div>
        <div className='border-b-[1px] border-black w-[90%] mx-auto'>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Package
