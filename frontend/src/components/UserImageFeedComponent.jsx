import React from 'react'
import { useState,useEffect } from 'react';


function UserImageFeedComponent({para}) {
    const [userImg, setUserImg] = useState([])
    useEffect(() => {
      fetch(`/api/user/feed/${para}`)
        .then((response) => response.json())
        .then((data) => setUserImg(data));
    }, []);
  return (
    <div>
         <img src={userImg.display_pic_url} alt="" />
    </div>
  )
}

export default UserImageFeedComponent