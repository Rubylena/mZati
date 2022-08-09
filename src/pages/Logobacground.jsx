import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/mZATI.svg'
import './style.css'

const Logobacground = ({children}) => {
  return (
    <div className='flex main pr-20 lg:pr-0'>
        <div className='w-1/12'>
            <Link to='/'><img className=' ml-5 mt-5' src={logo} alt=""></img></Link>
        </div>
        <div className='w-11/12 mx-8 flex justify-center items-center '>
            {children}
        </div>
    </div>
  )
}

export default Logobacground