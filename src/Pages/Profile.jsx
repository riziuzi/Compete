import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import useAuthentication from '../Components/Hook/useAuthenticate'
import UserPosts from '../Components/UserPosts/UserPosts'

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
    const [option, setOption] = useState("Public Posts")
    const [userData, setUserData] = useState({})
    const [hookSignal, setHookSignal] = useState(false)
    const { authenticated, loading, userObj } = useAuthentication({ failNavigateTo: "/userauth", dependencies: [hookSignal] })
    useEffect(() => {
        const fetchData = async () => {
            if (userObj?.userId) {
                try {
                    const data = await read_user(userObj.userId);
                    console.log(data.user.createdDate)
                    setUserData({ ...data.user });
                } catch (error) {
                    console.error('Error fetching user data:', error);
                }
            }
        };

        fetchData();
    }, [loading]);

    const logoutHandler = () => {
        console.log("Logging Out!")
        localStorage.removeItem('token');
        setHookSignal((prev) => !prev)
        console.log("Logging Out!")
    }

    const highlightText = (text, option) => {
        if (text === option) {
            return <div className="Overall my-1 bg-skin-accent100 w-32 rounded-lg text-skin-text200">{text}</div>
        }
        else {
            return <div className="Overall my-1 text-skin-text200">{text}</div>
        }

    }
    return (
        <>
            <div className="mainContainer flex justify-between">
                <div className="col1 bg-skin-bg200 flex flex-col w-1/6 justify-between top-0 h-[calc(100vh)] sticky overflow-y-scroll no-scrollbar overscroll-auto">
                    <div className="upper">
                        <div className="logo flex mx-5 my-5">
                            <a href="/">
                                <img src="./img/dark.svg" alt="" className="Logo w-40" />
                            </a>
                        </div>
                        <div className="navigation mt-20 ml-10 flex flex-col items-start">
                            <button onClick={()=>{setOption("Overall")}}>
                                {highlightText("Overall", option)}
                            </button>
                            <button onClick={()=>{setOption("Public Posts")}}>
                                {highlightText("Public Posts", option)}
                            </button>
                            <button onClick={()=>{setOption("Private Posts")}}>
                                {highlightText("Private Posts", option)}
                            </button>
                            <button onClick={()=>{setOption("Directories")}}>
                                {highlightText("Directories", option)}
                            </button>
                            <button onClick={()=>{setOption("Comments")}}>
                                {highlightText("Comments", option)}
                            </button>
                            <button onClick={()=>{setOption("History")}}>
                                {highlightText("History", option)}
                            </button>
                        </div>
                    </div>
                    <div className="SettingsLogout flex flex-col ml-10">
                        <div className="break w-full my-1 flex -ml-5">
                            <div className='h-[1px] bg-gray-500  w-64'></div>
                        </div>
                        <a className="Settings mt-8 mb-1 hover:cursor-pointer hover:no-underline text-skin-text200">Settings</a>
                        <a onClick={logoutHandler} className="Logout hover:cursor-pointer hover:no-underline mb-16 text-red-500">Logout</a>
                    </div>
                </div>
                <div className="col2 flex flex-col w-1/2 my-5">
                    {option==="Public Posts"&&(<UserPosts userId={userObj?.userId} isprivate={false} />)}
                    {option==="Private Posts"&&(<UserPosts userId={userObj?.userId} isprivate={true} />)}
                    {/* <div className="ContinueWatching flex flex-col">
            <div className="titleSeeAll flex justify-between">
            <div className="title">Continue Watching</div>
            <a className="SeeAll">More</a>
            </div>
            <div className="dummyWatchMoreCard border border-white w-full h-32">Dummy</div>
            <div className="dummyWatchMoreCard border border-white w-full h-32">Dummy</div>
            <div className="dummyWatchMoreCard border border-white w-full h-32">Dummy</div>
          </div>
          <br /> */}
                    
                </div>
                <div className="col3 bg-skin-bg200 flex flex-col w-1/5 p-4 top-0 h-[calc(100vh)] sticky overflow-y-scroll no-scrollbar overscroll-auto">
                    <div className="profile flex flex-col justify-center items-center">
                        <div className="dp border flex mt-5 border-red-500 w-36 h-36 justify-center items-center rounded-full">
                            <div className="image">
                                p
                            </div>
                        </div>
                        <div className="name mt-4 font-sans font-bold text-skin-text100 text-xl">{loading ? '...Loading' : userData?.profile?.name || 'Not Found'}</div>
                        <div className="usernameCreatedOn mt-1 font-sans text-skin-text200 text-xs">{loading ? '...Loading' : userObj?.userId || 'Not Found'} • {userData.createdDate}</div>
                        <div className="usernameCreatedOn  mt-3 flex w-full px-2 justify-between">
                            <div className="Posts font-sans font-bold text-skin-text100 text-lg">Posts</div>
                            <div className="Followers font-sans font-bold text-skin-text100 text-lg">Followers</div>
                            <div className="Followings font-sans font-bold text-skin-text100 text-lg">Followings</div>
                        </div>
                    </div>
                    <div className="Channels flex flex-col mt-12 justify-center items-center">
                        <div className="titleCreate w-full flex justify-between">
                            <div className="title font-sans font-bold text-skin-text100 text-xl">
                                Channels
                            </div>
                            <a className="Create font-sans  text-skin-accent200 text-lg">
                                Create
                            </a>
                        </div>
                        <div className="tabs w-full mt-5">
                            <div className="dummyWatchMoreCard border border-white w-full h-16 font-sans font-bold text-skin-text100 text-lg">Dummy</div>
                            <div className="break w-full my-1 flex ">
                                <div className='h-[1px] bg-gray-500  w-64'></div>
                            </div>
                            <div className="dummyWatchMoreCard border border-white w-full h-16 font-sans font-bold text-skin-text100 text-lg">Dummy</div>
                            <div className="break w-full my-1 flex ">
                                <div className='h-[1px] bg-gray-500  w-64'></div>
                            </div>
                            <div className="dummyWatchMoreCard border border-white w-full h-16 font-sans font-bold text-skin-text100 text-lg">Dummy</div>
                            <div className="break w-full my-1 flex ">
                                <div className='h-[1px] bg-gray-500  w-64'></div>
                            </div>
                            <div className="dummyWatchMoreCard border border-white w-full h-16 font-sans font-bold text-skin-text100 text-lg">Dummy</div>
                        </div>
                        <button className="SeeAll flex w-2/3 h-8 mt-3 font-sans font-sm text-skin-text100 text-sm rounded-3xl bg-skin-primary100 justify-center items-center">See All</button>
                    </div>
                </div>
            </div>

        </>
    )
}