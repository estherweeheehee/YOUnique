import React from 'react'
import {useState} from "react"
import ImgAndDesc from '../components/ImgAndDesc';

function Feed() {

    const [feed, setFeed] = useState({})
    useEffect(()=>{
        fetch("http://example.com/movies.json")
          .then((response) => response.json())
          .then((data) => setFeed(data));
      },[])

  return (
    <div>
        <ImgAndDesc/>
        {feed.map((post)=>{
            return(
                <div>
                <p>{post.sentence}</p>
                <p>{post.like}</p>
                <button>Delete</button>
                </div>
            )
        })}
    </div>
  )
}

export default Feed