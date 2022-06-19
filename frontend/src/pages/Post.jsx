import PostComponent from "../components/PostComponent";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useReducer } from "react";
import EditForm from "../components/EditForm";

const Post = () => {
  const [post, setPost] = useState([]);
  const [edit, setEdit] = useState(-1);

  let params = useParams();



  //? Fetch
  useEffect(() => {
    fetch(`/api/feed/${params.id}`)
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, []);

  //? Delete
  const handleDelete = (id) => {
    fetch(`/api/feed/${id}`, { method: "DELETE" })
      .then((response) => response.json())
      .then((data) => setPost(post.filter((para) => para._id !== id)));
  };
  //? Edit
  const handleEdit = (id) => {
    setEdit(id);
  };

  return (
    <div className="container">
      <div className="leftcolumn"></div>
      <div className="rightcolumn">
        <PostComponent />
        {post.map((post) => {
          return (
            <div key={post._id}>
              {edit === post._id ? <EditForm post={post}/> : <p>{post.post}</p>}
              <img src={post.Image_url} alt="" />
              <p>{post.date}</p>
              <button onClick={() => handleDelete(post._id)}>Delete</button>
              <button onClick={() => handleEdit(post._id)}>Edit</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Post;
