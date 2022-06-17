import React from "react";
import { useState } from "react";

function ImgAndDesc({ img, description }) {
  

  return (
    <div>
      <p>display image</p>
      <img className="profilepic" src={img} />


      <h5>Description</h5>
      <p>{description}</p>

      {/* <img src={state.img} alt="No profile image" />
      <p>Description {state.description}</p> */}
    </div>
  );
}

export default ImgAndDesc;
