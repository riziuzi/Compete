import React, { useEffect, useState } from 'react';
import Blog_card from './Blog_card';
import { read } from '../Functions/read';

export default function Blog() {
  const [Blogs, setBlogs] = useState([]);

  // useEffect(() => {
  //   fetch("https://compete-server.onrender.com/api/blogs/")
  //     .then(res => res.json())
  //     .then(data => setBlogs(data))
  //     .catch(error => console.error("Error fetching blogs:", error));
  // }, []);

  useEffect(()=>{
    read({userId : "userId1", isprivate : true}).then(newData => {setBlogs(prevBlogs => [...prevBlogs, ...newData]);})    // res is Array of objects
    
  },[])

  return (
    <div>
      {Blogs.map((data, index) => (
        <Blog_card key={index} data={data}/>
        // console.log(data["data"])
      ))}

    </div>
  );
}
