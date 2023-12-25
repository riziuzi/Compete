import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import useAuthentication from '../Components/Hook/useAuthenticate'

export default function Profile() {
    const [profile, setprofile] = useState({
        username: "",
        id: ""
    })
    const authButton = evt => {

    }
    const { authenticated, loading, userObj } = useAuthentication()
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
    // useEffect(() => {
    //     const token = localStorage.getItem('token');
    //     fetch("http://localhost:3001/protected", {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             Authorization: token
    //         },
    //         credentials: 'include', // Include credentials (cookies)
    //     })
    //         .then(res => {
    //             if (res.ok) {
    //                 return res.json();
    //             } else {
    //                 throw new Error(`HTTP error! Status: ${res.status}`);
    //             }
    //         })
    //         .then(data => {
    //             setprofile({
    //                 ...profile,
    //                 username: data.user.username,
    //                 id: data.user.id
    //             })
    //         })
    //         .catch(err => {
    //             alert("Please authorize yourself from login page")
    //             console.error(`Error occurred in fetching: ${err}`);
    //         });

    // }, [])

    return (
        <>
            <Navbar />
            {profileBasic(userObj)}
            <Footer />
        </>
    )
}
