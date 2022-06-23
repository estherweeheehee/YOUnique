import PostComponent from "../components/PostComponent";
import { useState, useEffect } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { useReducer } from "react";
import EditForm from "../components/EditForm";
import { useAtom } from "jotai";
import { userAtom } from "../App";
import ImgAndDesc from "../components/ImgAndDesc";
import moment from "moment"

const Post = () => {
  const [user, setUser] = useAtom(userAtom);    
  const [post, setPost] = useState([]);
  const [edit, setEdit] = useState(-1);
  let navigate = useNavigate()

  if (user?.username === undefined) {
    navigate("/login")
  } else {

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
 
  return (
    <div className="container">
      <div className="leftcolumn">
      <ImgAndDesc img={user.display_pic_url} description={user.user_description} />

      </div>
      <div className="rightcolumn">
        <PostComponent setPost={setPost} post={post}/>
        {post?.map((singlePost, index) => {
          return (
            <div key={index}>
              {edit === singlePost._id ? <EditForm singlePost={singlePost} post={post} setPost={setPost} setEdit={setEdit}/> : <p>{singlePost.post}</p>}
              <img src={singlePost.Image_url} alt="" />
              <p>{moment(singlePost.date).format('DD MMMM YYYY, h:mm:ss a')}</p>
              <button onClick={() => handleDelete(singlePost._id)}>Delete</button>
              <button onClick={() => handleEdit(singlePost._id)}>Edit</button>
            </div>
          );
        })}
      </div>
    </div>
  );
      }
};

export default Post;
