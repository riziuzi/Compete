import React from 'react';

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid ms-auto">
          <a className="navbar-brand mr-4" href="">
            Compete
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item ml-1">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item ml-1">
                <a className="nav-link" href="/journalai">
                  JournalAI
                </a>
              </li>
              <li className="nav-item ml-1">
                <a className="nav-link" href="/resources">
                  Resources
                </a>
              </li>
              <li className="nav-item ml-1">
                <a className="nav-link" href="/about">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
