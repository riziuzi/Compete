import React, { useEffect, useState } from 'react'
import useAuthentication from '../Components/Hook/useAuthenticate'
import UserPosts from '../Components/UserPosts/UserPosts'
import {onep0} from '../apiConfig'
import { Nav2 } from '../Components/Navbars/Navbars'
import LoadingDots from '../Components/Skeletons/LoadingDots'

const read_user = async (userId) => {
    const res = await fetch(`${onep0}/read-user?userId=${userId}`, {
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
    const [profileLoading, setprofileLoading] = useState(true)
    const [userData, setUserData] = useState({})
    const [hookSignal, setHookSignal] = useState(false)
    const { authenticated, loading, userObj } = useAuthentication({ failNavigateTo: "/signin", dependencies: [hookSignal] })
    useEffect(() => {
        const fetchData = async () => {
            if (userObj?.userId) {
                try {
                    const data = await read_user(userObj.userId);
                    console.log(data.user.createdDate)
                    setUserData({ ...data.user });
                    setprofileLoading(false)
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
            return <div className="Overall my-1 bg-skin-accent100 w-32 rounded-lg text-sm text-skin-text200">{text}</div>
        }
        else {
            return <div className="Overall my-1 text-sm text-skin-text200">{text}</div>
        }

    }
    return (
        <>
            <Nav2 />
            <div className="mainContainer flex justify-between">
                <div className="col1 bg-skin-bg200 flex flex-col w-[14%] justify-between top-[56px] h-[calc(100vh-56px)] sticky overflow-y-scroll no-scrollbar overscroll-auto">
                    <div className="upper">
                        <div className="navigation mt-20 ml-10 flex flex-col items-start">
                            <button onClick={() => { setOption("Overall") }}>
                                {highlightText("Overall", option)}
                            </button>
                            <button onClick={() => { setOption("Public Posts") }}>
                                {highlightText("Public Posts", option)}
                            </button>
                            <button onClick={() => { setOption("Private Posts") }}>
                                {highlightText("Private Posts", option)}
                            </button>
                            <button onClick={() => { setOption("Directories") }}>
                                {highlightText("Directories", option)}
                            </button>
                            <button onClick={() => { setOption("Comments") }}>
                                {highlightText("Comments", option)}
                            </button>
                            <button onClick={() => { setOption("History") }}>
                                {highlightText("History", option)}
                            </button>
                        </div>
                    </div>
                    <div className='w-full flex justify-center'>
                        <a href="/createcontent" className="Post rounded-3xl hover:cursor-pointer hover:bg-slate-600 font-sans text-center font-bold text-xl w-5/6 bg-skin-primary200 text-text py-3">
                            Post
                        </a>
                    </div>
                    <div className="SettingsLogout flex flex-col ml-10">
                        <div className="break w-full my-1 flex -ml-5">
                            <div className='h-[1px] bg-gray-500  w-64'></div>
                        </div>
                        <a className="Settings mt-8 mb-1 hover:cursor-pointer hover:no-underline text-sm text-skin-text200">Settings</a>
                        <a onClick={logoutHandler} className="Logout hover:cursor-pointer hover:no-underline text-sm mb-16 text-red-500">Logout</a>
                    </div>
                </div>
                <div className="col2 flex flex-col w-2/3 my-5">
                    {option === "Public Posts" && !loading && (<UserPosts userId={userObj?.userId} isprivate={false} />)}
                    {option === "Private Posts" && !loading && (<UserPosts userId={userObj?.userId} isprivate={true} />)}
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
                <div className="col3 bg-skin-bg200 flex flex-col w-[17%] p-4 top-[56px] h-[calc(100vh-56px)] sticky overflow-y-scroll no-scrollbar overscroll-auto">
                    <div className="profile flex flex-col justify-center items-center">
                        <div className="dp border flex mt-5 border-red-500 w-36 h-36 justify-center items-center rounded-full">
                            <div className="image">
                                p
                            </div>
                        </div>
                        <div className="name mt-4 font-sans font-bold text-skin-text100 text-base">{profileLoading ? (<div className='scale-[20%]'><LoadingDots /></div>) : userData?.profile?.name || 'Not Found'}</div>
                        <div className="usernameCreatedOn flex mt-1 font-sans text-skin-text200 text-xs">{profileLoading ? (<div className='scale-[20%]'><LoadingDots /></div>) : <>{userObj?.userId} • </> || 'Not Found'}{userData.createdDate}</div>
                        <div className="usernameCreatedOn  mt-3 flex w-full px-2 justify-between">
                            <div className="Posts font-sans font-bold text-skin-text100 text-sm">Posts</div>
                            <div className="Followers font-sans font-bold text-skin-text100 text-sm">Followers</div>
                            <div className="Followings font-sans font-bold text-skin-text100 text-sm">Followings</div>
                        </div>
                    </div>
                    <div className="Channels flex flex-col mt-12 justify-center items-center">
                        <div className="titleCreate w-full flex justify-between">
                            <div className="title font-sans font-bold text-skin-text100 text-base">
                                Channels
                            </div>
                            <a className="Create font-sans  text-skin-accent200 text-sm">
                                Create
                            </a>
                        </div>
                        <div className="tabs w-full mt-5">
                            <div className="dummyWatchMoreCard border border-white w-full h-16 font-sans font-bold text-skin-text100 text-sm">Dummy</div>
                            <div className="break w-full my-1 flex ">
                                <div className='h-[1px] bg-gray-500  w-64'></div>
                            </div>
                            <div className="dummyWatchMoreCard border border-white w-full h-16 font-sans font-bold text-skin-text100 text-sm">Dummy</div>
                            <div className="break w-full my-1 flex ">
                                <div className='h-[1px] bg-gray-500  w-64'></div>
                            </div>
                            <div className="dummyWatchMoreCard border border-white w-full h-16 font-sans font-bold text-skin-text100 text-sm">Dummy</div>
                        </div>
                        <button className="SeeAll flex w-2/3 h-8 mt-3 font-sans font-sm text-skin-text100 text-sm rounded-3xl bg-skin-primary100 justify-center items-center">See All</button>
                    </div>
                </div>
            </div>

        </>
    )
}