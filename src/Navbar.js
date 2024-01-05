import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navbar-button-wrapper">
            <button  className='home-button' href="/home" >
                Home
            </button>
        </div>
        <div className="navbar-button-wrapper">
            <button className='play-button' href="/NewBlog">
                Play
            </button>
        </div>
    </div>
  )
}

export default Navbar