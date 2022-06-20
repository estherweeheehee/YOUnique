import { useAtom } from "jotai";
import { useNavigate } from "react-router-dom";
import { userAtom } from "../App";

const MyPurchase = () => {
    const [user, setUser] = useAtom(userAtom);
    let navigate = useNavigate();

    if (user.username === undefined) {
        navigate("/login");
      } 

    return (
        <>
            <h1>My Purchases</h1>
        </>
    )
}

export default MyPurchase