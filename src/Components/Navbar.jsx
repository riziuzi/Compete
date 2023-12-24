import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [handle, sethandle] = useState()

  useEffect(() => {
    const token = localStorage.getItem('token');
    fetch("http://localhost:3001/protected", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      },
      credentials: 'include', // Include credentials (cookies)
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
      })
      .then(data => {
        sethandle(data.user.username)
      })
      .catch(err => {
        alert("Please authorize yourself from login page")
        console.error(`Error occurred in fetching: ${err}`);
      });

  }, [])
  return (
    <div>
      <nav className="navbar navbar-expand bg-body-tertiary">
        <div className="container-fluid ms-auto">
          <a className="navbar-brand mr-4" href="/">
            Compete
          </a>
          <div className="navbar-collapse" id="navbarSupportedContent">
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
                <a className="nav-link" href="/resource">
                  Resources
                </a>
              </li>
              {(!handle) && (<li className="nav-item ml-1">
                <a className="nav-link" href="/userauth">
                  Login
                </a>
              </li>)}
              {(handle) && (<li className="nav-item ml-1">
                <a className="nav-link" href="/profile">
                  {handle} profile
                </a>
              </li>)}
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
