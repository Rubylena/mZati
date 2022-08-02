import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'

const Home = () => {
  return (
    <div className='main flex flex-col justify-center items-center text-center'>
    <div className='w-1/4'>
      <p className='text-yellow text-6xl md:text-9xl font-bold'>mZATI</p>
      <p className='text-white text-xl md:text-3xl font-bold my-5'>JSON Encrypted Data Storage for Developers</p>
      <Link to='/get-started/generate'><button className='bg-yellow px-20 py-3 rounded-full text-3xl font-bold text-blue'>Get Started</button></Link>
    </div>
  </div>
  )
}

export default Home