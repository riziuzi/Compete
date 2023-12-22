import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Blog from '../Components/Blog/Blog'
import Notes from '../Components/Notes/Notes'
export default function Resource() {
  const [Hello, setHello] = useState({})
  useEffect(()=>{
    fetch("https://compete-server.onrender.com/api/blogs").then(
      data => data.json()
    ).then(data => setHello({...data})).catch(
      error => console.log(error)
    )
  }, [])
  return (
    <div>
        <Navbar />
        <div>{JSON.stringify(Hello)}</div>
        <a href="/resource/createcontent"><button><h6>Create Content</h6></button></a>
        <Blog />
        <Notes />
        <Footer />
    </div>
  )
}