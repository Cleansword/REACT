import React from 'react'
import { useParams } from 'react-router-dom'

function Users() {
    const {userid} =useParams()
  return (
    <div className='bg-gray-700 text-3xl p-4 text-white text-center'>
      {userid} is a user
    </div>
  )
}

export default Users
