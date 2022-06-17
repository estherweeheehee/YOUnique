import React from "react";
import { useState } from "react";
import ImgAndDesc from "../components/ImgAndDesc";

function Feed() {
  const [feed, setFeed] = useState({});

  return (
    <div>
      <div className="container">
        <div className="leftcolumn">
          <ImgAndDesc />
        </div>
        <div className="rightcolumn">
          <div>
            <h2>Post 1</h2>
            <img
              src="https://i.pinimg.com/originals/a7/4c/11/a74c11686bebb2bf37027473e0d595a3.jpg"
              alt=""
            />
            <h3>Username: Jimmy</h3>
            <p>
              After experimenting around with the mixture of ingredients, I have
              created amazing Chocolate Chip Cookes! Now with gorgeous ripples
              and cracker-thin texture, it is loved by the many testers I have
              given to.
            </p>
            <img
              src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fpublic-assets.meredithcorp.io%2F80c8dc38a3c76857ddb6c189d273e579%2F1643573651image.jpg&w=596&h=399&c=sc&poi=face&q=60"
              alt=""
            />
            <p>Category: Baked Goods </p>
          </div>

          <div>
            <h2>Post 2</h2>
            <img
              src="https://media-exp2.licdn.com/dms/image/C5103AQEznnA5w3f52g/profile-displayphoto-shrink_800_800/0/1517506416229?e=1660780800&v=beta&t=P1klipOPIFA9JWPzCCX0n_GW7UH8FfWQmUfNhRYIqmw"
              alt=""
            />{" "}
            <h3>Username: Esther</h3>
            <p>
              Black & White Cookies Black and white cookies are considered a New
              York City delicacy, made famous by the Seinfeld episode "The
              Dinner Party." Whether or not they're actually a metaphor for
              harmony and unity (as Jerry suggests), they're quite delicious.
            </p>
            <img
              src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2020%2F07%2F16%2F4570109.jpg&w=200&c=sc&poi=face&q=60"
              alt=""
            />
            <p>Category: Baked Goods </p>
          </div>
        </div>
      </div>

      {/* <ImgAndDesc/>
        {feed.map((post)=>{
            return(
                <div>
                <p>{post.sentence}</p>
                <p>{post.like}</p>
                <button>Delete</button>
                </div>
            )
        })} */}
    </div>
  );
}

export default Feed;
