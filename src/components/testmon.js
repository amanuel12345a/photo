import React from 'react'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
function Testmon({firstName,lastName,text}) {
  return (
    <div className='text-center'>
      <div className='rounded-full bg-white w-[150px] mx-auto'>
        <img className='w-[100%]' src='https://img.freepik.com/free-icon/user_318-159711.jpg' alt=''/>
      </div>
      <div className='text-center md:w-[60%] lg:w-[45%] mx-auto'>
        <p className='inline-block'>{firstName}   
        {lastName}</p>
        
        <p >{text}</p>
      </div>
      <FormatQuoteIcon />
    </div>
  )
}

export default Testmon
