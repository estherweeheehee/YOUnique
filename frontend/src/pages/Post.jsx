import PostComponent from "../components/PostComponent";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useReducer } from "react";
import EditForm from "../components/EditForm";
import { useAtom } from "jotai";
import { userAtom } from "../App";

const Post = () => {
  const [user, setUser] = useAtom(userAtom);    
  const [post, setPost] = useState([]);
  const [edit, setEdit] = useState(-1);



  //? Fetch
  useEffect(() => {
    fetch(`/api/feed/${user._id}`)
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
  // console.log(user)
  return (
    <div className="container">
      <div className="leftcolumn"></div>
      <div className="rightcolumn">
        <p>{user._id}</p>
        <PostComponent setPost={setPost} post={post}/>
        {post?.map((singlePost, index) => {
          return (
            <div key={index}>
              {edit === singlePost._id ? <EditForm singlePost={singlePost} post={post} setPost={setPost} setEdit={setEdit}/> : <p>{singlePost.post}</p>}
              <img src={singlePost.Image_url} alt="" />
              <p>{singlePost.date}</p>
              <button onClick={() => handleDelete(singlePost._id)}>Delete</button>
              <button onClick={() => handleEdit(singlePost._id)}>Edit</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Post;
