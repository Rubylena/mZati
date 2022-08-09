import React from 'react'
import Background from './Background';

const Generate = () => {
  return (
    <Background>
          <div className='lg:w-3/4 bg-lightBlue text-left text-white p-5 flex flex-col gap-5'>
            <p>import requests</p>
            <p>url = "https://swaqdb.herokuapp.com/gen"</p>
            <p>payload = ""</p>
            <p>headers = {}</p>
            <p>response = requests.request("GET", url, headers=headers, data=payload)</p>
            <p className='mb-14'>print(response.text)</p>
          </div>
    </Background>
  )
}

export default Generate