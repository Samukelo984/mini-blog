import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar grid">
      <nav className="nav">
        <h1> Mini Blog</h1>

        <Link to="/">Home</Link>
        <Link to="/create">New Blog</Link>
      </nav>
    </div>
  );
};

export default Navbar;
