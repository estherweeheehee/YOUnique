import React from "react";
import { useAtom } from "jotai";
import { userAtom } from "../App";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import ImgAndDesc from "../components/ImgAndDesc";
import EditProductForm from "../components/EditProductForm";
import CreateProductForm from "../components/CreateProductForm";


function Sell() {
    const [user, setUser] = useAtom(userAtom);    
    const [product, setProduct] = useState([])
    const [num, setNum] = useState(-1);
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
    const handleEdit = (id) => {
      setNum(id)
    }

    const submitEdit = (editedproduct) => {
      const pos = product.findIndex((p) => p._id === editedproduct._id);
      setProduct([
        ...product.slice(0, pos),
        editedproduct,
        ...product.slice(pos + 1),
      ]);
      setNum(-1)
    }

    // delete product
    const handleDelete = (prod_id) => {
      fetch(`/api/product/${prod_id}`, { method: "DELETE" })
      .then((response) => response.json())
      .then((data) => {setProduct(product.filter((p) => p._id !== prod_id))});
    }

  return (
    <div>
      <CreateProductForm addProduct={addProduct} />
      <div className="container">
        <div className="leftColumn">
        <ImgAndDesc img={user.display_pic_url} description={user.user_description} />
        </div>
        <div className="rightColumn">
        <div>
          {(product.map((product) => ( num === product._id ? <EditProductForm key={product._id} product={product} submitEdit={submitEdit}/>
          : 
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
              <button onClick={() => handleEdit(product._id)}>Edit</button>
              <button onClick={() => handleDelete(product._id)}>Delete</button>
            </div>)
          ))}
        </div>
        </div>
      </div>
    </div>
  );
          }
}

export default Sell;
