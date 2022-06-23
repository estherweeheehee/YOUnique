import moment from "moment"
import { useState, useEffect } from "react";

const MyPurchaseBox = ({ orderType, orderNum, price, productName, purchaseDate, productId, qty, status}) => {
    const [productPic, setProductPic] = useState([])

    useEffect(() => {
        fetch(`/api/product/${productId}`)
          .then((response) => response.json())
          .then((data) => setProductPic(data));
      }, []);

    const cost = parseInt(price) * parseInt(qty)

    return (
        <>
            <div className="OrderBox">
                <p className="OrderInput">Order type: {orderType}</p>
                <p className="OrderInput">Order number: {orderNum}</p>
                <p className="OrderInput">Product Name: {productName}</p>
                <p className="OrderInput">Product ID: {productId}</p>
                <p className="OrderInput">Quantity purchased: {qty}</p> 
                <p className="OrderInput">Amount paid: ${cost}</p> 
                <p className="OrderInput">Date of Purchase: {moment(purchaseDate).format('DD MMMM YYYY, h:mm:ss a')}</p>
                
                <img src={productPic[0]?.product_image} alt=""/>
                
                <p className="OrderInput">Status: {status}</p>
            </div>
        
        </>
    )
}

export default MyPurchaseBox