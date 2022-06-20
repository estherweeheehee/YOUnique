import React from "react";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'

function Product() {
    const { id } = useParams();
    const [product, setProduct] = useState([])

    useEffect(() => {
        fetch(`/api/product/${id}`)
          .then((response) => response.json())
          .then((data) => setProduct(data));
      }, []);

  return(
    <div>
        <img src={product[0]?.product_image} alt={product[0]?.product_name} />
        <p>{product[0]?.product_name}</p>
        <p>{product[0]?.product_category}</p>
        <p>{product[0]?.product_description}</p>
        <p>{product[0]?.product_price_one_off}</p>
        <p>{product[0]?.product_price_subscription}</p>
        <p>{product[0]?.product_listed_date}</p>
        <button>Add to Cart</button>
    </div>
    ) 
}

export default Product;
