import React, { useState, useEffect } from 'react';
import useAuthenticate from "./Hook/useAuthenticate"

export default function Navbar() {
  const [handle, sethandle] = useState()
  const { authenticated, loading, userObj } = useAuthenticate()
  const renderNavItem = (text, link) => (
    <li className="nav-item ml-1">
      <a className="nav-link" href={link}>
        {text}
      </a>
    </li>
  );

  return (
    <div>
      <nav className="navbar navbar-expand bg-body-tertiary">
        <div className="container-fluid ms-auto">
          <a className="navbar-brand mr-4" href="/">
            Compete
          </a>
          <div className="navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {renderNavItem("Home", "/")}
              {renderNavItem("JournalAI", "/JournalAI")}
              {renderNavItem("Resources", "/resource")}
              {loading ? renderNavItem('...Loading', '/profile') :
                authenticated ? renderNavItem(userObj.username, '/profile') :
                  renderNavItem('Login', '/userauth')
              }
              {renderNavItem("About", "/about")}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
