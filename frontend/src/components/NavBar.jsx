import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/sell">Sell Item</Link>
      <Link to="/post">Post's</Link>
      <Link to="/signup">Sign up/ Login</Link>
      <div>
        <form>
          <input type="text" placeholder="Find a creator or item" />
        </form>
      </div>
    </nav>
  );
}

export default NavBar;
