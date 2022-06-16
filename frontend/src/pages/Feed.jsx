import React from 'react'
import {useState} from "react"
import ImgAndDesc from '../components/ImgAndDesc';

function Feed() {

    const [feed, setFeed] = useState({})
    // useEffect(()=>{
    //     fetch("http://example.com/movies.json")
    //       .then((response) => response.json())
    //       .then((data) => setFeed(data));
    //   },[])

  return (
    <div>
        <div className="container">
          <div className="leftcolumn">
          <ImgAndDesc/>
          </div>
          <div className="rightcolumn">
            <div>
            <h2>Post 1</h2>
            <p>hihihihi</p>
            </div>

            <div>
            <h2>Post 2</h2>
            <p>byebyebye</p>
            </div>
            
          </div>

        </div>
       

        
        {/* <ImgAndDesc/>
        {feed.map((post)=>{
            return(
                <div>
                <p>{post.sentence}</p>
                <p>{post.like}</p>
                <button>Delete</button>
                </div>
            )
        })} */}
    </div>
  )
}

export default Feed