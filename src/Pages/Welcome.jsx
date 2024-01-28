
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbars/Navbar2';
import Footer from '../Components/Footer';
import CountDown from '../Components/CountDown/CountDown';

const Welcome = () => {
  const events_list = [{ "dateValue": "10-19-2024", "timeValue": "12:30", "ampmValue": "pm", "eventName": "UPSC Mains" },
  { "dateValue": "10-19-2024", "timeValue": "12:30", "ampmValue": "pm", "eventName": "UPSC Mains" }]
  return (
    // <div>
    // <Navbar />
    // <div className="home-container">
    //   <section className="welcome-section">
    //     <h1>Welcome to our platform</h1>
    //     <p>
    //       Empowering UPSC aspirants on their journey to success. Our platform is designed to provide a personalized and effective learning experience.
    //     </p>
    //   </section>

    //   <section className="vision-section">
    //     <h2>Our Vision</h2>
    //     <p>
    //       At Compete, we envision a future where every aspirant has access to quality resources, personalized study paths, and a supportive community to thrive in their UPSC preparation journey.
    //     </p>
    //   </section>

    //   <section className="contribute-section">
    //     <h2>How to Contribute</h2>
    //     <p>
    //       We welcome contributions from individuals passionate about education and technology. Here's how you can get involved:
    //     </p>
    //     <ul>
    //       <li>
    //         <strong>Code Contributions:</strong> Check out our GitHub repository at <Link to="https://github.com/riziuzi">GitHub Repository</Link> and submit pull requests for feature enhancements or bug fixes.
    //       </li>
    //       <li>
    //         <strong>Feedback:</strong> Share your thoughts and suggestions with us. Your feedback helps us improve and better cater to the needs of UPSC aspirants.
    //       </li>
    //       <li>
    //         <strong>Spread the Word:</strong> Help us reach more aspirants by sharing our platform with your network. Every new user contributes to our vibrant community.
    //       </li>
    //     </ul>
    //   </section>
    // </div>
    // <div>
    // {events_list.map((data,index)=>
    // {
    //   // console.log(data)
    //   return <CountDown key={index} index={index} event_dict={data}/>
    // })}
    
    // </div>
    // <Footer />  
    // </div>
    <>
      <div className="maincontainer flex flex-col w-full">
        <div className="header flex p-8 w-full  h-[80px] ">
          <a href="/">
            <img src="./img/dark.svg" alt="" className="Logo h-16 w-auto  ml-16" />
          </a>
        </div>
        <div className="hero h-[calc(100vh-82px-50px)] bg-[url(../public/imgHome/starsHome.svg)] flex justify-center items-center">
          <img src="./imgHome/EarthIconHome.svg" alt="" className="EarthIconHome mr-64" />
          <div className="dummy flex flex-col mt-20 h-64 justify-between items-center">
            <div className="tagline text-3xl font-sans font-bold text-skin-text100">The free and effective way to learn!</div>
            <dic className="userAuthButtons flex flex-col justify-center items-center">
              <a href="/signup"><button className="GetStarted w-64 my-1 p-2 text-sm font-bold font-sans text-skin-text100 bg-skin-primary300 rounded-xl">GET STARTED</button></a>
              <a href="/userauth"><button className="GetStarted w-64  my-1 p-2 text-sm font-bold font-sans text-skin-text100 bg-transparent hover:shadow-2xl rounded-xl">I ALREADY HAVE AN ACCOUNT</button></a>
            </dic>
          </div>
        </div>
        <div className="navigation flex h-[50px] bg-skin-bg300 justify-center items-center">
          <a href="/journalai" className="JournalAi text-base mx-10 hover:cursor-pointer hover:no-underline px-5 hover:shadow-2xl font-bold font-sans text-skin-text100">JournalAi</a>
          <a href="/resource" className="Resources text-base mx-10 hover:cursor-pointer hover:no-underline px-5 hover:shadow-2xl font-bold font-sans text-skin-text100">Resources</a>
          <a href="/about" className="About text-base mx-10 hover:cursor-pointer hover:no-underline px-5 hover:shadow-2xl font-bold font-sans text-skin-text100">About</a>
        </div>
        <div className="mainContainer bg-skin-bg200">
          <div className="Why flex flex-col">
            <div className="title flex my-10 text-2xl text-skin-text100 font-sans justify-center font-bold">Why you'll love MindScape India</div>
            <div className="columns flex justify-center items-center">
              <div className="col1 w-1/5 my-10 flex flex-col">
                <div className="Effective h-40 mb-8 flex items-start">
                  <div className="emoji mr-1">
                    <img src="./icon/Fire.svg" alt="" className="fire flex w-[100px] h-auto" />
                  </div>
                  <div className="content flex flex-col">
                    <div className="title text-1xl text-skin-text100 font-sans mb-2 font-bold">Effective and efficient</div>
                    <div className="message text-sm text-skin-text200 font-sans">Experience the power of focused learning; MindScape India streamlines your UPSC preparation, making it not just effective but exceptionally efficient</div>
                  </div>
                </div>
                <div className="Personalized h-40 flex items-start">
                  <div className="emoji mr-1">
                  <img src="./icon/Tick.svg" alt="" className="fire flex w-[100px] h-auto" />
                  </div>
                  <div className="content flex flex-col">
                    <div className="title text-1xl text-skin-text100 font-sans mb-2 font-bold">Personalized learning</div>
                    <div className="message text-sm text-skin-text200 font-sans">Tailored to your aspirations, MindScape India offers personalized recommendations, guiding you through the vast sea of UPSC resources with pinpoint accuracy</div>
                  </div>
                </div>
              </div>
              <div className="col2 col1 w-1/5 mx-16">
                <img src="./imgHome/WhyIllustrationHome.svg" alt="" className="WhyIllustrationHome" />
              </div>
              <div className="col3 col1 my-10 w-1/5">
                <div className="StayMotivated h-40 mb-8 flex items-start">
                  <div className="emoji mr-1">
                  <img src="./icon/Crown.svg" alt="" className="fire flex w-[100px] h-auto" />
                  </div>
                  <div className="content flex flex-col">
                    <div className="title text-1xl text-skin-text100 font-sans mb-2 font-bold">Stay motivated</div>
                    <div className="message text-sm text-skin-text200 font-sans">Stay inspired on your UPSC journey with MindScape India. Our motivational resources and supportive community ensure you're never alone in chasing your goals.</div>
                  </div>
                </div>
                <div className="Effective flex items-start">
                  <div className="emoji mr-1">
                  <img src="./icon/HappyGirl.svg" alt="" className="fire flex w-[100px] h-auto" />
                  </div>
                  <div className="HaveFun h-40 flex flex-col">
                    <div className="title text-1xl text-skin-text100 font-sans mb-2 font-bold">Have fun with it!</div>
                    <div className="message text-sm text-skin-text200 font-sans">Learning for UPSC can be enjoyable too! With MindScape India, explore interactive content, engage in discussions, and add a touch of fun to your serious exam preparations</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="break flex justify-center">
            <div className='h-[1px] bg-gray-500  w-3/4'></div>
          </div>
          <div className="Community my-10">
            <div className="columns flex justify-center items-center">
              <div className="Image mx-16">
                <img src="./imgHome/CommunityHome.svg" alt="" className="community" />
              </div>
              <div className="content flex flex-col w-2/5 justify-center items-start">
                <div className="title flex text-1xl mb-5 text-skin-text100 font-sans font-bold">Collaborative Learning: Enriching the MindScape India Community Together</div>
                <div className="message flex text-sm mb-5 text-skin-text200 font-sans">Share your unique insights, tips, and resources to strengthen the MindScape India community. Your support enriches the MindScape India experience for everyone!</div>
                <a className="goto flex text-sm text-skin-primary200 hover:cursor-pointer hover:no-underline font-bold font-sans">READ COMMUNITY GUIDELINES</a>
              </div>
            </div>
          </div>
          <div className="break flex justify-center">
            <div className='h-[1px] bg-gray-500  w-3/4'></div>
          </div>
          <div className="Android flex my-10 justify-center items-center">
            <div className="col1 flex flex-col  w-2/5 items-start justify-center">
              <div className="title flex text-1xl mb-5 text-skin-text100 font-sans font-bold">Learn anytime, anywhere.</div>
              <div className="message flex text-sm mb-5 text-skin-text200 font-sans">Coming soon: MindScape India's Android app. Elevate your learning on the go and make the most of your breaks and commutes. Stay tuned for a seamless mobile education experience</div>
              <a className="goto flex text-sm text-skin-primary200 hover:cursor-pointer hover:no-underline font-bold font-sans">GET THE RELEASE UPDATE</a>
            </div>
            <div className="col2 mx-16">
              <img src="./imgHome/AndroidHome.svg" alt="" className="AndroidHome" />
            </div>
          </div>
          <div className="break flex justify-center">
            <div className='h-[1px] bg-gray-500  w-3/4'></div>
          </div>
          <div className="JournalAi flex justify-center my-16 items-center">
            <div className="col1 mx-28">
              <img src="./imgHome/JournalAiHome.svg" alt="" className="JournalAiHome" />
            </div>
            <div className="col2 flex items-start justify-center  w-2/5 flex-col">
              <div className="title flex text-1xl mb-5 text-skin-text100 font-sans font-bold">Chart Your “Perseverance” Journey with JournalAi</div>
              <div className="message flex text-sm mb-5 text-skin-text200 font-sans">Embark on your journaling journey with JournalAi – your trusted companion in recording thoughts, reflections, and accomplishments effortlessly</div>
              <a className="title flex text-sm text-skin-primary200 hover:cursor-pointer hover:no-underline font-bold font-sans">CHECK THE LATEST DEVELOPMENT IN JOURNALAI</a>
            </div>
          </div>
          <div className="break flex justify-center">
            <div className='h-[1px] bg-gray-500  w-3/4'></div>
          </div>
          <div className="Insights flex justify-center my-10 items-center">
            <div className="col1 flex w-2/5 items-start justify-center flex-col">
              <div className="title flex text-1xl text-skin-text100 mb-5 hover:cursor-pointer hover:no-underline font-sans font-bold">Public Insights Showcase</div>
              <div className="message flex text-sm text-skin-text200 mb-5 hover:cursor-pointer hover:no-underline font-sans">Explore the Public Insights Showcase, a curated collection of shared knowledge. Delve into diverse perspectives and enhance your learning journey with valuable insights contributed by the MindScape India community.</div>
              <a className="goto flex text-sm text-skin-primary200 font-bold font-sans">EXPLORE INSIGHTS</a>
            </div>
            <div className="col2 mx-16">
              <img src="./imgHome/InsightsHome.svg" alt="" className="InsightsHome" />
            </div>
          </div>
          <div className="break flex justify-center ">
            <div className='h-[1px] bg-gray-500  w-3/4'></div>
          </div>
          <div className="FlashNews flex justify-center my-10 items-center">
            <div className="col2">
              <img src="./imgHome/FlashNewsHome.svg" alt="" className="FlashNewsHome mx-16" />
            </div>
            <div className="col1 flex flex-col w-2/5 items-start justify-center">
              <div className="title flex text-1xl text-skin-text100 mb-5 font-sans font-bold">FlashNews: Daily Brief on Current Affairs News in Short</div>
              <div className="message flex text-sm text-skin-text200 mb-5 font-sans">Explore FlashNews for quick and concise daily updates on current affairs. Stay informed effortlessly with essential highlights delivered in a brief format.</div>
              <a className="goto flex text-sm text-skin-primary200 font-bold hover:cursor-pointer hover:no-underline font-sans">LEARN MORE ABOUT HOW WE DO IT</a>
            </div>
          </div>
        </div>
        <div className="footer h-[100vh] flex flex-col bg-skin-bg100 bg-[url(../public/imgHome/starsHome.svg)]">
          <div className="row1 flex justify-center my-24">
            <div className="message flex text-3xl font-sans font-bold text-skin-text100 mr-64">Learn with MindScape India</div>
            <button className="GetStarted w-64 my-1 p-2 text-sm font-bold font-sans text-skin-text100 bg-skin-primary300 rounded-xl">GET STARTED</button>
          </div>
          <div className="row2 flex justify-evenly">
            <div className="col1 flex flex-col w-44">
              <div className="title flex text-1xl text-skin-text100 font-sans font-bold my-3 ">About Us</div>
              <a className="message hover:cursor-pointer hover:no-underline my-1 flex text-xs text-skin-text200 font-sans">Mission</a>
              <a className="message hover:cursor-pointer hover:no-underline my-1 flex text-xs text-skin-text200 font-sans">Approach</a>
              <a className="message hover:cursor-pointer hover:no-underline my-1 flex text-xs text-skin-text200 font-sans">Team</a>
              <a className="message hover:cursor-pointer hover:no-underline my-1 flex text-xs text-skin-text200 font-sans">Brand Guidelines</a>
              <a className="message hover:cursor-pointer hover:no-underline my-1 flex text-xs text-skin-text200 font-sans">Contact Us</a>
            </div>
            <div className="col2 flex flex-col w-44">
              <div className="title flex text-1xl text-skin-text100 font-sans font-bold my-3">Products</div>
              <a className="message hover:cursor-pointer hover:no-underline my-1 flex text-xs text-skin-text200 font-sans">JournalAi</a>
              <a className="message hover:cursor-pointer hover:no-underline my-1 flex text-xs text-skin-text200 font-sans">Insights</a>
              <a className="message hover:cursor-pointer hover:no-underline my-1 flex text-xs text-skin-text200 font-sans">Universal Editor</a>
              <a className="message hover:cursor-pointer hover:no-underline my-1 flex text-xs text-skin-text200 font-sans">FlashNews</a>
            </div>
            <div className="col3 flex flex-col w-44">
              <div className="title flex text-1xl text-skin-text100 font-sans font-bold my-3">Help and support</div>
              <a className="message hover:cursor-pointer hover:no-underline my-1 flex text-xs text-skin-text200 font-sans">MindScape FAQs</a>
              <a className="message hover:cursor-pointer hover:no-underline my-1 flex text-xs text-skin-text200 font-sans">Status?</a>
              <a className="message hover:cursor-pointer hover:no-underline my-1 flex text-xs text-skin-text200 font-sans">Feedback</a>
              <a className="message hover:cursor-pointer hover:no-underline my-1 flex text-xs text-skin-text200 font-sans">Feature Request</a>
              <a className="message hover:cursor-pointer hover:no-underline my-1 flex text-xs text-skin-text200 font-sans">Contribution FAQs</a>
              <a className="message hover:cursor-pointer hover:no-underline my-1 flex text-xs text-skin-text200 font-sans">Contacts</a>
            </div>
            <div className="col4 flex flex-col w-44">
              <div className="row1 flex flex-col">
                <div className="title flex text-1xl text-skin-text100 font-sans font-bold my-3">Privacy and terms</div>
                <a className="message hover:cursor-pointer hover:no-underline my-1 flex text-xs text-skin-text200 font-sans">Community guidelines</a>
                <a className="message hover:cursor-pointer hover:no-underline my-1 flex text-xs text-skin-text200 font-sans">Terms?</a>
                <a className="message hover:cursor-pointer hover:no-underline my-1 flex text-xs text-skin-text200 font-sans">Privacy</a>
                <a className="message hover:cursor-pointer hover:no-underline my-1 flex text-xs text-skin-text200 font-sans">Respecting your "do not sell my personal information" rights</a>
                <a className="message hover:cursor-pointer hover:no-underline my-1 flex text-xs text-skin-text200 font-sans">Contribution FAQs</a>
                <a className="message hover:cursor-pointer hover:no-underline my-1 flex text-xs text-skin-text200 font-sans">Contacts</a>
              </div>
              <div className="row2 flex flex-col">
                <div className="title flex text-1xl text-skin-text100 font-sans font-bold my-3">Social</div>
                <a className="message hover:cursor-pointer hover:no-underline my-1 flex text-xs text-skin-text200 font-sans">Instagram</a>
                <a className="message hover:cursor-pointer hover:no-underline my-1 flex text-xs text-skin-text200 font-sans">Twitter</a>
              </div>
            </div>
          </div>
          <div className="copyrights mt-40 flex justify-center text-xs text-skin-text200 font-sans">Copyright © 2023-2024 MindScape India</div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
