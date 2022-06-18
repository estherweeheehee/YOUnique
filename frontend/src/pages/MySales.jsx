import { useAtom } from "jotai";
import { userAtom } from "../App";
import { useNavigate } from "react-router-dom";

const MySales = () => {
  const [user, setUser] = useAtom(userAtom);
  let navigate = useNavigate();

  if (user.username === undefined) {
    navigate("/login");
  } 


  


  return (
    <>
        <h1> my sales</h1>
        {/* {user.sales_order_one_off[0]} */}

    </>
  
  
  );
  
};

export default MySales;
