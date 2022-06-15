import React from 'react'
import {useState} from "react"
function Feed() {

    const [feed, setFeed] = useState({})
    useEffect(()=>{
        fetch("http://example.com/movies.json")
          .then((response) => response.json())
          .then((data) => (data));
      },[])

  return (
    <div>
 
    </div>
  )
}

export default Feed