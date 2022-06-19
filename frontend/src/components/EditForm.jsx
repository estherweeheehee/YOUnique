import React from "react";
import {useState} from "react"

function EditForm({post}) {
  const [update, setUpdate] = useState(post.post);

  const handleClick = () => {
    // console.log(post)
    fetch(`/api/feed/${post._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...post, name: update }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  const replacePost = (para) => {
    const pos = post.findIndex((p) => p._id === para._id);
    setPost([...post.slice(0, pos), para, ...post.slice(pos + 1)]);
  };
  return (
    <div>
    <input onChange={(event) => setUpdate(event.target.value)} value={update} />
    <button onClick={handleClick}>Change</button>
  </div>
);
}

export default EditForm;
