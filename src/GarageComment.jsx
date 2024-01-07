import React, { useState } from 'react'
import Comments from './Components/UtilityComponents/Comment/Comments'
import useNode from './Components/UtilityComponents/Comment/utils'
// Story of sticky:
// the div which is sticky should have two things, height (e.g. h-[100vh]) and a top-0 (these 0, 24, 28 are from the top point of the view) CSSLayerStatementRule, which makes it sticky on the top till the parent is in view, else it will become sticky to HTML document

const commentData = {
  id: 1,
  message: "Type here ...",
  Replies: [
    {
      id: 2,
      message: "Hello My name is this 2",
      Replies: [
        {
          id: 3,
          message: "Hello My name is this 3",
          Replies: []
        },
        {
          id: 4,
          message: "Hello My name is this 4",
          Replies: [],
        }
      ]
    }
  ],

}

export default function Garage() {
  const { nodeDelete, nodeChildAppend, nodeCreate, nodeUpdate } = useNode()
  const [comment, setComment] = useState(commentData)
  const nodeDelete_ = (id)=>{
    nodeDelete(commentData, id)
  }
  const nodeChildAppend_ = (id, inputReply)=>{
    nodeChildAppend(commentData, id, inputReply)
  }
  const nodeUpdate_ = (id,inputRef)=>{
    nodeCreate(commentData,id,inputRef)
  }
  const nodeCreate_ = (id,inputComment)=>{
    nodeUpdate(commentData,id,inputComment)
  }
  return (
    <>
      <Comments comment={comment} nodeDelete_={nodeDelete_} nodeChildAppend_={nodeChildAppend_} nodeUpdate_={nodeUpdate_} nodeCreate_={nodeCreate_} />
    </>
  )
}