import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/mZATI.svg'
import './style.css'

const Logobacground = ({children}) => {
  return (
    <div className='flex main'>
        <div className='w-1/12 flex flex-row justify-start'>
            <Link to='/'><img className='w-24 ml-5 mt-5' src={logo} alt=""></img></Link>
        </div>
        <div className='w-11/12 flex justify-center items-center '>
            {children}
        </div>
    </div>
  )
}

export default Logobacground