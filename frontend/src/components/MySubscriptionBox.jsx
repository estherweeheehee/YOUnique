import { useState, useEffect } from "react";

const MySubscriptionBox = ({ orderType, orderNum, price, productName, subscriptionDate, productId, qty, status}) => {
    const [productPic, setProductPic] = useState([])
    
    useEffect(() => {
        fetch(`/api/product/${productId}`)
          .then((response) => response.json())
          .then((data) => setProductPic(data));
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
                
                <img src={productPic[0]?.product_image} alt=""/>

                <p className="OrderInput">Status: {status}</p>
            </div>
        
        </>
    )
}

export default MySubscriptionBox