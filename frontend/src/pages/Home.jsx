import React from "react";
import { useState } from "react";

function Main() {
  const [test, setTest] = useState([]);
  const [test2, setTest2] = useState([]);


  fetch("http://example.com/movies.json")
    .then((response) => response.json())
    .then((data) => setTest(data));

  return(
    <div>
      <h3>Popular</h3>
      {test.map((element)=>{
        return(
          <p>{element}</p>
        )
      })}


      <h3>New</h3>
      {test2.map((element)=>{
        return(
          <p>{element}</p>
        )
      })}

    </div>
    ) 
}

export default Main;
