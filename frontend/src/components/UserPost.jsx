import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UserPost() {
  let {id} = useParams();
  const [userPost, setUserPost] = useState([]);
  useEffect(() => {
    fetch(`/api/feed/user/${id}`)
      .then((response) => response.json())
      .then((data) => setUserPost(data));
  }, []);

  const handleLike = () => {};

  return (
    <div>
      {userPost.map((display) => {
        return (
          <div key={display._id}>
            <p>{display.post}</p>
            <button onClick={handleLike}>Like</button>
            <p>{display.date}</p>
          </div>
        );
      })}
    </div>
  );
}

export default UserPost;
