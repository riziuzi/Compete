import React, { useState } from 'react'
import EditorReadOnly from '../EditorjsReadOnly/EditorReadOnly'

export default function BlogCard({ index = null, data = null, isProfile = false } = {}) {
  const [showCard, setshowCard] = useState(false)
  const handleBlogOnClick = () => {
    setshowCard((prev) => !prev)
  }
  console.log(data)
  return (
    <div>
      {!showCard ? (
        <div className='card w-full flex flex-col h-40' onClick={handleBlogOnClick}>
          {isProfile ? (
            <div className='card_header w-full items-center flex' >
              <div className="name_postTime flex flex-col flex-1 ">
                <div className="postTime justify-start ml-3 flex text-center text-xs text-skin-text200">{data["lastUpdateDate"]}3 hours</div>
              </div>
            </div>
          ) : (
            <div className='card_header w-full items-center flex' >
              <div className="profile w-10 h-10 border flex justify-center items-center rounded-full border-red-600"><div className='text-skin-text100'>P</div></div>
              <div className="name_postTime flex flex-col flex-1 ">
                <div className="name justify-start ml-3 flex text-sm text-skin-text200"><div className=''>{data["userId"]}</div></div>
                <div className="postTime justify-start ml-3 flex text-center text-xs text-skin-text200">{data["lastUpdateDate"]}3 hours</div>
              </div>
            </div>
          )}

          <a className='cardTitle my-3 hover:cursor-pointer hover:no-underline  text-2xl text-skin-text100 w-full multilineEllipsis'>{data.data.heading}</a>
          <div className='cardTags text-skin-text200 text-sm my-3 text-left w-full'>#UPSC #masti</div>
          <div className="interacations text-left w-full my-3 text-skin-text200 flex justify-between">
            <div className="commentsLikesSave flex">
              <div className="comments w-10 text-skin-text200">C</div>
              <div className="Likes w-10 text-skin-text200">C</div>
              <div className="Save w-10 text-skin-text200">C</div>
            </div>
            <div className='interactedProfiles text-skin-text200'>{data.userId} {data.coUserIds}</div>
          </div>
        </div>
      ) : (
        <div>
          <button onClick={handleBlogOnClick} className='text-skin-text100 font-sans font-bold bg-skin-bg200 p-2 m-3 rounded-2xl'>Back</button>
          <div className="header rounded-lg shadow-2xl shadow-blue-900 text-center text-skin-text100 text-6xl w-5/6 font-bold h-32 py-5 my-3 bg-skin-bg200 mx-auto" >
            {data.data.heading}
          </div>
          <EditorReadOnly index={index} data={data.data} />
        </div>)
      }
    </div>

  )
}
