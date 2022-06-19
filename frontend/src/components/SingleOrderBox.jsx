const SingleOrderBox = ({orderNum, price, productName, purchaseDate, buyerUsername, productId, qty, status}) => {
    const cost = parseInt(price) * parseInt(qty)
    return (
        <>
            <div className="OrderBox">
                <p className="OrderInput">Order number: {orderNum}</p>
                <p className="OrderInput">Date of Purchase: {purchaseDate}</p>
                <p className="OrderInput">Product ID: {productId}</p>
                <p className="OrderInput">Product: {productName}</p>
                <p className="OrderInput">Amount paid: ${cost}</p>
                <p className="OrderInput">Buyer: {buyerUsername}</p>
                <p className="OrderInput">Order Status: {status}</p>
            </div>
        </>
    )
}

export default SingleOrderBox