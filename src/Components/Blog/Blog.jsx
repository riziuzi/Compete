import React, { useEffect, useState } from 'react';
import Blog_card from './component/Blog_card';

export default function Blog() {
  const [Blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://compete-server.onrender.com/api/blogs/")
      .then(res => res.json())
      .then(data => setBlogs(data))
      .catch(error => console.error("Error fetching blogs:", error));
  }, []);

  return (
    <div>
      <p>{Blogs.map((data, index) => (
        <Blog_card key={index} data={data}/>
      ))}</p>
      
    </div>
  );
}
