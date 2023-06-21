import React from 'react'
import Form from '../components/Form'
import Testmon from '../components/testmon'
import Nav from '../components/Nav'


function Testmonials() {
    const datafromapi = []
   return (
    <div className='bg-[#FAEEE7] w-[100vw] h-[100vh] overflow-x-hidden'>
        <Nav />
      <Form />
      {
        datafromapi.map((item)=>{
            return <Testmon />
        })
      }
    </div>
  )
}

export default Testmonials
