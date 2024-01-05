import React from 'react'
// Story of sticky:
// the div which is sticky should have two things, height (e.g. h-[100vh]) and a top-0 (these 0, 24, 28 are from the top point of the view) CSSLayerStatementRule, which makes it sticky on the top till the parent is in view, else it will become sticky to HTML document
export default function Garage() {
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
    </>
  )
}