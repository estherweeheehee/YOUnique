import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ImgAndDesc from '../components/ImgAndDesc';


function UserProfile() {
    const { id } = useParams();
    const [userData, setUserData] = useState({})

    useEffect(() => {
      fetch(`/api/user/view/${id}`)
        .then((response) => response.json())
        .then((data) => setUserData(data));
    }, []);

  return (
    <div>
      <div className="container">
        <div className="leftcolumn">
          <ImgAndDesc img={userData["display_pic_url"]} description={userData["user_description"]} />
        </div>
        <div className="rightcolumn">
        </div>
      </div>
       
    </div>
  )
}

export default UserProfile