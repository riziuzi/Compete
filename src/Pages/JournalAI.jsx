import React, { useState, useEffect } from 'react'
import Navbar from '../Components/Navbar'
import Task from '../Components/Task'
import Footer from '../Components/Footer'
import OlderTask from '../Components/OlderTask'

export default function JournalAI() {

  // const apiUrl = process.env.REACT_APP_HOST ??????????????????????????????????????????????????????
  // console.log(apiUrl)
  const [tasks, setTasks] = useState([])
  const userID = "rishiSIR"    // must be unique
  useEffect(() => {
    fetch("https://compete-server.onrender.com/api/tasks/"+userID).then(
      res => res.json()
    ).then(
      data => {
        setTasks(data)
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
// 3) make a static IP address, which is used by the server.py to run, and never changes (because though 0.0.0.0 opens all network interfaces, 
// but the ip address to access the server still changes, since it is machine ip iteself), 
// right now I am jsut assigning 192... by myself, but "If you're running this in a production environment, 
// you might want to consider more robust solutions, such as using a static IP address, Dynamic DNS, or containerization, 
// depending on your specific requirements. For development purposes within a controlled environment, manually assigning the 
// IP address as you've done is a straightforward approach.""
//
//
// 4) WHy this file is not getting the value of REACT_APP_HOST already set in the .env file, I dont know