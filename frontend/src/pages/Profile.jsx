import React from 'react'
import { useState } from 'react'


function Profile() {
    const [profile, setProfile] = useState({})

    // useEffect(()=>{
    //     fetch("http://example.com/movies.json")
    //       .then((response) => response.json())
    //       .then((data) => setProfile(data));
    //   },[])

  return (
    <div>
        {/* <img src={profile.image} alt="" />
      <button></button>
      <button></button> */}
    </div>
  )
}

export default Profile