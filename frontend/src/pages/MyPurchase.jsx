import { useAtom } from "jotai";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userAtom } from "../App";
import { useEffect } from "react";
import MyPurchaseBox from "../components/MyPurchaseBox";

const MyPurchase = () => {
  const [user, setUser] = useAtom(userAtom);
  const [purchaseData, setPurchaseData] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    if (user.username === undefined) {
      navigate("/login");
    } else {
      const userId = user._id;
      fetch(`/api/user/mypurchase/${userId}`)
        .then((response) => response.json())
        .then((data) => setPurchaseData(data));
    }
  }, []);

  const MakeMyPurchase = () => {
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

  return (
    <>
      <h1>My Purchases</h1>
      <MakeMyPurchase />
    </>
  );
};

export default MyPurchase;
