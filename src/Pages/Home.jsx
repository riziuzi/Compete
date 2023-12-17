
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import CountDown from '../Components/CountDown/CountDown';

const Home = () => {
  const events_list = [{ "dateValue": "10-19-2024", "timeValue": "12:30", "ampmValue": "pm", "eventName": "UPSC Mains" },
  { "dateValue": "10-19-2024", "timeValue": "12:30", "ampmValue": "pm", "eventName": "UPSC Mains" }]
  return (
    <div>
    <Navbar />
    <div className="home-container">
      <section className="welcome-section">
        <h1>Welcome to our platform</h1>
        <p>
          Empowering UPSC aspirants on their journey to success. Our platform is designed to provide a personalized and effective learning experience.
        </p>
      </section>

      <section className="vision-section">
        <h2>Our Vision</h2>
        <p>
          At Compete, we envision a future where every aspirant has access to quality resources, personalized study paths, and a supportive community to thrive in their UPSC preparation journey.
        </p>
      </section>

      <section className="contribute-section">
        <h2>How to Contribute</h2>
        <p>
          We welcome contributions from individuals passionate about education and technology. Here's how you can get involved:
        </p>
        <ul>
          <li>
            <strong>Code Contributions:</strong> Check out our GitHub repository at <Link to="https://github.com/riziuzi">GitHub Repository</Link> and submit pull requests for feature enhancements or bug fixes.
          </li>
          <li>
            <strong>Feedback:</strong> Share your thoughts and suggestions with us. Your feedback helps us improve and better cater to the needs of UPSC aspirants.
          </li>
          <li>
            <strong>Spread the Word:</strong> Help us reach more aspirants by sharing our platform with your network. Every new user contributes to our vibrant community.
          </li>
        </ul>
      </section>
    </div>
    <div>
    {events_list.map((data,index)=>
    {
      // console.log(data)
      return <CountDown key={index} index={index} event_dict={data}/>
    })}
    
    </div>
    <Footer />  
    </div>
  );
};

export default Home;
