import React from 'react';
function Header() {
  return (
        <div className="navbar">
        <a className="navbar-brand" href="#">Title</a>
        <ul className="nav navbar-nav">
          <li className="active">
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Link</a>
          </li>
        </ul>
      </div>
  );
}

export default Header;
