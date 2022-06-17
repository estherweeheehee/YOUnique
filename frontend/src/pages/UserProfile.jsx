import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'


function UserProfile() {
    const params = useParams();
    
    
   

  return (
    <div>
        {params.id}
    </div>
  )
}

export default UserProfile