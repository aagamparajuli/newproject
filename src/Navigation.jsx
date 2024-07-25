import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <ul className="flex justify-center space-x-8 pt-6 font-bold text-red-50">
        <li>
          <Link to="/">Landing</Link>
        </li>
        <li>
          <Link to="/signIn">Sign In</Link>
        </li>
        <li>
          <Link to="/signUp">Sign Up</Link>
        </li>
        <li>
          <Link to="/demo">Demo</Link>
        </li>
      </ul>
    </>
  );
}

export default Nav;
