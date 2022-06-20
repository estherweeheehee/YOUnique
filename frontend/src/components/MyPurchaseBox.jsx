const MyPurchaseBox = ({ orderType, orderNum, price, productName, purchaseDate, productId, qty, status}) => {
    
    const cost = parseInt(price) * parseInt(qty)
    return (
        <>
            <div className="OrderBox">
                <p className="OrderInput">Order type: {orderType}</p>
                <p className="OrderInput">Order number: {orderNum}</p>
                <p className="OrderInput">Product Name: {productName}</p>
                <p className="OrderInput">Product ID: {productId}</p>
                <p className="OrderInput">Amount paid: {cost}</p>
                <p className="OrderInput">Date of Purchase: {purchaseDate}</p>
                <p className="OrderInput">Status: {status}</p>
            </div>
        
        </>
    )
}

export default MyPurchaseBox