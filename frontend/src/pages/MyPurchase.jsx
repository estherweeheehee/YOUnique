import { useAtom } from "jotai";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userAtom } from "../App";
import { useEffect } from "react";
import MyPurchaseBox from "../components/MyPurchaseBox";
import MySubscriptionBox from "../components/MySubscriptionBox";

const MyPurchase = () => {
  const [user, setUser] = useAtom(userAtom);
  const [purchaseData, setPurchaseData] = useState([]);
  const [view, setView] = useState("OF");
  let navigate = useNavigate();

  const fetchOF = () => {
    const userId = user._id;
    fetch(`/api/user/mypurchase/OF/${userId}`)
      .then((response) => response.json())
      .then((data) => setPurchaseData(data));
  };

  const fetchMS = () => {
    const userId = user._id;
    fetch(`/api/user/mypurchase/MS/${userId}`)
      .then((response) => response.json())
      .then((data) => setPurchaseData(data));
  };

  useEffect(() => {
    if (user?.username === undefined) {
      navigate("/login");
    } else {
      if (view === "MS") {
        fetchMS();
      } else {
        fetchOF();
      }
    }
  }, [view]);

  const MakeMyPurchases = () => {
    return purchaseData.map((item, index) => (
      <MyPurchaseBox
        orderType={item.orderId.orderType}
        orderNum={item.orderId.orderNum}
        price={item.price}
        productName={item.productName}
        purchaseDate={item.purchaseDate}
        productId={item.productId}
        qty={item.qty}
        status={item.status}
        key={index}
      />
    ));
  };

  const MakeMySubscriptions = () => {
    return purchaseData.map((item, index) => (
      <MySubscriptionBox
        orderType={item.orderId.orderType}
        orderNum={item.orderId.orderNum}
        price={item.price}
        productName={item.productName}
        subscriptionDate={item.subscriptionDate}
        productId={item.productId}
        qty={item.qty}
        status={item.status}
        key={index}
      />
    ));
  };


  return (
    <>
      <h1>My Purchases</h1>
      <button onClick={() => setView("OF")}>View One-off Purchases</button>
      <button onClick={() => setView("MS")}>View Subscriptions</button>
      {view === "OF" ? <MakeMyPurchases /> : <MakeMySubscriptions />}
    </>
  );
};

export default MyPurchase;
