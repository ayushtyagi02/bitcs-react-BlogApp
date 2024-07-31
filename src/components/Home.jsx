import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/blogs')
      .then(response => setBlogs(response.data))
      .catch(error => console.log(error));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/blogs/${id}`)
      .then(() => setBlogs(blogs.filter(blog => blog.id !== id)))
      .catch(error => console.log(error));
  };

  return (
    <div>
      <h1>Home Page</h1>
      {blogs.map(blog => (
        <div className='bordered' key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.description}</p>
          <p>Author: {blog.authorName}</p>
          <div className='flex'>
            <Link to={`/blog/${blog.id}`}>Show</Link>
            <Link to={`/blog/edit/${blog.id}`}>Edit</Link>
          <button onClick={() => handleDelete(blog.id)}>Delete</button>
          </div>

        </div>
      ))}
    </div>
  );
};

export default Home;
