import React, { useEffect, useState } from 'react';
import BlogCard from '../UtilityComponents/BlogCard/BlogCard';
import { read } from '../Functions/read';

export default function Blog({ userId = "userId1", isprivate = true, defaultLimit = 3 } = {}) {
  const [Blogs, setBlogs] = useState([]);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchData = async () => {
      try {
        const newData = await read({ userId: userId, isprivate: isprivate, defaultLimit: defaultLimit }, signal);       // apply the skip last id part here (when doing infinite loading)
        newData && setBlogs((prevBlogs) => [...prevBlogs, ...newData]);             // always remember this, newData might be undefined
      } catch (error) {
        console.log(error)
      }
    };
    fetchData();
    return () => {
      controller.abort();
      setBlogs([])          // whenever the useEffect is repeated (due to mounting and unmounting of whole Blog component)
    };

  }, [userId]);


  const makePublicHandler = (postId) => {
    const token = localStorage.getItem('token');
    fetch(`http://localhost:3002/make-${isprivate? `public`:`private`}`,
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
      .then(data => console.log(data))
      .catch(error => console.log(`Error riziuzi : ${error}`))
  }

  return (
    <div>
      <h3>Your Posts :</h3>
      <br />
      {Blogs.map((data, index) => (
        <div key={index}>            
          <BlogCard key={index} index={index + 1} data={data} />
          <button onClick={() => makePublicHandler(data._id)}> Make {isprivate? `Public`:`Private`}</button>
          <br />
          <br />
        </div>
      ))}
    </div>
  );
}
