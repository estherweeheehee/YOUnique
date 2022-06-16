import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    
      <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/sell">Sell Item</Link>
      <Link to="/feed">Feed</Link>
      <Link to="/post">Post/Update</Link>
      <Link to="/login">Sign up/ Login</Link>
      </div>
      
    
  );
}

export default NavBar;
