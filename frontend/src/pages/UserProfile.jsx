import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ImgAndDesc from "../components/ImgAndDesc";
import UserPost from "../components/UserPost";
import UserProduct from "../components/UserProduct";

function UserProfile() {
  const { id } = useParams();
  const [userData, setUserData] = useState({});
  const [view, setView] = useState("posts");

  useEffect(() => {
    fetch(`/api/user/view/${id}`)
      .then((response) => response.json())
      .then((data) => setUserData(data));
  }, []);

  const handleViewPosts = () => {
    setView("posts");
  };

  const handleViewProducts = () => {
    setView("products");
  };

  return (
    <div>
      <div className="container">
        <div className="leftcolumn">
          <ImgAndDesc
            img={userData["display_pic_url"]}
            description={userData["user_description"]}
          />
        </div>
        <div className="rightcolumn">
          <button onClick={handleViewPosts}>Posts</button>
          <button onClick={handleViewProducts}>Products</button>
          {view === "posts" ? <UserPost /> : <UserProduct />}
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
