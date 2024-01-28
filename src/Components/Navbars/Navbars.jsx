import React from 'react'
import Navbar1 from './Navbar1'
import Navbar2 from './Navbar2'
import NavbarSmall2 from './NavbarSmall2'
import NavbarSmall1 from './NavbarSmall1'

export function Nav1() {
  return (
    <>
      <div className="md:hidden flex">
        <NavbarSmall1 />
      </div>
      <div className="md:flex hidden">
        <Navbar1 />
      </div>
    </>
  )
}

export function Nav2() {
  return (
    <>
      <div className="md:hidden flex sticky top-0 shadow-sm">
        <NavbarSmall2 />
      </div>
      <div className="md:flex hidden sticky top-0 shadow-lg">
        <Navbar2 />
      </div>
    </>
  )
}
