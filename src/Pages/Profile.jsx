import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import useAuthentication from '../Components/Hook/useAuthenticate'
import { useNavigate } from 'react-router-dom'

export default function Profile() {
    const [hookSignal, setHookSignal] = useState(false)
    const { authenticated, loading, userObj } = useAuthentication({ navigateTo: "/userauth" , dependencies : [hookSignal]})
    const profileBasic = () => (
        <>
            <h1>Profile</h1>
            <div>
                <p>username: {loading ? '...Loading' : userObj?.username || 'Not Found'}</p>
            </div>
            <div>
                <p>id: {loading ? '...Loading' : userObj?.id || 'Not Found'}</p>
            </div>
        </>
    );
    const logoutHandler = () => {
        console.log("Logging Out!")
        localStorage.removeItem('token');
        setHookSignal((prev)=>!prev)
        console.log("Logging Out!")
    }
    return (
        <>
            <Navbar />
            {profileBasic(userObj)}
            <button onClick={logoutHandler}>Log out</button>
            <Footer />
        </>
    )
}
