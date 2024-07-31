import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EditBlogs = ({ history }) => {
  const { id } = useParams();
  const [blog, setBlog] = useState({ title: '', description: '', authorName: '' });

  useEffect(() => {
    axios.get(`http://localhost:5000/blogs/${id}`)
      .then(response => setBlog(response.data))
      .catch(error => console.error(error));
  }, [id]);

  const handleChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/blogs/${id}`, blog)
      .then(() => window.location.href = '/')
      .catch(error => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit} className='edit-page'>
      <label>Title</label>
      <input className='edit-fields' type="text" name="title" value={blog.title} onChange={handleChange} />
      <label>Description</label>
      <textarea className='edit-fields' name="description" value={blog.description} onChange={handleChange}></textarea>
      <label>Author Name</label>
      <input className='edit-fields' type="text" name="authorName" value={blog.authorName} onChange={handleChange} />
      <button type="submit">Save</button>
    </form>
  );
};

export default EditBlogs;
