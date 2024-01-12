import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Notes from '../Components/Notes/Notes'
import PublicPosts from '../Components/PublicPosts/PublicPosts'
import Navbar2 from '../Components/Navbar2'
export default function Resource() {
  const [Hello, setHello] = useState({})
  // useEffect(()=>{
  //   fetch("https://compete-server.onrender.com/api/blogs").then(
  //     data => data.json()
  //   ).then(data => setHello({...data})).catch(
  //     error => console.log(error)
  //   )
  // }, [])
  return (
    <>
      <Navbar2 />
      {/* <a href="/resource/createcontent"><button><h6>Create Content</h6></button></a> */}
      <PublicPosts userId = "" isprivate = "false" defaultLimit=""/>
      {/* <Notes /> */}
    </>
  )
}
