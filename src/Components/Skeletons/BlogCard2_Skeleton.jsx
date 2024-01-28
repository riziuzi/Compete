import React from 'react'

export default function BlogCard2_Skeleton({ isProfile = false } = {}) {
    return (
            <div className='card w-full  flex flex-col h-52 bg-skin-bg200 '>
                <div className="animation animate-pulse z-0">
                    {isProfile ? (
                        <div className='card_header w-full items-center flex' >
                            <div className="name_postTime flex flex-col flex-1 ">
                                <div className="postTime justify-start ml-3 flex text-center text-xs text-skin-text200"></div>
                            </div>
                        </div>
                    ) : (
                        <div className='card_header w-full items-center flex' >
                            <div className="profile w-10 h-10 flex justify-center items-center rounded-full bg-gray-700"></div>
                            <div className="name_postTime flex flex-col flex-1">
                                <div className="name justify-start ml-3 h-3 rounded-2xl bg-gray-700 w-1/5 mb-1 flex text-sm text-skin-text200"></div>
                                <div className="postTime justify-start ml-3 h-3 rounded-2xl bg-gray-700 w-1/6 flex text-center text-xs text-skin-text200"></div>
                            </div>
                        </div>
                    )}

                    <a className='cardTitle my-3 hover:cursor-pointer hover:no-underline  text-2xl text-skin-text100 w-full multilineEllipsis h-8 rounded-xl bg-gray-600'></a>
                    <div className="tagsContainer flex">
                        <div className='cardTags text-skin-text200 text-sm my-3 text-left w-1/12 h-3 rounded-full mr-2 bg-gray-700'></div>
                        <div className='cardTags text-skin-text200 text-sm my-3 text-left w-1/12 h-3 rounded-full bg-gray-700'></div>
                    </div>
                    <div className="interacations text-left w-full my-3 text-skin-text200 flex justify-between">
                        <div className="commentsLikesSave flex bg-gray-700 rounded-full w-1/3 h-6">
                            
                        </div>
                        <div className='interactedProfiles text-skin-text200 bg-gray-700 rounded-full w-1/6 h-6'></div>
                    </div>
                </div>
            </div>
    )
}
