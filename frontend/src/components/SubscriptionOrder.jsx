import { useAtom } from "jotai";
import { userAtom } from "../App";
import SubscriptionOrderBox from "./SubscriptionOrderBox";

const SubscriptionOrder = () => {
    const [user, setUser] = useAtom(userAtom);

    const DisplayOrders = () => {
        const ordersArr = [];
        for (let i = 0; i < user.sales_order_subscription.length; i++) {
            ordersArr.push(
                <SubscriptionOrderBox 
                    orderNum = {user.sales_order_subscription[i].orderId.orderNum}
                    price = {user.sales_order_subscription[i].price}
                    productName = {user.sales_order_subscription[i].productName}
                    subscriptionDate = {user.sales_order_subscription[i].subscriptionDate}
                    buyerUsername = {user.sales_order_subscription[i].buyerUsername}
                    productId = {user.sales_order_subscription[i].productId}
                    qty = {user.sales_order_subscription[i].qty}
                    status = {user.sales_order_subscription[i].status}
                    key= {i}
                />
            )
        }
        return (ordersArr)
    }

    return (
        <>
            <h2>Subscription orders:</h2>
            <DisplayOrders />
        </>
    )
}

export default SubscriptionOrder