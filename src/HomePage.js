import {React, useState, useEffect} from 'react'
import Blogs from './Blogs'

const HomePage = () => {
  const [blogs, setBlogs] = useState(null)

  const handleDelete = (id) => {
    const newBlog = blogs.filter((blog) => (blog.id !== id))
    setBlogs(newBlog)
  }

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setBlogs(data)
      })
  }, [])


  return (
    <div className="home-page">
        <h1>All Blogs!</h1>
        <Blogs blogs={blogs} handleDelete={handleDelete}/>
    </div>
  )
}

export default HomePage