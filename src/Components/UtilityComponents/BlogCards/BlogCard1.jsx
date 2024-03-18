import React, { useState } from 'react'
import { threep0 } from '../../../apiConfig'

export default function BlogCard1({ index = null, data = null, isProfile = false, handleShow, userObj = null, setReqRender } = {}) {
  console.log("hello", data)
  const [commentCount, setCommentCount] = useState(0)
  const createLike = async (postId, userObj) => {
    if (userObj === null) {
      return alert("Login first!")
    }
    const like = {
      userId: userObj.userId,
      postId: postId
    }
    await fetch(`${threep0}/create-like`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(like),
    }).then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
      .then(data => {
        setReqRender(prev => !prev)
        console.log(data)
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }
  const handleShowLikes = () => {
    console.log(`implimentation for a modal to show all the users who has liked ${data.likes}`)
  }
  return (
    <div>
      <div className='card w-full flex flex-col h-52'>
        {isProfile ? (
          <div className='card_header w-full items-center flex' >
            <div className="name_postTime flex flex-col flex-1 ">
              <div className="postTime justify-start ml-3 flex text-center text-xs text-skin-text200">{data["lastUpdateDate"]}3 hours</div>
            </div>
          </div>
        ) : (
          <div className='card_header w-full items-center flex' >
            <div className="profile w-10 h-10 flex justify-center items-center rounded-full "><div className='text-skin-text100'><img src="./icon/profile.svg" alt="commentIcon" className='w-[100%] mt-1' /></div></div>
            <div className="name_postTime flex flex-col flex-1 ">
              <div className="name justify-start ml-3 flex text-sm text-skin-text200"><div className=''>{data["userId"]}</div></div>
              <div className="postTime justify-start ml-3 flex text-center text-xs text-skin-text200">{data["lastUpdateDate"]}3 hours</div>
            </div>
          </div>
        )}

        <a onClick={() => { handleShow(data) }} className='cardTitle my-3 h-16 hover:cursor-pointer hover:no-underline  text-2xl text-skin-text100 w-full multilineEllipsis'>{data.data.heading}</a>
        <div className='cardTags text-skin-text200 text-sm my-3 text-left w-full'>#UPSC #Mains2024 #IAS</div>
        <div className="interacations text-left w-full my-3 text-skin-text200 flex justify-between">
          <div className="commentsLikesSave flex">
            <div onClick={() => { handleShow(data) }} className="comments mr-2 flex items-start w-10 text-skin-text200 hover:cursor-pointer"><img src="./icon/comment.svg" alt="commentIcon" className='w-[50%] mt-1' />:{data.comments.length || 0}</div>
            <div className="likeSection flex flex-col">
              <div onClick={() => { createLike(data._id, userObj) }} className="Likes mr-2 flex items-start w-10 text-skin-text200 hover:cursor-pointer"><img src="./icon/like.svg" alt="likeIcon" className='w-[50%] mt-1 hover:cursor-pointer hover:shadow-md hover:shadow-green-500' />: {data.likes.length || 0}</div>
            </div>
            <div className="Save flex w-16 text-skin-text200"><img src="./icon/saves.svg" alt="commentIcon" className='w-[32%] mt-1' /> : 0</div>

          </div>
          <div className='interactedProfiles text-skin-text200 whitespace-nowrap overflow-hidden overflow-ellipsis'>{data.userId} {data.coUserIds}</div>
        </div>
      </div>
    </div>

  )
}


// issue: in this type of rendering, where I render whole component each time when something is liked, is bad. Instead what I should do is to make it interactible at that time itself, means the like button
// gets an extra like in a dynamic way itself, without waiting for a re render fue to new update. Making what's happening at server independent of the react side rendering
// will make my application look faster. So, Future: Make the each like button disabled or enabled on the basis of finding if the user has already liked the post or not. Also use
// debounce of 1 second (previous getting cleaned only when a new function is called, not on refresh!)