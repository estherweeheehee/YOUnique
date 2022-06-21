import React from "react";
import { useAtom } from "jotai";
import { userAtom } from "../App";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import ImgAndDesc from "../components/ImgAndDesc";
import CreateProductForm from "../components/CreateProductForm";


function Sell() {
    const [user, setUser] = useAtom(userAtom);    
    const [product, setProduct] = useState([])
    let navigate = useNavigate()
    
    if (user.username === undefined) {
      navigate("/login")
    } else {
    // initial Fetch
    useEffect(() => {
      fetch(`/api/product/user/${user._id}`)
        .then((response) => response.json())
        .then((data) => setProduct(data))
    }, []);
  
    // Create product
    const addProduct = (productdetails) => {
      setProduct([...product, productdetails])
    }

    // Edit product details
    const handleEdit = () => {

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

    // delete product
    const handleDelete = (event) => {
      console.log(event)
      // fetch(`/api/product/${user._id}`, { method: "DELETE" })
      // .then((response) => response.json())
      // .then((data) => {
      //   setUser();
      //   navigate("/login");
      // });
    }
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
      
      <CreateProductForm addProduct={addProduct} />
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
              </Link>
              <button onClick={handleEdit(event)}>Edit</button>
              <button onClick={(event) => handleDelete(event.target.value)}>Delete</button>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
          }
}

export default Sell;
