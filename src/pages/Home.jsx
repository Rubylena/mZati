import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'

const Home = () => {
  return (
    <div className='main flex flex-col justify-center items-center text-center px-8'>
    <div className='md:w-2/6'>
      <p className='text-yellow text-6xl md:text-8xl font-bold'>mZATI</p>
      <p className='text-white text-xl md:text-3xl font-bold my-5'>JSON Encrypted Data Storage for Developers</p>
      <Link to='/get-started/generate'><button className='bg-yellow px-14 py-2 text-2xl md:px-20 md:py-3 rounded-full md:text-3xl font-bold text-blue'>Get Started</button></Link>
    </div>
  </div>
  )
}

export default Home