import React, { useEffect, useState } from 'react';
import BlogCard2 from '../UtilityComponents/BlogCards/BlogCard2';
import { read } from '../Functions/read';

export default function Blog({ userId = "userId1", isprivate = true, defaultLimit = 10 } = {}) {
  const [Blogs, setBlogs] = useState([]);
  const [disabledButtons, setDisabledButtons] = useState([]);
  
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchData = async () => {
      try {
        const newData = await read({ userId: userId, isprivate: isprivate, defaultLimit: defaultLimit }, signal);
        newData && setBlogs((prevBlogs) => [...prevBlogs, ...newData]);
        console.log(newData)
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
    
    return () => {
      controller.abort();
      setBlogs([]);
    };
  }, [userId]);

  const makePPHandler = (postId, index) => {
    const token = localStorage.getItem('token');
    
    // Disable the button associated with the post
    setDisabledButtons((prevButtons) => [...prevButtons, index]);

    fetch(`http://localhost:3002/make-${isprivate ? `public` : `private`}`,
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
        console.log(data);
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
      {Blogs.map((data, index) => (
        <div key={index}>
          <div className='UserPosts border border-green-600 bg-skin-bg200 p-5'>
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
    </>
  );
}
