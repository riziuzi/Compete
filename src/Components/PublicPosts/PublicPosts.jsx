import React, { useEffect, useState } from 'react';
import BlogCard from '../UtilityComponents/BlogCards/BlogCard1';
import { read } from '../Functions/read';
import Navbar2 from '../Navbar2';
import useAuthentication from '../Hook/useAuthenticate';
import EditorReadOnly from '../UtilityComponents/EditorjsReadOnly/EditorReadOnly'
import Comment from '../Comment/Comment';


export default function PublicPosts({ userId = "", isprivate = false, defaultLimit = 10 } = {}) {
  const { authenticated, loading, userObj } = useAuthentication()
  const [focusedData, setFocusedData] = useState(null)
  const [Blogs, setBlogs] = useState([]);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchData = async () => {
      try {
        const newData = await read({ userId: userId, isprivate: isprivate, defaultLimit: defaultLimit }, signal);       // apply the skip last id part here (when doing infinite loading)
        newData && setBlogs((prevBlogs) => [...prevBlogs, ...newData]);             // always remember this, newData might be undefined
      }
      catch (error) {
        console.log(error)
      }
    };
    fetchData();
    return () => {
      controller.abort();
      setBlogs([])          // whenever the useEffect is repeated (due to mounting and unmounting of whole Blog component)
    };

  }, [userId]);
  const handleShow = (data) => {
    if (focusedData === null) {
      console.log(data)
      return setFocusedData(data)
    }
    return setFocusedData(null)
  }
  return (
    <>
      {focusedData === null ? (
        <div className='main_container flex justify-center items-start'>
          <div className='leftSideBar w-1/5 mt-10 mr-5 top-[104px] h-[calc(100vh-104)] sticky overflow-y-scroll no-scrollbar overscroll-auto flex-col hidden  sm:flex'>
            <div className="first_left px-6 py-3 felx flex-col bg-skin-bg200 shadow-2xl">
              {authenticated ? (<div className="IfLoggedIn">
                <a href="/createcontent">
                  <button className="Post rounded-3xl font-sans font-bold text-xl w-full bg-skin-primary200 text-text py-5">
                    Post
                  </button>
                </a>
              </div>) : (
                <div className="else">
                  <div className='left1 my-1 text-skin-text100 text-xl font-bold'>MindScape India, is a great community of 1,284 developers.</div>
                  <br />
                  <div className='left1 my-1 text-skin-text200 text-sm'>Share ideas, ask questions, and stay updated.</div>
                  <button className="create_account h-9 w-full my-1 bg-skin-primary100"><a className='text-skin-text100 hover:cursor-pointer hover:no-underline' href="/signup">Create Account</a></button>
                  <div className='dummy w-full justify-center my-1 flex'><a href="/signin" className="login w-full text-skin-text100 hover:cursor-pointer hover:no-underline text-center">Login</a></div>
                </div>)}
            </div>
            <br />
            <div className="left2 px-6 py-3 bg-skin-bg200 flex flex-col">
              <div className='left2_1 text-skin-text200'>Source of News</div>
              <div className='left2_1 text-skin-text200'>Discover</div>
              <div className='left2_1 text-skin-text200'>Questions</div>
              <div className='left2_1 text-skin-text200'>Categories</div>
              <div className='left2_1 text-skin-text200'>Pro All</div>
              <div className="dummy w-full flex justify-center">
                <div className='h-[1px] my-6 bg-gray-500  w-64'></div>
              </div>
              <div className="popular_categories text-bold text-sans text-skin-text200 text-sm mb-3">Popular Categories</div>
              <div className="text_dummy flex justify-between">
                <div className='left2_1 text-skin-text200'>Javascript</div>
                <div className='left2_1 text-skin-text200 rounded-xl px-1 bg-skin-bg300'>99+</div>
              </div>
              <div className="text_dummy flex justify-between">
                <div className='left2_1 text-skin-text200'>PHP</div>
                <div className='left2_1 text-skin-text200 rounded-xl px-1 bg-skin-bg300'>99+</div>
              </div>
              <div className="text_dummy flex justify-between">
                <div className='left2_1 text-skin-text200'>Web Gelistirme</div>
                <div className='left2_1 text-skin-text200 rounded-xl px-1 bg-skin-bg300'>99+</div>
              </div>
              <div className="text_dummy flex justify-between">
                <div className='left2_1 text-skin-text200'>CSS</div>
                <div className='left2_1 text-skin-text200 rounded-xl px-1 bg-skin-bg300'>99+</div>
              </div>
              <div className="text_dummy flex justify-between">
                <div className='left2_1 text-skin-text200'>React</div>
                <div className='left2_1 text-skin-text200 rounded-xl px-1 bg-skin-bg300'>99+</div>
              </div>
            </div>
          </div>
          <div className='mainBar my-5 min-h-full w-2/3'>
            {Blogs.map((data, index) => (
              // in map, every tag should also be provided with a unique key
              <div className='blogCard bg-skin-bg200 px-6 py-6 my-5' key={index}>
                <button onClick={() => { handleShow(data) }}>Show</button>
                <BlogCard key={index} index={index + 1} data={data} handleShow={handleShow}/>
              </div>
            ))}
            {/* <div className=''>                                      why is this automatically creating a a text allign-center on all texts????
            <button className='card border border-red-600 h-52'>
              <div className='card_header border border-red-600 flex' >
                <div className="profile w-10 border border-red-600">P</div>
                <div className="name_postTime flex flex-col flex-1 border border-red-600">
                  <div className="name border border-red-600">riziuzi</div>
                  <div className="postTime border border-red-600">3 hours ago</div>
                </div>
              </div>
              <div className='cardTitle border border-red-600'>This is a guide for all of you, Aspirants, so be ready for the greates journey!</div>
              <div className='cardTags border border-red-600'>#UPSC #masti</div>
              <div className="interacations border border-red-600 flex flex-1 justify-between">
                <div className="commentsLikesSave border border-red flex">
                  <div className="comments w-10 border border-red-600">C</div>
                  <div className="Likes w-10 border border-red-600">C</div>
                  <div className="Save w-10 border border-red-600">C</div>
                </div>
                <div className='interactedProfiles border border-red-600'>rizi, userId1</div>
              </div>
            </button>
          </div> */}
          </div>

          <div className="rightSideBar mt-10 ml-5 sticky top-[104px] h-[calc(100vh-104px)] overflow-y-scroll  no-scrollbar overflow-auto  hidden flex-col min-h-full w-1/5 md:flex">
            <div className="right1 px-6 py-3 bg-skin-bg200 flex flex-col">
              <div className="dummy flex justify-between"><div className='Employer text-skin-text100 text-sans font-bold'>Employers</div><div className='SeeAll text-skin-primary200'>See All</div></div>
              <br />
              <div className='right1_1 text-sm my-1 text-skin-text200'>Looking for Someone to Solve My Python Problem by Connecting with Anydesk</div>
              <br />
              <div className='right1_1 text-sm my-1 text-skin-text200'>HTML Site Speed ​​Optimization will be performed.</div>
              <div className="dummy w-full my-1 flex justify-center">
                <div className='h-[1px] bg-gray-500  w-64'></div>
              </div>
              <div className='right1_1 text-sm my-1 text-skin-text200'>Free Dealership Opportunity — Details in the Subject</div>
              <div className="dummy w-full my-1 flex justify-center">
                <div className='h-[1px] bg-gray-500  w-64'></div>
              </div>
              <div className='right1_1 text-sm my-1 text-skin-text200'>We are looking for ad expert!</div>
              <div className="dummy w-full my-1 flex justify-center">
                <div className='h-[1px] bg-gray-500  w-64'></div>
              </div>
              <div className='right1_1 text-sm my-1 text-skin-text200'>The product will be uploaded to N11 and Hepsiburada from Trendyol.</div>

            </div>
            <br />
            <div className="other px-6 py-3 bg-skin-bg200 flex flex-col">
              <div className='other_heading text-sm text-text my-2 text-skin-text100'>Others</div>
              <div className="other_items my-1 flex justify-between">
                <div className="dumm flex text-sm text-skin-text200">Freq req</div>
                <div className="dumm flex text-sm text-skin-text200">Changes</div>
              </div>
              <div className="dummy w-full my-1 flex justify-center">
                <div className='h-[1px] bg-gray-500  w-64'></div>
              </div>
              <div className="other_items my-1 flex justify-between">
                <div className="dumm flex text-sm text-skin-text200">about us</div>
                <div className="dumm flex text-sm text-skin-text200">Support</div>
              </div>
              <div className="other_items my-1 flex justify-between">
                <div className="dumm flex text-sm text-skin-text200">Security</div>
                <div className="dumm flex text-sm text-skin-text200">Conditions</div>
              </div>
            </div>

          </div>
        </div>) : (
        <>
          <button onClick={handleShow} className='text-skin-text100 font-sans font-bold bg-skin-bg200 p-2 m-3 rounded-2xl'>Back</button>
          <div className="header rounded-lg shadow-2xl shadow-blue-900 text-center text-skin-text100 text-6xl w-5/6 font-bold h-32 py-5 my-3 bg-skin-bg200 mx-auto" >
            {focusedData.data.heading}
          </div>
          <EditorReadOnly data={focusedData.data} />
          <Comment />
        </>
      )}
    </>
  );
}

// issue: the color is superimposed by the color pallet used by Editor