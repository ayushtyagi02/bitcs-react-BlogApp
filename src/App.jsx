import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Blogs from './components/Blogs'
import EditBlogs from './components/EditBlogs'
import Contact from './components/Contact'
import About from './components/About'

function App() {

  return (
    <>
      <Routes>
      <Route exact path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/blog/:id" element={<Blogs/>} />
        <Route path="/blog/edit/:id" element={<EditBlogs/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </>
  )
}

export default App
