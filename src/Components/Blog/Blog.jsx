import React, { useEffect, useState } from 'react';
import Blog_card from './Blog_card';
import { read } from '../Functions/read';

export default function Blog({ userId = "userId1", isprivate = true } = {}) {
  const [Blogs, setBlogs] = useState([]);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchData = async () => {
      try {
        const newData = await read({ userId: userId, isprivate: isprivate, defaultLimit: 3 }, signal);
        newData && setBlogs((prevBlogs) => [...prevBlogs, ...newData]);             // always remember this, newData might be undefined
      } catch (error) {
      }
    };
    fetchData();
    return () => {
      controller.abort();
      setBlogs([])          // whenever the useEffect is repeated (due to mounting and unmounting of whole Blog component)
    };

  }, [userId]);

  return (
    <div>
      <h3>Your Posts :</h3>
      <br />
      {Blogs.map((data, index) => (
        <div>
          <Blog_card key={index} index={index} data={data} />
          <br />
        </div>
      ))}
    </div>
  );
}
