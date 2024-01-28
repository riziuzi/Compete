import React from 'react'
import BlockNote from '../Components/Editor/BlockNote/BlockNote'
import { Nav2 } from '../Components/Navbars/Navbars'

export default function CreateContent() {
  return (
    <>
        <Nav2 />
      <div className="container border-none">
        <BlockNote />
      </div>
    </>
  )
}
