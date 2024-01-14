import React, { useState, useEffect } from 'react'
import useAuthentication from '../Hook/useAuthenticate'
// import { Data } from './GarageData'

const CommentChild = ({ commentId, dictionary, comment, setComment, commentFunc, replyFunc, likeFunc }) => {
  const [replyBoxReveal, setReplyBoxReveal] = useState(false)
  const [reply, setReply] = useState("")

  return (
    <>
      {commentId === "0" && (
        <div>
          <input value={comment} onChange={e => setComment(e.target.value)} type="text" placeholder='Enter your comment here' />
          <button onClick={commentFunc}>Comment</button>
        </div>
      )}
      {commentId !== "0" && (
        <>
          {dictionary[commentId]?.message}
          <button onClick={() => setReplyBoxReveal(prev => !prev)}> {replyBoxReveal ? `Revert` : `Reply`} </button>
          {replyBoxReveal && (
            <div>
              <input value={reply} onChange={e => setReply(e.target.value)} type="replybox" />
              <button onClick={() => {
                setReplyBoxReveal(prev => !prev)
                setReply("")
                replyFunc(reply, commentId)
              }}>Reply</button>
            </div>
          )}
          <button onClick={() => { likeFunc(commentId) }} className='Likes'>Likes: {dictionary[commentId]?.likes.length}</button>
        </>
      )}
      {
        dictionary[commentId]?.children?.slice().reverse().map((element) => (
          <div key={element} className='pl-5 border border-l-red-500 border-transparent'>
            <CommentChild commentId={element} dictionary={dictionary} replyFunc={replyFunc} likeFunc={likeFunc} />
          </div>
        ))
      }
    </>
  )
}

