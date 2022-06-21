import React from "react";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { useAtom } from "jotai";
import { userAtom } from "../App";

function Product() {
    const { id } = useParams();
    const [product, setProduct] = useState([])
    const [quantity, setQuantity] = useState("")
    const [user, setUser] = useAtom(userAtom);

    
    useEffect(() => {
        fetch(`/api/product/${id}`)
          .then((response) => response.json())
          .then((data) => setProduct(data));
      }, []);

    const handlebuyOF = () => {
        const order = {
            orderId: {
                orderType: ordertype,
                orderNum: String(Math.ceil(Math.random() * 9999999))
            },
            price: String(product[0]?.product_price_one_off),
            productName: product[0]?.product_name,
            purchaseDate: Date.now(),
            buyerUsername: user.username,
            buyerId: user._id,
            productId: product[0]?._id,
            qty: String(quantity),
            status: "unfulfiled"
        }
        
        fetch(`/api/user/buy/${product[0]?.userid}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify( order ),
          })
            .then((response) => response.json())
            .then((data) => console.log(data));
    }

    const handlebuyMS = () => {
      const order = {
        orderId: {
            orderType: "MS",
            orderNum: String(Math.ceil(Math.random() * 9999999))
        },
        price: String(product[0]?.product_price_subscription),
        productName: product[0]?.product_name,
        purchaseDate: Date.now(),
        buyerUsername: user.username,
        buyerId: user._id,
        productId: product[0]?._id,
        qty: "1",
        status: "unfulfiled"
      }
        fetch(`/api/user/buy/MS/${product[0]?.userid}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify( order ),
        })
          .then((response) => response.json())
          .then((data) => console.log(data));
    
    }
  return(
    <div>
        <img src={product[0]?.product_image} alt={product[0]?.product_name} />
        <p>{product[0]?.product_name}</p>
        <p>{product[0]?.product_category}</p>
        <p>{product[0]?.product_description}</p>
        
        
        <p>{product[0]?.product_listed_date}</p>

        <p>One-off purchase:</p>
        <p>Price: ${product[0]?.product_price_one_off} each</p>

            <label htmlFor="qty">Quantity to purchase (one-off):</label>
            <input 
            
            required
            type="number"
            placeholder="Quantity to purchase"
            name="qty"
            id="qty"
            min={1}
            value={quantity}
            onChange={() => setQuantity(event.target.value)}
            />
            <button onClick={handlebuyOF}>Purchase</button>
        
        
        <p>Subscription:</p>
        <p>Quantity per month: 1</p>
        <p>Price per month: ${product[0]?.product_price_subscription}</p>
        <button onClick={handlebuyMS}>Subscribe</button>
    </div>
    ) 
}

export default Product;
