import React from "react";
import { useState } from "react";

function ImgAndDesc({ img, description }) {
  

  return (
    <div>
      
      <img className="profilepic" src={img} />


      <h5>User Description:</h5>
      <p>{description}</p>

      
    </div>
  );
}

export default ImgAndDesc;
