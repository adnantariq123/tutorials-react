import React from "react";

import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav">
      <p className="something"> Navigation</p>
      <ul>

        <Link to='/about'>
          <li>About</li>
        </Link>

        <Link to='/shop'>
          <li>Shop</li>
        </Link>

        <Link to='/another'>
          <li>another compontent</li>
        </Link>
      </ul>
    </div>
  );
}

export default Nav;
