import React from "react";
import { useAtom } from "jotai";
import { userAtom } from "../App";

function Post() {
  const [user, setUser] = useAtom(userAtom);    

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("/api/feed", {
      method: "POST",
      body: JSON.stringify({
        post: event.target.post.value,
        Image_url: event.target.image.value,
        userid: user._id
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.error({ Error: error }));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Submit a post</legend>
          <label htmlFor="post">Post</label>
          <input required name="post" id="post" />
          <label htmlFor="image">Image</label>
          <input name="image" id="image" />
          <button>Upload post</button>
        </fieldset>
      </form>
    </div>
  );
}

export default Post;
