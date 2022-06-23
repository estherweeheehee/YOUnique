import { useState } from "react";
import moment from "moment"

const SubscriptionOrderBox = ({orderNum, price, productName, subscriptionDate, buyerUsername, productId, qty, status, itemIndex, orderID, handleChangeStatus}) => {
    const [toggleStatus, setToggleStatus] = useState(status);

    const handleClick = (newStatus) => {
            handleChangeStatus(orderID, itemIndex, newStatus)
            setToggleStatus(newStatus)
    }

    
    return (
        <>
            <div className="OrderBox">
                <p className="OrderInput">Order number: {orderNum}</p>
                <p className="OrderInput">Date of Purchase: {moment(subscriptionDate).format('DD MMMM YYYY, h:mm:ss a')}</p>
                <p className="OrderInput">Product ID: {productId}</p>
                <p className="OrderInput">Product: {productName}</p>
                <p className="OrderInput">Quantity per month: {qty}</p>
                <p className="OrderInput">Monthly subscription fee: ${price.toLocaleString()}</p>
                <p className="OrderInput">Buyer: {buyerUsername}</p>
                <p className="OrderInput">Delivery Status for the month: {status}</p>
                {toggleStatus === "unfulfilled" ? 
                    <button onClick={() => handleClick("delivered")}>Change to delivered </button> 
                    :
                    <button onClick={() => handleClick("unfulfilled")}>Change to unfulfilled</button>
                }
            </div>
        </>
    )
}

export default SubscriptionOrderBox