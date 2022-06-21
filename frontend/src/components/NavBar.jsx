import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { userAtom } from "../App";


function NavBar() {
  const [user, setUser] = useAtom(userAtom);
  let navigate = useNavigate()

  const handleLogOut = () => {
    
    fetch(`/api/user/logout`)
        .then((response) => response.json())
        .then((data) => setUser());
    navigate("/login")
    
  }

  return (
    <div className="nav">

      <Link to="/">Home</Link>
      <Link to="/sell">Sell Item</Link>
      <Link to="/feed">Feed</Link>
      <Link to="/post">Post/Update</Link>

      {user?.["username"] !== undefined ? (
        <>
          <Link to="/mysales">My Sales</Link>
          <Link to="/mypurchase">My Purchase</Link>
          <Link to="/settings">Settings</Link>
        </>
      ) : null}

      {user?.["username"] !== undefined ? (
        <button onClick={handleLogOut}>Log Out</button>
        
      ) : (
        <Link to="/login">Sign up/ Login</Link>
      )}
    </div>
  );
}

export default NavBar;
