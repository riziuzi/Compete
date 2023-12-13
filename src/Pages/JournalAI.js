import React, { useState, useEffect } from 'react'
import Navbar from '../Components/Navbar'
import Task from '../Components/Task'
import Footer from '../Components/Footer'

export default function JournalAI() {

  const [numberofTasks, setnumberofTasks] = useState()
  const [tasks, setTasks] = useState([])
  const userID = "rishi"    // must be unique
  useEffect(() => {
    fetch("/api/tasks/${userID}").then(
      res => res.json()
    ).then(
      data => {
        setTasks(data)
        console.log(data)
      }
    )
  }, [])

  return (
    <>
        <Navbar />
        <Task />
        
        <Footer />
    </>
  )
}
