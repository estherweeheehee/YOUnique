import React from "react";
import { useState } from "react";

function EditForm({ singlePost, post, setEdit, setPost }) {
  const [updatePost, setUpdatePost] = useState(singlePost.post);
  const [updateImg, setUpdateImg] = useState (singlePost.Img_url)

  const resetPosts = () => {
    const pos = post.findIndex((item) => item._id === singlePost._id);

    setPost([
      ...post.slice(0, pos),
      { ...singlePost, post: updatePost },
      ...post.slice(pos + 1),
    ]);
  };
  const handleEditPost = () => {

    fetch(`/api/feed/${singlePost._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...singlePost, post: updatePost }),
    })
      .then((response) => response.json())
      .then((data) => (data));
    resetPosts();
    setEdit(-1);
  };
  const handleEditImg = ()=>{
    fetch(`/api/feed/img/${singlePost._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...singlePost, Image_url: updateImg }),
    })
      .then((response) => response.json())
      .then((data) => (data));
    resetPosts();
    setEdit(-1);
  }

  return (
    <div>
      <input
        onChange={(event) => setUpdatePost(event.target.value)}
        value={updatePost}
      />
      <button onClick={handleEditPost}>Change</button>
      <input placeholder="Image"  onChange={(event) => setUpdateImg(event.target.value)}/>
      <button onClick={handleEditImg}>Change</button>

    </div>
  );
}

export default EditForm;
