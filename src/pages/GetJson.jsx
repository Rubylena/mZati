import React from 'react'
import Background from './Background'

const GetJson = () => {
  return (
    <Background>
      <div className='lg:w-3/4 bg-lightBlue text-left text-white p-5 flex flex-col gap-5'>
        <p>import requests</p>
        <p>import json</p>
        <p>url = "https://swaqdb.herokuapp.com/get_json"</p>
        <p>payload = json.dumps(&#123;
        "key": "XXXXXXXXXXX"
        &#125;)
        headers = &#123;
        'Content-Type': 'application/json'
        &#125;</p>
        <p>response = requests.request("POST", url, headers=headers, data=payload)</p>
        <p className='mb-14'>print(response.text)</p>
      </div>
    </Background>
  )
}

export default GetJson