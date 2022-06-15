import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Main() {
  const [popular, setPopular] = useState([]);
  const [trend, setTrend] = useState([]);

  
  useEffect(()=>{
      fetch("http://example.com/movies.json")
        .then((response) => response.json())
        .then((data) => setPopular(data));
    },[])

  return(
    <div>
      <h3>Popular</h3>
      {popular.map((element)=>{
        return(
          <p>{element}</p>
        )
      })}


      <h3>New</h3>
      {trend.map((element)=>{
        return(
          <p>{element}</p>
        )
      })}

    </div>
    ) 
}

export default Main;
