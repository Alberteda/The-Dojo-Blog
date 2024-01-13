import React from 'react'
import { Link } from 'react-router-dom'

const Blogs = ({blogs, handleDelete}) => {
  return (
    <div className="blog-preview-container">
        {
        blogs?.map((blog) => (
            <div className="blog-preview" key={blog.id}>
                <Link to={`/blogs/${blog.id}`}>
                    <h2>{blog.title}</h2>
                    <p className="blog-author">Written By {blog.author}</p>
                    {/* <button 
                        className="blog-delete-bttn"
                        onClick={() => (
                            handleDelete(blog.id)
                        )}
                    >
                        delete blog
                    </button> */}
                </Link>
            </div>
        ))
    }
    </div>
  )
}

export default Blogs