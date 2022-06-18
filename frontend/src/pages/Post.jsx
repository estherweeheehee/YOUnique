import PostComponent from "../components/PostComponent";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useReducer } from "react";

const EditForm = ({ post }) => {
  const [name, setName] = useState(post.post);
  const handleClick = () => {

    fetch(`/api/feed/${post._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...post, name }),
    })
      .then((response) => response.json())
      .then((data) => setName(data)
      );
  };
  return (
    <>
      <input onChange={(event) => setName(event.target.value)} value={name} />
      <button onClick={handleClick}>Change</button>
    </>
  );
};

const Post = () => {
  const [post, setPost] = useState([]);
  const [num, setNum] = useState(-1);

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

    setNum(id);
  };

  return (
    <div className="container">
      <div className="leftcolumn"></div>
      <div className="rightcolumn">
        <PostComponent />
        {post.map((post) => {
          return (
            <div key={post._id}>
               {num === post._id ? (
                    <EditForm post={post} />
                  ):("error")}
              <p>{post.post}</p>
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
