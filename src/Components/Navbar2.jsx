import React, { useState, useEffect } from 'react';
import useAuthenticate from "./Hook/useAuthenticate"

export default function Navbar() {
    const [handle, sethandle] = useState()
    const { authenticated, loading, userObj } = useAuthenticate()
    const renderNavItem = (text, link) => (
        <div className="navItem ml-1">
            <a className="navLink" href={link}>
                {text}
            </a>
        </div>
    );

    return (
        <div className="header px-10 bg-skin-bg200 flex justify-between items-center w-full h-24">
            <a className="logo w-40 h-auto" href="/">
                <img className='hover:cursor-pointer' src="./img/dark.svg" alt="Logo" />
            </a>
            <a className="mr-5 text-lg text-skin-text200" href="/">
                {loading ? renderNavItem('...Loading', '/profile') :
                    authenticated ? renderNavItem(userObj.userId, '/profile') :
                        renderNavItem('Login', '/userauth')
                }
            </a>
        </div>
    );
}
