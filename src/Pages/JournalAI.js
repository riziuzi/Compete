import React, { useState, useEffect } from 'react'
import Navbar from '../Components/Navbar'
import Task from '../Components/Task'
import Footer from '../Components/Footer'
import OlderTask from '../Components/OlderTask'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
export default function JournalAI() {

  const [tasks, setTasks] = useState([])
  const userID = "rishiSIR"    // must be unique
  useEffect(() => {
    fetch("http://192.168.1.7:5000/api/tasks/"+userID).then(
      res => res.json()
    ).then(
      data => {
        setTasks(data)
        console.log("RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAN")
        console.log(data)
      }
    ).catch((error) => console.error("Caught error:", error));
  }, [])

  return (
    <>
        <Navbar />
        <Task />
        {tasks.map((data, index)=>(
          <OlderTask key={index} index={index} {...data} />
        ))}
        <Footer />
    </>
  )
}







// to do:

// 1) task no. will be give here in React, not in server or faDatabase
// 2) read https://stackoverflow.com/questions/74634082/connect-to-localhost-from-mobile-phone-using-express-nodejs