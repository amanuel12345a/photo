import React from 'react'

function Form({aman}) {
    const handleSumbit = (e) =>{
        e.preventDefault()
    }
  return (
    <div className='flex-col justify-center mt-[70px]'>
      {
        aman && <div className='md:text-center'>
          <h1 className='text-[30px] text-pink-500'>Let's get in touch!</h1>
        </div>
      }
      <form className='flex flex-col ml-5' onSubmit={handleSumbit}>
        <div className='flex flex-col md:flex-row md:mx-auto '>
            <div className='my-5 w-[90vw] md:w-[400px]  md:mx-5'>
              <label>First Name</label>
            <input className='shadow appearance-none border-2 border-black rounded w-full py-2 px-3 md:py-4 md:px-7 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type='text' placeholder='First Name'/>
            </div>
        <div className='my-5 w-[90vw] md:w-[400px] md:mx-5'>
        <label>Email</label>
        <input className='shadow appearance-none border-2 border-black rounded w-full py-2 px-3 md:py-4 md:px-7 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'  type='text' placeholder='email' required/>
        </div>
        
        </div>
        <div className='flex flex-col md:flex-row md:mx-auto'>
            <div className='my-5 sm:w-[90vw] md:w-[400px] md:mx-5'>
            <label>Last Name</label>
            <input className='shadow appearance-none border-2 border-black rounded w-full py-2 px-3 md:py-4 md:px-7 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type='text' placeholder='Last Name'/>
            </div>
        <div className='my-5 sm:w-[90vw] md:w-[400px]  md:mx-5'>
        <label>Email</label>
        <input className='shadow appearance-none border-2 border-black rounded w-full py-2 px-3 md:py-4 md:px-7 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'  type='text' placeholder='Phone'/>
        </div>
        
        </div>
        <div className='mx-auto'>
        <textarea className='my-2 w-[300px] md:w-[500px] h-[100px] mx-auto border-2 border-black pl-5 text-[18px] resize-none' placeholder='write your testimonial here.... '  required/>
        </div>
        <div className='mx-auto text-center'>
          <p className='font-light text-[18px]'>If you don't recieve an email from me in 12 hours after sumbitting please check your junk/spam.</p>
        <button className='bg-green-300 h-[40px] mt-2 w-[250px]' type="submit">{aman ? 'Sumbit': 'Add Testemonial'} </button>
        </div>
        
      </form>
    </div>
  )
}

export default Form
