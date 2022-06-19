const SubscriptionOrderBox = ({orderNum, price, productName, subscriptionDate, buyerUsername, productId, qty, status}) => {
    return (
        <>
            <div className="OrderBox">
                <p className="OrderInput">Order number: {orderNum}</p>
                <p className="OrderInput">Date of Purchase: {subscriptionDate}</p>
                <p className="OrderInput">Product ID: {productId}</p>
                <p className="OrderInput">Product: {productName}</p>
                <p className="OrderInput">Quantity per month: {qty}</p>
                <p className="OrderInput">Monthly subscription fee: ${price}</p>
                <p className="OrderInput">Buyer: {buyerUsername}</p>
                <p className="OrderInput">Delivery Status for the month: {status}</p>
            </div>
        </>
    )
}

export default SubscriptionOrderBox