import React from 'react'
import Navbar2 from '../Components/Navbar2'
import BlockNote from '../Components/Editor/BlockNote/BlockNote'

export default function CreateContent() {
  return (
    <>
        <Navbar2 />
      <div className="container border-none">
        <BlockNote />
      </div>
    </>
  )
}
