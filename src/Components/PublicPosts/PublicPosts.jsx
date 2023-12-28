import React, { useEffect, useState } from 'react';
import BlogCard from '../UtilityComponents/BlogCard/BlogCard';
import { read } from '../Functions/read';

export default function Blog({ userId = "", isprivate = false, defaultLimit = 10 } = {}) {
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

  return (
    <div>
      <h3>Public Posts :</h3>
      <br />
      {Blogs.map((data, index) => (
        // in map, every tag should also be provided with a unique key
        <div key={index}>             
          <BlogCard key={index} index={index + 1} data={data} />
          <br />
        </div>
      ))}
    </div>
  );
}
