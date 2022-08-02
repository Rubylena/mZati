import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const GetStarted = ({children}) => {
  const activePath = window.location.pathname.split("/")[2];
  const [path, setPath] = useState(activePath);

  const info =[
    {
      name: 'Generate Key',
      link: 'generate'
    },
    {
      name: 'POST JSON Object',
      link: 'post'
    },
    {
      name: 'GET JSON Object',
      link: 'get'
    }
  ]

  return (
      <div className='flex flex-col gap-5 text-center'>
        {info.map((child, index) => (
        <div className={`bg-lightBlue hover:bg-yellow hover:opacity-70 ${path === child.link && "bg-yellow"}`}
        key={index}
        onClick={()=> setPath(index)}
        >
          <Link to={"/get-started/" + child.link}>
            <p className='text-blue px-10 py-3 text-3xl'>{child.name}</p>
            </Link>
        </div>
        ))}
      </div>
  )
}

export default GetStarted;