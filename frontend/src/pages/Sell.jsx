import React from "react";
import { useAtom } from "jotai";
import { userAtom } from "../App";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ImgAndDesc from "../components/ImgAndDesc";
import CreateProductForm from "../components/CreateProductForm";


function Sell() {
    const [user, setUser] = useAtom(userAtom);    
    const [product, setProduct] = useState([])
    
    // initial Fetch
    useEffect(() => {
      fetch(`/api/product/user/${user._id}`)
        .then((response) => response.json())
        .then((data) => setProduct(data))
    }, []);
    
    // Update product
    const updateProduct = (productdetails) => {
      setProduct([...product, productdetails])
    }

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
      
      <CreateProductForm updateProduct={updateProduct} />
      <div className="container">
        <div className="leftColumn">
        <ImgAndDesc img={user.display_pic_url} description={user.user_description} />
        </div>
        <div className="rightColumn">
        <div>
          {product.map((product) => (
            <div key={product._id}>
              <Link to={"/sell/" + product._id}>
                <img src={product.product_image} alt={product.product_name} />
              <p>{product.product_name}</p>
              <p>{product.product_category}</p>
              <p>{product.product_description}</p>
              <p>{product.product_price_one_off}</p>
              <p>{product.product_price_subscription}</p>
              <p>{product.product_listed_date}</p>
              <button onClick>Edit</button>
              <button onClick>Delete</button>
              </Link>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
}

export default Sell;
