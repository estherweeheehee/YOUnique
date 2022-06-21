import React from "react";
import { useAtom } from "jotai";
import { userAtom } from "../App";
import {useState} from 'react'

function Post({setPost, post}) {
  const [user, setUser] = useAtom(userAtom);    
  const [newPost, setNewPost] = useState({
    post: "",
    Image_url: "",
    userid: user._id
  })

  const handleChange = (event, catagory) => {
    setNewPost({
      ...newPost,
      [catagory]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    
    event.preventDefault();
    fetch("/api/feed", {
      method: "POST",
      body: JSON.stringify(
        newPost
      //   {
      //   post: event.target.post.value,
      //   Image_url: event.target.image.value,
      //   userid: user._id
      // }
      ),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPost([data, ...post])
        setNewPost({
          ...newPost,
          post: "",
         Image_url: ""
        })
      })
      .catch((error) => console.error({ Error: error }));


      
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Submit a post</legend>
          <label htmlFor="post">Post</label>
          <input required name="post" id="post" value={newPost.post} onChange={() => handleChange(event, "post")}/>
          <label htmlFor="image">Image</label>
          <input name="image" id="image" value={newPost.Image_url} onChange={() => handleChange(event, "Image_url")}/>
          <button>Upload post</button>
        </fieldset>
      </form>
    </div>
  );
}

export default Post;
