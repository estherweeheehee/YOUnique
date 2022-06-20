import React from "react";
import { Link } from "react-router-dom";
import { useAtom } from "jotai";
import { userAtom } from "../App";

function NavBar() {
  const [user, setUser] = useAtom(userAtom);
  return (
    
      <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/sell">Sell Item</Link>
      <Link to="/feed">Feed</Link>
      <Link to="/post">Post/Update</Link>
      <Link to="/login">Sign up/ Login</Link>
      
      {user?.["username"] !== undefined ? (
            <>
                <Link to="/mysales">My Sales</Link>
                <Link to="/mypurchase">My Purchase</Link>
            </>
            ) : null}

    
      </div>
      
    
  );
}

export default NavBar;
