import React from 'react'
import Editor2 from '../Components/Editor/Editor2'
import Navbar from '../Components/Navbar'

export default function CreateContent() {
  return (
    <>
    <div><Navbar /></div>
        <div className="container">
            <Editor2 />
            {/* Helo */}
        </div>
    </>
  )
}
