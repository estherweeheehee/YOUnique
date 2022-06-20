import React from "react";
import { useAtom } from "jotai";
import { userAtom } from "../App";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ImgAndDesc from "../components/ImgAndDesc";


function Sell() {
    const [user, setUser] = useAtom(userAtom);    
    const [product, setProduct] = useState([])
    
    // initial Fetch
    useEffect(() => {
      fetch(`/api/product/user/${user._id}`)
        .then((response) => response.json())
        .then((data) => setProduct(data))
    }, []);
    


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
    <div>
      <h1>Esther please insert user profile img as a map</h1>
      <div className="container">
        <div className="leftColumn">
        <ImgAndDesc />
        </div>
        <div className="rightColumn">
        <div>
          {product.map((product) => (
            <div key={product._id}>
              <Link to={"/product/" + product._id}>
                <img src={product.product_image} alt="" />
              </Link>
              <p>{product.product_name}</p>
              <p>{product.product_listed_date}</p>
            </div>
          ))}
        </div>
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
      

    </div>
  );
}

export default Sell;
