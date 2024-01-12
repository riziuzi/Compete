import React, { useState } from 'react'
import EditorReadOnly from '../EditorjsReadOnly/EditorReadOnly'

export default function BlogCard({ index = null, data = null } = {}) {
    const [dummy, setDummy] = useState(false)
    let headerText = Object.keys(data.data.blocks)
        .map((key) => data.data.blocks[key])
        .find((block) => block.type === "header");
    let headerTextValue = headerText ? headerText.data.text : null;
    const handleBlogOnClick = () => {
        setDummy((prev) => !prev)
    }
    return (
        <div>
            {!dummy ? (
                <div className='card w-full flex flex-col min-h-48' onClick={handleBlogOnClick}>
                    {/* <div className='card_header w-full items-center flex' >
                        <div className="profile w-10 h-10 border flex justify-center items-center rounded-full border-red-600"><div className='text-skin-text100'>P</div></div>
                        <div className="name_postTime flex flex-col flex-1 ">
                            <div className="name justify-start ml-3 flex text-sm text-skin-text200"><div className=''>{data["userId"]}</div></div>
                        </div>
                    </div> */}
                    <div className="postTime justify-start ml-3 flex text-center text-xs text-skin-text200">{data["lastUpdateDate"]}3 hours</div>
                    <a className='cardTitle my-3 hover:cursor-pointer hover:no-underline  text-2xl text-skin-text100 w-full multilineEllipsis'>{headerTextValue}</a>
                    <div className='cardTags text-skin-text200 text-sm my-3 text-left w-full'>#UPSC #masti</div>
                    <div className="interacations text-left w-full my-3 text-skin-text200 flex justify-between">
                        <div className="commentsLikesSave flex">
                            <div className="comments w-10 text-skin-text200">C</div>
                            <div className="Likes w-10 text-skin-text200">C</div>
                            <div className="Save w-10 text-skin-text200">C</div>
                        </div>
                        <div className='interactedProfiles text-skin-text200'>rizi, userId1</div>
                    </div>
                </div>
            ) : (<div>
                <button onClick={handleBlogOnClick}>
                    <EditorReadOnly index={index} data={data.data} />
                </button></div>)
            }
        </div>

    )
}
<div className="mainContainer flex justify-between">
        <div className="col1 bg-skin-bg200 flex flex-col w-1/6 justify-between top-0 h-[calc(100vh)] sticky overflow-y-scroll no-scrollbar overscroll-auto">
          <div className="upper">
            <div className="logo flex mx-5 my-5">
              <a href="/">
                <img src="./img/dark.svg" alt="" className="Logo w-40" />
              </a>
            </div>
            <div className="navigation mt-20 ml-10 flex flex-col">
              <a className="Overall my-1 text-skin-text200">Overall</a>
              <a className="PublicPosts my-1 text-skin-text200">Public Posts</a>
              <a className="Private my-1 text-skin-text200">Private</a>
              <a className="Directories my-1 text-skin-text200">Directories</a>
              <a className="Comments my-1 text-skin-text200">Comments</a>
              <a className="History my-1 text-skin-text200">History</a>
            </div>
          </div>
          <div className="SettingsLogout flex flex-col ml-10">
            <div className="break w-full my-1 flex -ml-5">
              <div className='h-[1px] bg-gray-500  w-64'></div>
            </div>
            <a className="Settings mt-8 mb-1 text-skin-text200">Settings</a>
            <a className="Logout mb-16 text-red-500">Logout</a>
          </div>
        </div>
        <div className="col2 flex flex-col w-1/2">
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
          <div className="YourContributions flex flex-col">
            <div className="my-5 title text-skin-text100 text-xl font-bold">Your Contributions</div>
            <div className="posts flex flex-col">
              <div className="dummyWatchMoreCard border border-white font-sans font-bold text-skin-text100 text-lg w-full h-32">Dummy</div>
              <br />
              <div className="dummyWatchMoreCard border border-white font-sans font-bold text-skin-text100 text-lg w-full h-32">Dummy</div>
              <br />
              <div className="dummyWatchMoreCard border border-white font-sans font-bold text-skin-text100 text-lg w-full h-32">Dummy</div>
              <br />
            </div>

          </div>
        </div>
        <div className="col3 bg-skin-bg200 flex flex-col w-1/5 p-4 top-0 h-[calc(100vh)] sticky overflow-y-scroll no-scrollbar overscroll-auto">
          <div className="profile flex flex-col justify-center items-center">
            <div className="dp border flex mt-5 border-red-500 w-36 h-36 justify-center items-center rounded-full">
              <div className="image">
                p
              </div>
            </div>
            <div className="name mt-4 font-sans font-bold text-skin-text100 text-xl">riziuzi</div>
            <div className="usernameCreatedOn mt-1 font-sans text-skin-text200 text-xs">Username • CreatedOn</div>
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
