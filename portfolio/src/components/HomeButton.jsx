import React, { useEffect, useState } from 'react'

const HomeButton = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
                // check the position of the about section
                const rect = aboutSection.getBoundingClientRect();
                // Show button if the top of the about section is at or above the top of the viewport
                setVisible(rect.top <= 0);
            }
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])


    return (
        <a className='relative' href='#home'>
            <svg
                className={`fill-white fixed bottom-15 right-20 z-50 animate-bounce size-10 transition duration-1000 ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                data-name="1-Arrow Up"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
            >
                <path d="m26.71 10.29-10-10a1 1 0 0 0-1.41 0l-10 10 1.41 1.41L15 3.41V32h2V3.41l8.29 8.29z" />
            </svg>
        </a>
    )
}

export default HomeButton
