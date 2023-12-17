import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Blog from '../Components/Blog/Blog'
import Notes from '../Components/Notes/Notes'
export default function Resource() {
  return (
    <div>
        <Navbar />
        <a href="/resource/createcontent"><button><h6>Create Content</h6></button></a>
        <Blog />
        <Notes />
        <Footer />
    </div>
  )
}
