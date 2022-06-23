import { useAtom } from "jotai";
import { useState } from "react";
import { userAtom } from "../App";
import SingleOrderBox from "./SingleOrderBox";


const SingleOrder = () => {
  const [user, setUser] = useAtom(userAtom);
  const [orders, setOrders] = useState(user.sales_order_one_off);

  const handleChangeStatus = (id, index, newStatus) => {
    const updatedOrder = {
      ...user.sales_order_one_off[index],
      status: newStatus,
    };
    const newOrders = [
      ...orders.slice(0, index),
      updatedOrder,
      ...orders.slice(index + 1),
    ];

    fetch(`/api/user/OForderstatus/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newOrders),
    })
      .then((response) => response.json())
      .then((data) => {
        setOrders(newOrders);
      });
  };



  const DisplayOrders = () => {
    const ordersArr = [];
    for (let i = 0; i < orders.length; i++) {
      ordersArr.push(
        <SingleOrderBox
          orderID={user._id}
          itemIndex={i}
          orderNum={orders[i].orderId.orderNum}
          price={orders[i].price}
          productName={orders[i].productName}
          purchaseDate={orders[i].purchaseDate}
          buyerUsername={orders[i].buyerUsername}
          buyerId={orders[i].buyerId}
          productId={orders[i].productId}
          qty={orders[i].qty}
          status={orders[i].status}
          handleChangeStatus={handleChangeStatus}
          key={i}
        />
      );
    }
    return ordersArr;
  };

  return (
    <>

<main className="max-w-3xl mx-auto px-4 py-16 sm:px-6 sm:pt-24 sm:pb-32 lg:px-8">
        <div className="max-w-xl">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">One-off Orders</h1>
          <p className="mt-2 text-sm text-gray-500">
            View and manage the status of your one-off sales
           
          </p>
        </div>

        <div className="mt-12 space-y-16 sm:mt-16">
          <DisplayOrders />
          
        </div>
      </main>
    </>
  );
};

export default SingleOrder;
