import React from 'react'
import Nav from '../components/Nav'
import Banner from '../components/Banner'
import About from '../components/About'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className='bg-[#FAEEE7]'>
      <Nav />
      <Banner />
      <About />
      <Footer />
    </div>
  )
}

export default Home
