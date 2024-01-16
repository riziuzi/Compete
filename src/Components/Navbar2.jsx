import React, { useState, useEffect } from 'react';
import useAuthenticate from "./Hook/useAuthenticate"

export default function Navbar2() {
    const [handle, sethandle] = useState()
    const { authenticated, loading, userObj } = useAuthenticate()
    const renderNavItem = (text, link) => (
        <div className="navItem ml-1 flex-1">
            <a className="navLink mr-5 text-base text-skin-text200" href={link}>
                {text}
            </a>
        </div>
    );

    return (
        <div className="header sticky top-0 px-5 bg-skin-bg200 flex justify-between items-center w-full h-14">
            <a className="logo w-36" href="/welcome">
                <img className='hover:cursor-pointer' src="./img/dark.svg" alt="Logo" />
            </a>
            <div className="items w-1/3 flex">
            {renderNavItem("Home", "/notFound")}
            {renderNavItem("JournalAI", "/JournalAI")}
            {renderNavItem("Resources", "/resource")}
            {loading ? renderNavItem('...Loading', '/profile') :
                authenticated ? renderNavItem(userObj.userId, '/profile') :
                    renderNavItem('Login', '/signin')
            }
            {renderNavItem("About", "/about")}
            </div>

        </div>
    );
}
