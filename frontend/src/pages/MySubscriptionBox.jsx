const MySubscriptionBox = ({ orderType, orderNum, price, productName, subscriptionDate, productId, qty, status}) => {
    
    
    return (
        <>
            <div className="OrderBox">
                <p className="OrderInput">Order type: {orderType}</p>
                <p className="OrderInput">Order number: {orderNum}</p>
                <p className="OrderInput">Product Name: {productName}</p>
                <p className="OrderInput">Product ID: {productId}</p>
                
                <p className="OrderInput">Monthly cost: ${price}</p> 
                <p className="OrderInput">Date of Subscription: {subscriptionDate}</p>
                
                
                <p className="OrderInput">Status: {status}</p>
            </div>
        
        </>
    )
}

export default MySubscriptionBox