import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Task from '../Components/Task'
import Footer from '../Components/Footer'

export default function JournalAI() {

  const [numberofTasks, setnumberofTasks] = useState()
  const [tasks, setTasks] = useState([])
  return (
    <>
        <Navbar />
        <Task />
        
        <Footer />
    </>
  )
}
