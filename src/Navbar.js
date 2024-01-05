import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navbar-wrapper-button">
            <button  className='home-button' href="/home" >
                Home
            </button>
        </div>
        <div className="navbar-wrapper-button">
            <button className='new-blog-home-button' href="/NewBlog">
                New Blog
            </button>
        </div>
    </div>
  )
}

export default Navbar