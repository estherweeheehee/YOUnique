import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom'
import { useAtom } from "jotai";
import { userAtom } from "../App";
import moment from 'moment';

function Product() {
    const { id } = useParams();
    const [product, setProduct] = useState([])
    const [quantity, setQuantity] = useState(1)
    const [user, setUser] = useAtom(userAtom);
    let navigate = useNavigate();

    
    useEffect(() => {
        fetch(`/api/product/${id}`)
          .then((response) => response.json())
          .then((data) => setProduct(data));
      }, []);

    const handlebuyOF = () => {
      if (user?.username === undefined) {
        alert("Please login to purchase")
        navigate("/login")
        return
      } else if (product[0]?.userid === user._id) {
        alert("Cannot purchase own product")
        return
      } else if (quantity < 1 || quantity === null) {
        alert("Purchase quantity has to be at least 1. Please select quantity again.")
        return
      }

        const order = {
            orderId: {
                orderType: "OF",
                orderNum: String(Math.ceil(Math.random() * 9999999))
            },
            price: String(product[0]?.product_price_one_off),
            productName: product[0]?.product_name,
            purchaseDate: Date.now(),
            buyerUsername: user.username,
            buyerId: user._id,
            productId: product[0]?._id,
            qty: String(quantity),
            status: "unfulfilled"
        }
        
        fetch(`/api/user/buy/OF/${product[0]?.userid}`, {
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
      if (user?.username === undefined) {
        alert("Please login to purchase")
        navigate("/login")
        return
      } else if (product[0]?.userid === user._id) {
        alert("Cannot suscribe to own product")
        return
      } 
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
        status: "unfulfilled"
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
        
        
        <p>{moment(product[0]?.product_listed_date).format('DD MMMM YYYY, h:mm:ss a')}</p>

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
        
        {product[0]?.product_price_subscription === 0 ? null
        : 
        <>
          <p>Subscription:</p>
          <p>Quantity per month: 1</p>
          <p>Price per month: ${product[0]?.product_price_subscription}</p>
          <button onClick={handlebuyMS}>Subscribe</button>
        </>
        }
        
    </div>
    ) 
}

export default Product;
