import React from 'react'
import Info from './Info'
import { Link } from 'react-router-dom'
import Links from './Links'

function About() {
  return (
    <div>
    <div>
        <div className='w-[90%] mx-auto text-center lg:flex lg:flex-row lg:justify-between'>
        <div className=''>
            <img src='https://images.unsplash.com/photo-1687156025945-c1008a847e51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80' alt=''/>
        </div>
        <div className='my-5 lg:my-0 lg:mx-5'>
        <img src='https://images.unsplash.com/photo-1687156025945-c1008a847e51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80' alt=''/>
        </div>
        <div>
        <img src='https://images.unsplash.com/photo-1687156025945-c1008a847e51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80' alt=''/>
        </div>
        </div>
        <div className='text-center'>
            <p className='my-5 font-semibold text-[20px]'>Let's go on an adventure together! </p>
            <Link className="w-[150px]" to='/package'>
            <button className='bg-pink-500 text-center w-[250px] h-[40px] font-semibold hover:bg-white'>CHECK OUT OUR PACKAGES</button>
            </Link>
        </div>
        <div className='testemoni'> 
            <div className='text-[18px] text-center px-6 my-5 lg:mx-auto lg:w-[50%] xl:w-[30%]'>
                <p className='pb-4 border-b-2 border-pink-500'>
                "Wonderful experience! I highly recommend Photographer Eyla who was very kind and patient during a family session. Specially with my 2 year old who didn’t want to look to the camera… I’m super satisfied with the results and for sure will continue to work with her in the future"
                </p>
            </div>
            <div className='mb-5 text-center'>
                <Link className="w-[150px]" to='/testomonial'>
                <button className='bg-pink-500 text-white w-[250px] h-[35px] hover:bg-white hover:text-black' >THE REVIEWS</button>
                </Link>
            </div>
        </div>
        <div className='flex flex-col text-center lg:flex-row justify-between'>
            <Info />
            <Info />
        </div>
        <div className='w-[95%] mx-auto mt-10 '>
            <img className='lg:w-[100%]' src='https://images.unsplash.com/photo-1687156025945-c1008a847e51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80' alt='' />
        </div>
        <Links />
    </div>
    </div>
  )
}

export default About
