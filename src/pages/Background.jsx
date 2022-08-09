import React from 'react'
import GetStarted from './GetStarted'
import Logobacground from './Logobacground'
import './style.css'

const Background = ({children}) => {
  return (
    <Logobacground>
    <div className='flex flex-col justify-center lg:flex-row gap-5 '>
      <div>
        <GetStarted />
      </div>
      <div>
          {children}
      </div>
    </div>
    </Logobacground>
  )
}

export default Background