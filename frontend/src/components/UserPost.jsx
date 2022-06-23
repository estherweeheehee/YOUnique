import { useEffect, useState } from "react";
import moment from "moment"
import { useParams } from "react-router-dom";

function UserPost() {
  let {id} = useParams();
  const [userPost, setUserPost] = useState([]);
  useEffect(() => {
    fetch(`/api/feed/user/${id}`)
      .then((response) => response.json())
      .then((data) => setUserPost(data));
  }, []);



  return (
    <div>
      {userPost.map((display) => {
        return (
          <div key={display._id}>
            <p>{display.post}</p>
            <img src={display.Image_url} />
            <br></br>
           
            <p>{moment(display.date).format('DD MMMM YYYY h:mm:ss a')}</p>
          </div>
        );
      })}
    </div>
  );
}

export default UserPost;
