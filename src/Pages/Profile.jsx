import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import useAuthentication from '../Components/Hook/useAuthenticate'
import Blog from '../Components/Blog/Blog'

const read_user = async (userId) => {
    const res = await fetch(`http://localhost:3005/read-user?userId=${userId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    const data = res.json()
    return data
}

export default function Profile() {
    const [userData, setUserData] = useState({})
    const [hookSignal, setHookSignal] = useState(false)
    const { authenticated, loading, userObj } = useAuthentication({ navigateTo: "/userauth", dependencies: [hookSignal] })
    useEffect(() => {
        const fetchData = async () => {
            if (userObj?.userId) {
                try {
                    const data = await read_user(userObj.userId);
                    setUserData({ ...data.user });
                } catch (error) {
                    console.error('Error fetching user data:', error);
                }
            }
        };

        fetchData();
    }, [loading]);
    const profileBasic = () => (
        <>
            <h1>Profile</h1>
            <div>
                <p>UserId: {loading ? '...Loading' : userObj?.userId || 'Not Found'}</p>
            </div>
            <div>
                <p>Name: {loading ? '...Loading' : userData?.profile?.name || 'Not Found'}</p>
            </div>
        </>
    );
    const logoutHandler = () => {
        console.log("Logging Out!")
        localStorage.removeItem('token');
        setHookSignal((prev) => !prev)
        console.log("Logging Out!")
    }
    return (
        <>
            <Navbar />
            <br />
            {profileBasic(userObj)}
            <br />
            <button onClick={logoutHandler}>Log out</button>
            <br />
            <Blog userId={userObj?.userId} isprivate={true} />
            <br />
            <Footer />
        </>
    )
}