export default function Comment({ postId = "postId1" } = {}) {                     // Main hero *********************************************************************
  const { authenticated, loading, userObj } = useAuthentication()
  const [reqRender, setReqRender] = useState(false)
  const [dictionary, setDictionary] = useState({});
  const [comment, setComment] = useState("")
  const [delet, setDelet] = useState(false)
  useEffect(() => {
    const fetchData = async () => {                                       // future: optimize by just loading the changed Comment state, by sending this power to each individual comment??
      try {
        const response = await fetch("http://localhost:3010/load-comment?postId=postId1", {
          method: "GET",
          headers: {
            'Content-Type': 'application/json'
          },
          // signal: fetchSignal,
        });
        const data = await response.json();
        const initialDictionary = data.comments.reduce((acc, comment) => {
          acc[comment._id] = comment;
          return acc;
        }, {});

        const rootCommentsArray = []
        data.comments.forEach((comment) => {
          if (comment.parentId === "0") {
            rootCommentsArray.push(comment._id)
          }
        })
        const rootData = {
          _id: "0",
          children: rootCommentsArray
        };
        initialDictionary[rootData._id] = rootData;
        setDictionary(initialDictionary);
        // console.log(dictionary)
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, [reqRender, delet]);

  const commentFunc = async () => {
    if (loading) {
      return alert("Wait until your profile is loaded")
    }
    else if (!authenticated) {
      return alert("Login first!")
    }
    await createComment({ message: comment, postId: postId, parentId: "0", userObj: userObj }).then(res => {
      setReqRender(prev => !prev)
    })
    setComment("")
  }
  const replyFunc = async (reply, parentId) => {
    if (loading) {
      return alert("Wait until your profile is loaded")
    }
    else if (!authenticated) {
      return alert("Login first!")
    }
    await createComment({ message: reply, postId: postId, parentId: parentId, userObj: userObj })
    setReqRender(prev => !prev)
  }
  const likeFunc = (commentId) => {
    if (loading) {
      return alert("Wait until your profile is loaded")
    }
    else if (!authenticated) {
      return alert("Login first!")
    }
    createLike(commentId, userObj)
    setReqRender(prev => !prev)
  }
  const createComment = async ({ message = "", parentId = "0", postId = "postId1", userObj = { userId: "userId1" } } = {}) => {
    const comment = {
      postId: postId,
      parentId: parentId,
      userId: userObj.userId,
      message: message
    }
    await fetch("http://localhost:3010/create-comment", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(comment),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(parentId === "0")
        parentId !== "0" && updateComment({ commentId: parentId, newChild: data.comment._id })                      // https://chat.openai.com/c/50cca9b9-7fb5-4025-bf6e-515463d960da ?????????????
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }

  const updateComment = async ({ newMessage = "", newChild = "", newLike = "", commentId = "" } = {}) => {
    const comment = {
      commentId: commentId,
      newMessage: newMessage,
      newLike: newLike,
      newChild: newChild
    }
    await fetch("http://localhost:3010/update-comment", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(comment),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        setReqRender(prev => !prev)
        return response.json();
      })
      .then(data => {
        console.log(data);

      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }

  const createLike = async (commentId, userObj) => {
    const like = {
      userId: userObj.userId,
      commentId: commentId
    }
    await fetch("http://localhost:3010/create-like", {
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
        updateComment({ commentId: commentId, newLike: { likeId: data.like._id, userId: userObj.userId } })
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }
  return (
    <>
      {(
        <div>
          <CommentChild commentId={"0"} dictionary={dictionary} comment={comment} setComment={setComment} commentFunc={commentFunc} replyFunc={replyFunc} likeFunc={likeFunc} />
        </div>
      )}
      {loading && (<>loading...</>)}
      {authenticated && (<>{userObj.userId}</>)}
      <button onClick={() => setDelet(prev => !prev)}>click : {delet}</button>
    </>
  );
}                                                   // Main hero ends ************************************************************************************************


// the problem was earlier that likes and reply were not rendering itself whenever I updated. Then I thought that maybe, all the child recurred components would be independent of each other, so even if the parent component changes
// its state and renders, the child componnent wont (but obviously, if the parent will change itself, then all its used component will rerender (i think right now)).
// So with this assumption, I passed a renderBool, which will render each root component (because I thought the state renderBool will change locally there, but dictionary was also doing the same thing).
// On logging alot, I checked the true culrit at last and found that dictionary wasn't getting updated itself with new data (likes, or reply) (I found it b throtteling down the speed to slow 3G).
// Then I assumed that the problem was that firstly dictionary was getting loaded, and then after the updation was done on database (I logged which steps take first). So with this assumption, I made two things,
// firstly, I declared two states,reqRender and resRender, which simply request a Render to update dictionary, and when dictionary actually gets updated, resRender was set using useEffect, which was passed to the
// child components. Secondly, I made sure that the reqRender is only updated after the updation of update. Then now I realise that I dont need resRender, as I already had dictionary (but still, if child component is called
// will it render if parents get rendered? Assuming that no CHANGING state (like dictionary) is passed to child), so I deleted it.
// Now, two problems still remain. First, how does these async fucntions like fetch work? I should be fully aware how to handle those, and specially how to handle a promise object returned by fetch, if I am not using
// .then chaining. Second, will the child re render, if parent renders itself, in our case, a recurred child of itself?




{/* <>                                          // template comment tailwinded
  {commentId === "0" && (
    <div className="mt-4">
      <input
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        type="text"
        placeholder="Enter your comment here"
        className="p-2 border border-gray-300 rounded-md bg-bg200 text-text200"
      />
      <button
        onClick={commentFunc}
        className="ml-2 px-4 py-2 bg-primary200 text-white rounded-md"
      >
        Comment
      </button>
    </div>
  )}
  {commentId !== "0" && (
    <>
      <p className="text-text200 mt-2 bg-bg200">{dictionary[commentId]?.message}</p>
      <div className="flex items-center mt-2">
        <button
          onClick={() => setReplyBoxReveal((prev) => !prev)}
          className="mr-2 px-2 py-1 bg-accent200 text-white rounded-md"
        >
          {replyBoxReveal ? `Revert` : `Reply`}
        </button>
        {replyBoxReveal && (
          <div className="flex items-center">
            <input
              value={reply}
              onChange={(e) => setReply(e.target.value)}
              type="replybox"
              className="p-2 border border-gray-300 rounded-md bg-bg200 text-text200"
            />
            <button
              onClick={() => {
                setReplyBoxReveal((prev) => !prev);
                setReply("");
                replyFunc(reply, commentId);
              }}
              className="ml-2 px-4 py-2 bg-primary200 text-white rounded-md"
            >
              Reply
            </button>
          </div>
        )}
        <button
          onClick={() => {
            likeFunc(commentId);
          }}
          className="ml-2 px-4 py-2 bg-primary200 text-white rounded-md"
        >
          Likes: {dictionary[commentId]?.likes.length}
        </button>
      </div>
    </>
  )}
  {dictionary[commentId]?.children?.slice().reverse().map((element) => (
    <div
      key={element}
      className="pl-5 border border-l-red-500 border-transparent mt-2 bg-bg200"
    >
      <Comment
        commentId={element}
        dictionary={dictionary}
        replyFunc={replyFunc}
        likeFunc={likeFunc}
      />
    </div>
  ))}
</> */}
