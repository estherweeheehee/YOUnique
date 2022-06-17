import React, { useEffect } from "react";
import { useState } from "react";
import ImgAndDesc from "../components/ImgAndDesc";
import { Link } from "react-router-dom";

function Feed() {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    fetch(`/api/feed`)
      .then((response) => response.json())
      .then((data) => setFeed(data));
  }, []);

  return (
    <div>
      <h1>Esther please insert user profile img as a map</h1>
      <div className="container">
        <div className="leftcolumn"></div>
        <div className="rightcolumn"></div>
        <div>
          {feed.map((feed) => (
            <div key={feed._id}>
              <Link to={"/profile/" + feed._id}>
                <img src={feed.Image_url} alt="" />
              </Link>
              <p>{feed.post}</p>
              <small>{feed.date}</small>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Feed;
