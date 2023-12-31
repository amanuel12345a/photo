import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';
function Bannerr() {
  return (
    <div className='mt-[70px] '>
        <div className='-z-1  '>
        <img 
         className='mx-auto' src='https://images.unsplash.com/photo-1687226013074-5d59ffeb2625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' alt='' />
      </div>
      <div className='bg-white w-[90%] mx-auto -mt-[20px]  text-start md:bg-[#FAEEE7] '>
      <div className='z-10 relative -top-10 bg-white md:top-[-20rem] md:left-8 md:w-[450px] md:pb-3'>
   <div>
    <h1 className='text-pink-500 font-extrabold text-[25px] md:text-[25px] pl-10'>hey friends,</h1>
    <h2 className='text-[30px] font-bold pl-4'> I am alula</h2>
   <div className='font-semibold px-6 text-[18px]'>
    <h2 className='py-7' >
Welcome to our site, We're so glad you are here!</h2>
    <h2>We are a young couple working as photographers on the Caribbean island of Aruba.</h2>
    <h2 className='py-7'>We are specialized in framing your happy memories; We would love to have the opportunity to work with you!</h2>
    </div>
   </div>
   <div className='flex justify-center'>
    <Link to='/portfolio'>
    <button className='bg-green-300 mx-auto w-[150px] h-[30px] text-[18px] font-semibold'>LEARN MORE</button>
    </Link>
    
   </div>
      </div>
      <div className='md:relative md:top-[-50rem]  md:bg-white md:w-[250px] md:right-[-50rem] '>
        <div className='flex justify-center'>
          <Link to='/contact'>
          <button className='bg-red-300 mx-auto w-[150px] h-[30px] text-[18px] font-semibold text-center hover:bg-white' > MEET US</button> 
          </Link>
        
        </div>
        <div className='d-none md:block bg-red-300 mx-auto w-[150px] h-[30px] text-[18px] font-semibold my-7 text-center hover:bg-white'>
          <Link to='/package'>
            <button >packages</button>
            </Link>
        </div>
        <div className='d-none md:block bg-red-300 mx-auto w-[150px] h-[30px] text-[18px] font-semibold text-center hover:bg-white'>
        <Link to='/contact'>
            <button>inQuire</button>
            </Link>
        </div>
        <div className='logo d-none md:flex justify-around'>
            <FacebookIcon />
            <InstagramIcon />
        </div>
      </div>
      <div className='mt-5 text-[20px] pl-4 md:bg-[#FAEEE7] md:w-[90%] mx-auto '>
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
      <Link to='/package'>
        <button className='bg-red-300 mx-auto w-[150px] h-[30px] text-[18px] font-semibold ' >PACKAGES</button>
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
    </div>
    </div>
  )
}

export default Bannerr
