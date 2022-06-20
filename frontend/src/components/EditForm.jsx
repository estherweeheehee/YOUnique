import React from "react";
import { useState } from "react";

function EditForm({ singlePost, post, setEdit, setPost }) {
  const [update, setUpdate] = useState(singlePost.post);

  const resetPosts = () => {
    const pos = post.findIndex((item) => item._id === singlePost._id);

    setPost([
      ...post.slice(0, pos),
      { ...singlePost, post: update },
      ...post.slice(pos + 1),
    ]);
  };
  const handleClick = () => {
    // console.log("update", update);

    fetch(`/api/feed/${singlePost._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...singlePost, post: update }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    resetPosts();
    setEdit(-1);
  };

  return (
    <div>
      <input
        onChange={(event) => setUpdate(event.target.value)}
        value={update}
      />
      <button onClick={handleClick}>Change</button>
    </div>
  );
}

export default EditForm;
