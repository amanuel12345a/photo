import React from 'react'
import Info from './Info'
import { Link } from 'react-router-dom'
import Links from './Links'

function About() {
  return (
    <div>
    <div>
        <div className='w-[90%] mx-auto text-center'>
        <div className=''>
            <img src='https://static.wixstatic.com/media/caa0a7_b0b783f5e64a429291da378b97123a70~mv2.jpg/v1/fill/w_959,h_1439,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/HighResolution-21.jpg' alt=''/>
        </div>
        <div className='my-5'>
        <img src='https://static.wixstatic.com/media/caa0a7_0be0ffb58dfb4cd3ab08e03e6707a35a~mv2.jpg/v1/fill/w_900,h_1350,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/MP-25.jpg' alt=''/>
        </div>
        <div>
        <img src='https://static.wixstatic.com/media/caa0a7_2853f84801e94577af448fa5e78a37a5~mv2.jpg/v1/fill/w_959,h_1439,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/MP-33.jpg' alt=''/>
        </div>
        </div>
        <div className='text-center'>
            <p className='my-5 font-semibold text-[20px]'>Let's go on an adventure together! </p>
            <button className='bg-pink-500 text-center w-[250px] h-[40px] font-semibold'>CHECK OUT OUR PACKAGES</button>
        </div>
        <div className='testemoni'> 
            <div className='text-[18px] text-center px-6 my-5'>
                <p className='pb-4 border-b-2 border-pink-500'>
                "Wonderful experience! I highly recommend Photographer Eyla who was very kind and patient during a family session. Specially with my 2 year old who didn’t want to look to the camera… I’m super satisfied with the results and for sure will continue to work with her in the future"
                </p>
            </div>
            <div className='mb-5 text-center'>
                <button className='bg-pink-500 text-white w-[250px] h-[35px]' >THE REVIEWS</button>
            </div>
        </div>
        <div className='flex-col text-center'>
            <Info />
            <Info />
        </div>
        <div className='w-[95%] mx-auto mt-10'>
            <img src='https://static.wixstatic.com/media/caa0a7_0fd5a0e07a8c49aaa05db9439f58e954~mv2.jpg/v1/fill/w_2039,h_1360,al_c,q_90,enc_auto/Social%20Media-34.jpg' alt='' />
        </div>
        <Links />
    </div>
    </div>
  )
}

export default About
