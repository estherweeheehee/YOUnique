import { useAtom } from "jotai";
import { userAtom } from "../App";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SingleOrder from "../components/SingleOrder";
import SubscriptionOrder from "../components/SubscriptionOrder";

const MySales = () => {
  const [user, setUser] = useAtom(userAtom);
  
  let navigate = useNavigate();

  if (user.username === undefined) {
    navigate("/login");
    return 
  } else {
    const [view, setView] = useState("single");
    const handleView = () => {
      if (view === "single") {
        setView("subscription");
      } else {
        setView("single");
      }
    };

    
    return (
      <>
        <h1> my sales</h1>
        <button onClick={handleView}>View single orders</button>
        <button onClick={handleView}>View subscription orders</button>
        <br />
        <br />
        {view === "single" ? <SingleOrder /> : <SubscriptionOrder />}
      </>
    );
  }
};

export default MySales;
