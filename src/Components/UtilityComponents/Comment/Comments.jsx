import React, { useRef, useState } from 'react'

const Comments = ({ comment, nodeDelete_, nodeChildAppend_, nodeUpdate_, nodeCreate_ })=> {
  const [inputComment, setInputComment] = useState("")
  const [inputReply, setInputReply] = useState("")
  const [revealEdit, setRevealEdit] = useState(false)
  const [revealDelete, setRevealDelete] = useState(false)
  const [revealReply, setRevealReply] = useState(false)
  const inputRef = useRef()
  const handleonClickReply = () => {
    // nodeChildAppend(comment, comment.id, inputReply)
    setRevealReply((old) => !old)
  }
  const handleCommentEdit = () => {
    setRevealEdit(!revealEdit)
  }
  const handleCommentDelete = () => {
    setRevealDelete((old) => !old)
  }
  const handleEditDiscard = () => {
    inputRef.current.innerText = comment.message
    setRevealEdit((old)=>(!old))
  }
  const handleDeleteKeep = () => {
    setRevealDelete((old) => !old)
  }

  const handleDeleteDelete = () => {
    setRevealDelete(!revealDelete)
    nodeDelete_(comment.id)
  }
  const handleEditEdit = () => {
    nodeUpdate_(comment.id, inputRef)
  }
  const handleCommentReply = () => {
    nodeChildAppend_(comment.id, inputReply)
    setRevealReply((old) => !old)
  }
  const trash = ()=>{
    nodeCreate_(1,inputComment)
    setInputComment("")
  }
  return (
    <div>
      {comment.id === 1 ?
        (
          <>
            <input type="text"
              placeholder='right your comments here'
              value={inputComment}
              onChange={(e) => setInputComment(e.target.value)}
            />
            <button className='submit px-2 flex bg-skin-primary100 text-sm text-skin-text200' onClick={trash}>Submit</button>
          </>
        ) :
        (
          <>
            <div className='Comment border border-red-500 flex flex-col'>
              <div contentEditable={revealEdit}
                suppressContentEditableWarning={revealEdit}
                ref={inputRef}
                className="message">{comment.message}</div>
              {!revealEdit && !revealDelete && (<div className="otherOptions flex justify-between">
                <button onClick={handleonClickReply} className="reply">Reply</button>
                <button onClick={handleCommentEdit} className="edit">Edit</button>
                <button onClick={handleCommentDelete} className="delete">Delete</button>
              </div>)}
              {revealDelete && (
                <>
                  <div className="ConfirmDelete">Are you sure you want to Delete</div>
                  <button onClick={handleDeleteDelete}>Delete</button>
                  <button onClick={handleDeleteKeep}>Keep</button>
                </>)}

              {revealEdit && (
                <>
                  <div className="ConfirmEdit">Are you sure you want to Edit</div>
                  <button onClick={handleEditEdit}>Edit</button>
                  <button onClick={handleEditDiscard}>Discard</button>
                </>)}

            </div>
            {revealReply && (<><input type="text"
              placeholder='right your reply here ...'
              value={inputReply}
              onChange={(e) => setInputReply(e.target.value)}
              className="replyEditor">
            </input>
              <button onClick={handleCommentReply} className='Save'>Submit</button></>)}

          </>
        )}

      {comment?.Replies?.map((c, index) => {
        return (
          <div className="Comment pl-5 border border-transparent border-l-red-600">
            <Comments
              key={index}
              comment={c} nodeDelete_={nodeDelete_} nodeChildAppend_={nodeChildAppend_} nodeUpdate_={nodeUpdate_} nodeCreate_={nodeCreate_}
            />
          </div>
        )
      })}
    </div>
  )
}
export default Comments;

