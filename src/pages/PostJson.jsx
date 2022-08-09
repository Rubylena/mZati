import React from 'react'
import Background from './Background'

const PostJson = () => {
  return (
    <Background>
      <div className='lg:w-3/4 bg-lightBlue text-left text-white p-5 flex flex-col gap-5'>
        <p>import requests</p>
        <p>import json</p>
        <p>url = "https://swaqdb.herokuapp.com/post_json"</p>
        <p>'payload = <code> json.dumps(&#123; "key": "XXXXXXXXXXX", "data": json-data &#125;)'</code></p>
        <p>headers = &#123; 'Content-Type': 'application/json'&#125;</p>
        <p>response = requests.request("POST", url, headers=headers, data=payload)</p>
        <p className='mb-14'>print(response.text)</p>
      </div>
    </Background>
  )
}

export default PostJson