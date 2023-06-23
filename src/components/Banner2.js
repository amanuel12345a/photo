import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
import './Banner.css'
function Banner() {
  return (
    <div className="pt-[90px] mb-[70px] xl:mb-[10px] ">
      <div className="flex justify-center">
        <div class=" bg-[url(https://placekitten.com/600)] h-[600px] w-[800px] lg:relative bg-no-repeat bg-cover">
          <div class="xl:flex xl:justify-around">
            <div className="mt-[20rem] m-[10px] rounded-md xs:h-[450px] sm:h-[500px] lsm:h-[400px] md:h-[270px] xl:border bg-white xl:bg-[#F8F4F1] xl:h-[350px] xl:w-[400px] xl:ml-[-10rem] xl:mt-[15rem]">
              <h1 className="text-pink-500 font-extrabold text-[30px] pl-10">Hey friend,</h1>
              <h2 className='text-[30px] font-bold pl-4'>We are Eyla & Jonnathan!</h2>
              <p className="font-semibold px-6 text-[18px]">
                Welcome to our site, We're so glad you are here! We are a young
                couple working as photographers on the Caribbean island of
                Aruba. We are specialized in framing your happy memories; We
                would love to have the opportunity to work with you!
              </p>
              <div className='flex flex-col text-center xl:pt-5'>
              <Link className="w-[150px] m-auto" to='/portfolio'>
    <button className='text-center bg-green-300 mx-auto w-[150px] h-[30px] text-[18px] font-semibold hover:bg-white hover:text-black '>LEARN MORE</button>
    </Link>
    <Link className="w-[150px]  m-auto" to='/contact'>
                <button className=' bg-red-300 my-3 lg:none mx-auto w-[150px] h-[30px] text-[18px] font-semibold text-center hover:bg-white' >MEET US</button>
                </Link>
   </div>
            </div>
            <div className="unsee xs:none d-none  xl:block xl:border mt-[-15px] xl:pt-2  m-[10px]  bg-[#fff] xl:h-[200px] xl:w-[200px] xl:mr-[-10rem] xl:mt-[5rem] pb-[10px] xl:bg-[#F8F4F1] ">
              <div className="flex flex-col ">
              <Link className="w-[150px] mx-auto" to='/contact'>
                <button className='bg-red-300 mx-auto w-[150px] h-[30px] text-[18px] font-semibold text-center hover:bg-white' >MEET US</button>
                </Link>
                <Link className="w-[150px] mx-auto" to='/package'>
                <button className='d-none xl:block bg-red-300 mx-auto w-[150px] h-[30px] text-[18px] font-semibold my-7  text-center hover:bg-white'>PACKAGES</button>
                </Link>
                <Link className="w-[150px] mx-auto" to='/contact'>
                <button className='d-none xl:block bg-red-300 mx-auto w-[150px] h-[30px] text-[18px] font-semibold my-7 md:my-0 text-center hover:bg-white' >INQUIRE</button>
                </Link>
              </div>
              <div className='md:mt-5 d-none  xl:flex text-center w-[30px] mx-auto'>
            <FacebookIcon  className="d-none mr-3 xl:block cursor-pointer"/>
            <InstagramIcon className="d-none xl:block cursor-pointer"/>
        </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
