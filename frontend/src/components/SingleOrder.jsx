import { useAtom } from "jotai";
import { userAtom } from "../App";
import SingleOrderBox from "./SingleOrderBox";

const SingleOrder = () => {
    const [user, setUser] = useAtom(userAtom);

    const DisplayOrders = () => {
        const ordersArr = [];
        for (let i = 0; i < user.sales_order_one_off.length; i++) {
            ordersArr.push(
                <SingleOrderBox 
                    orderNum = {user.sales_order_one_off[i].orderId.orderNum}
                    price = {user.sales_order_one_off[i].price}
                    productName = {user.sales_order_one_off[i].productName}
                    purchaseDate = {user.sales_order_one_off[i].purchaseDate}
                    buyerUsername = {user.sales_order_one_off[i].buyerUsername}
                    productId = {user.sales_order_one_off[i].productId}
                    qty = {user.sales_order_one_off[i].qty}
                    status = {user.sales_order_one_off[i].status}
                    key= {i}
                />
            )
        }
        return (ordersArr)
    }

    return (
        <>
            <h2>One-off Orders:</h2>
            <DisplayOrders />
            {/* {user.sales_order_one_off[0]} */}
        </>
    )
}

export default SingleOrder