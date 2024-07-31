import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const Blogs = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:5000/blogs/${id}`)
        .then(response => setBlog(response.data))
        .catch(error => console.error('Error fetching blog:', error));
    }
  }, [id]);

  return (
    <div>
      {blog ? (
        <div>
          <h1>{blog.title}</h1>
          <p>{blog.description}</p>
          <p>Author: {blog.authorName}</p>
          {/* Add Edit button */}
          <Link to={`/blog/edit/${id}`}>
            <button>Edit</button>
          </Link>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Blogs;
