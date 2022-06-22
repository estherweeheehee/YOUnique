import { useState } from "react"

const SingleOrderBox = ({orderNum, price, productName, purchaseDate, buyerUsername, productId, qty, status, itemIndex, orderID, handleChangeStatus}) => {
    const cost = parseInt(price) * parseInt(qty)
    const [toggleStatus, setToggleStatus] = useState(status);

    const handleClick = (newStatus) => {
            handleChangeStatus(orderID, itemIndex, newStatus)
            setToggleStatus(newStatus)
    }



    return (
        <>
            <div className="OrderBox">
                <p className="OrderInput">Order number: {orderNum}</p>
                <p className="OrderInput">Date of Purchase: {purchaseDate}</p>
                <p className="OrderInput">Product ID: {productId}</p>
                <p className="OrderInput">Product: {productName}</p>
                <p className="OrderInput">Amount paid: ${cost.toLocaleString()}</p>
                <p className="OrderInput">Buyer: {buyerUsername}</p>
                <p className="OrderInput">Order Status: {status}</p>
                {toggleStatus === "unfulfilled" ? 
                    <button onClick={() => handleClick("delivered")}>Change to delivered </button> 
                    :
                    <button onClick={() => handleClick("unfulfilled")}>Change to unfulfilled</button>
                }
            </div>
        </>
    )
}

export default SingleOrderBox