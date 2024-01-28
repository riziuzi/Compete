import React, { useEffect, useState } from 'react';
import BlogCard2 from '../UtilityComponents/BlogCards/BlogCard2';
import { readPost } from '../Functions/readPost';
import { twop0 } from '../../apiConfig'
import BlogCard2_Skeleton from '../Skeletons/BlogCard2_Skeleton';

export default function Blog({ userId = "userId1", isprivate = true, defaultLimit = 10 } = {}) {
  const [Blogs, setBlogs] = useState([]);
  const [disabledButtons, setDisabledButtons] = useState([]);
  const [blogLoading, setblogLoading] = useState(true)                        // shall initialize it with true (so that Nothing Found is not displayed!)

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    (async () => {
      setblogLoading(true)
      const fetchData = async () => {
        try {
          const newData = await readPost({ userId: userId, isprivate: isprivate, defaultLimit: defaultLimit }, signal);
          newData && setBlogs((prevBlogs) => [...prevBlogs, ...newData]);
        } catch (error) {
          console.log(error);
        }
      };

      await fetchData();
      setblogLoading(false)
    })()

    return () => {
      controller.abort();
      setBlogs([]);
    };
  }, [userId]);

  const makePPHandler = (postId, index) => {
    const token = localStorage.getItem('token');

    // Disable the button associated with the post
    setDisabledButtons((prevButtons) => [...prevButtons, index]);

    fetch(`${twop0}/make-${isprivate ? `public` : `private`}`,
      {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          postId: postId,
          token: token
        })
      })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setBlogs(prevBlogs => prevBlogs.filter(blog => blog._id !== postId));
        }
      })
      .catch(error => console.log(`Error riziuzi : ${error}`))
      .finally(() => {
        // Enable the button again after the request is completed
        setDisabledButtons((prevButtons) => prevButtons.filter(buttonIndex => buttonIndex !== index));
      });
  }

  return (
    <>
      {!blogLoading && Blogs.length===0 && (<div className='w-full flex justify-center text-lg text-skin-text200 font-bold border h-[50vh] border-green-700 rounded-lg items-center shadow-green-400 shadow-sm'>Empty :( </div>)}
      {Blogs.map((data, index) => (
        <div key={index}>
          <div className='UserPosts shadow-green-400 shadow-lg border border-green-400 bg-skin-bg200 p-5'>
            <BlogCard2 key={index} index={index + 1} data={data} isProfile={true} />
            <button
              className='MakePrivate bg-skin-primary100 p-2 text-sm font-sans font-bold text-skin-text200'
              onClick={() => makePPHandler(data._id, index)}
              disabled={disabledButtons.includes(index)}
            >
              Make {isprivate ? `Public` : `Private`}
            </button>
          </div>
          <br />
        </div>
      ))}
      {blogLoading ? (<>{Array(3).fill(0).map((d, index) => (<div key={index} className='blogCard bg-skin-bg200 px-6 py-6 my-5 z-0'><BlogCard2_Skeleton isProfile={true}/> {console.log(blogLoading)}</div>))}</>) : (<></>)}
      
    </>
  );
}
