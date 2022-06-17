import React from "react";

function Post() {
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("/holidays", {
      method: "POST",
      body: JSON.stringify({ name: event.target.name.value }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((resJson) => {
        props.handleAddPost(resJson);
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
