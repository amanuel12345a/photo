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
        <img className='w-[97%] mx-auto ' src='https://static.wixstatic.com/media/caa0a7_c9b4094045aa4b05b6d9bc97a415fda6~mv2.jpg/v1/crop/x_204,y_0,w_1640,h_1365/fill/w_836,h_696,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/_DSC3825-Edit.jpg' alt='' />
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
