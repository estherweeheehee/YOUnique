import { useState, useEffect } from "react";

const MySubscriptionBox = ({ orderType, orderNum, price, productName, subscriptionDate, productId, qty, status}) => {
    const [product, setProduct] = useState([])
    
    useEffect(() => {
        fetch(`/api/product/${productId}`)
          .then((response) => response.json())
          .then((data) => setProduct(data));
      }, []);

    return (
        <>
            <div className="OrderBox">
                <p className="OrderInput">Order type: {orderType}</p>
                <p className="OrderInput">Order number: {orderNum}</p>
                <p className="OrderInput">Product Name: {productName}</p>
                <p className="OrderInput">Product ID: {productId}</p>
                
                <p className="OrderInput">Monthly cost: ${price}</p> 
                <p className="OrderInput">Date of Subscription: {subscriptionDate}</p>
                
                <img src={product[0]?.product_image} alt={product[0]?.product_name}/>

                <p className="OrderInput">Status: {status}</p>
            </div>
        
        </>
    )
}

export default MySubscriptionBox