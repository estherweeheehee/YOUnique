import PostComponent from "../components/PostComponent";
import { useState } from "react";

const Post = () => {
  const [state, useState] = useState({})
  return (
    <div className="container">
      <div className="leftcolumn"></div>
      <div className="rightcolumn">
        <PostComponent />
      </div>
    </div>
  );
};

export default Post;
