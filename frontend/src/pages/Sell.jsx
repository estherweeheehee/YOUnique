import React from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import ImgAndDesc from "../components/ImgAndDesc";


function Sell() {

    // const [state,setState] = useState({})

    // useEffect(() => {
    //     fetch("http://example.com/movies.json")
    //       .then((response) => response.json())
    //       .then((data) => setState(data));
    //   }, []);

    //   const handleEdit = (event)=>{
    //     const id = {
    //       id: event.target.element // .something
    //     }
    //     fetch("/api/login/", {
    //       method: "UPDATE",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(id)//'{"name":"admin", "password":"abc"}',
    //     })
    //       .then((response) => response.json())
    //       .then((data) => setUser(data.data));
    //   }

    //   const handleDelete=(event)=>{
    //     const id = {
    //       id: event.taget.element // .something
    //     }
    //     fetch("/api/delete/", {
    //       method: "DELETEONE",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(id)//'{"name":"admin", "password":"abc"}',
    //     })
    //       .then((response) => response.json())
    //       .then((data) => setUser(data.data));
    //   }

  return (
    <>
      <div className="container">
        <div className="leftColumn">
        <ImgAndDesc />
        </div>
        <div className="rightColumn">
          
          <h1>
            Multiple items
          </h1>
        </div>

      </div>
      {/* <ImgAndDesc />
      {state.map((items)=>{
        return(
          <div>
          <Link to={"/product/" + items.id}>
              <img src={items.image} alt="No Image" />
          </Link>
              <button onClick={handleEdit}>Edit</button>
              <button onClick={handleDelete}>Delte</button>
          </div>
          
        )
      })} */}
      

    </>
  );
}

export default Sell;