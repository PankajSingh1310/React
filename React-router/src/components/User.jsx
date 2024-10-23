import React from 'react'
import { useParams } from 'react-router-dom'


function User() {

    const {userId} = useParams();
    
  return (
    <div>
      <h1 className='text-center text-2xl my-5'>This is Dynamic Route with param : {userId}</h1>
    </div>
  )
}

export default User
