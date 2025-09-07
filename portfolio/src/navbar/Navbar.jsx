import React, { useEffect, useState } from 'react'
import './Navbar.css'


const Navbar = () => {
    const [blur, setBlur] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Blur as soon as the user scrolls down even 1px
            setBlur(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // run on mount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='w-full fixed top-10 z-50 flex justify-end text-sm'>
            <div className={`flex justify-start w-1/5 py-5 px-15 gap-16 rounded-s-lg transition-all duration-2000 ${blur ? 'backdrop-blur-xs' : ''}`}>
                <a href="#about" className='line-link'>About</a>
                <a href="#projects" className='line-link'>Projects</a>
            </div>
        </div>
    );
}

export default Navbar
