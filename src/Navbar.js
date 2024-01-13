import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <div className="navbar">
            <div className="navbar-button-wrapper">
                <Link to="/" >
                    <button  className='home-button'>
                        Home
                    </button>
                </Link>
            </div>
            <div className="navbar-button-wrapper">
                <Link to="/create">
                    <button className='new-blog-button'>
                        New Blog
                    </button>
                </Link>
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