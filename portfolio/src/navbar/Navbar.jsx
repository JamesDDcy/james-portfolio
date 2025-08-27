import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='w-full fixed top-15 z-50 flex justify-end text-sm'>
            <a href="https://www.linkedin.com/in/jamesducay" target="_blank" className="pr-15 line-link">About</a>
            <a href="https://www.linkedin.com/in/jamesducay" target="_blank" className="pr-25 line-link">Projects</a>
        </div>
    )
}

export default Navbar
