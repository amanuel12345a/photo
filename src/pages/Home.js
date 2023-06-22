import React from 'react'
import Nav from '../components/Nav'
import Banner from '../components/Banner2'
import About from '../components/About'
import Footer from '../components/Footer'
import Middle from '../components/Middle'

function Home() {
  return (
    <div className='bg-[#FAEEE7]'>
      <Nav />
      <Banner />
      <Middle />
      <About />
      <Footer />
    </div>
  )
}

export default Home
