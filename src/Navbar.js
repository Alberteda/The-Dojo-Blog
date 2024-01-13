import React from 'react'

const Navbar = () => {
  return (
    <>
        <div className="navbar">
            <div className="navbar-button-wrapper">
                <button  className='home-button' href="/home" >
                    Home
                </button>
            </div>
            <div className="navbar-button-wrapper">
                <button className='new-blog-button' href="/NewBlog">
                    New Blog
                </button>
            </div>
            <div className="navbar-title">
                <h1>Dojo Club</h1>
            </div>
        </div>
        <div className="navbar-divider-container">
            <hr className='navbar-divider' />
        </div>
    </>
  )
}

export default Navbar