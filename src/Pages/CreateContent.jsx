import React from 'react'
import Editor from '../Components/Editor/Editor'
import Navbar from '../Components/Navbar'

export default function CreateContent() {
  return (
    <>
    <div><Navbar /></div>
        <div className="container">
            <Editor />
            {/* Helo */}
        </div>
    </>
  )
}
