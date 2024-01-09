import React from 'react'

const Blogs = ({blogs, handleDelete}) => {
  return (
    <div className="blog-preview-container">
        {
        blogs?.map((blog) => (
            <div className="blog-preview" key={blog.id}>
                <h1>{blog.title}</h1>
                <p className="blog-author">Written By {blog.author}</p>
                <button 
                    className="blog-delete-bttn"
                    onClick={() => (
                        handleDelete(blog.id)
                    )}
                >
                    delete blog
                </button>
            </div>
        ))
    }
    </div>
  )
}

export default Blogs