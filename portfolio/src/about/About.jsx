import React, { useEffect, useState } from 'react'
import { storage } from '../firebase';
import { ref, getDownloadURL } from 'firebase/storage';

const About = () => {
    // fetch image from db
    const [imgUrl1, setImgUrl1] = useState("");
    const [imgUrl2, setImgUrl2] = useState("");

    useEffect(() => {
        const profile1 = ref(storage, "assets/profile1.jpg");
        const profile2 = ref(storage, "assets/profile2.jpg");

        getDownloadURL(profile1)
            .then((url) => setImgUrl1(url))
            .catch((error) => console.log("Error fetching image URL:", error))

        getDownloadURL(profile2)
            .then((url) => setImgUrl2(url))
            .catch((error) => console.log("Error fetching image URL:", error))
    }, [])

    // zoom effect on profile image
    const [zoom, setZoom] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const newZoom = 1 + window.scrollY / 5000;
            setZoom(Math.min(newZoom, 1.25));
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // hover effect on profile image
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section id="about" className='relative h-screen'>
            <div className='grid grid-cols-2 h-screen content-center'>
                <div
                    className='relative grid h-screen w-3/4 overflow-hidden'
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {imgUrl2 && (
                        <img
                            className="object-cover absolute "
                            src={imgUrl2}
                            style={{
                                opacity: isHovered ? 0 : 1,
                                transition: 'opacity 0.5s, transform 0.5s',
                                transform: `scale(${zoom})`,
                            }}
                            alt="Profile image"
                        />
                    )}
                    {imgUrl1 && (
                        <img
                            className="object-cover absolute"
                            src={imgUrl1}
                            style={{
                                opacity: isHovered ? 1 : 0,
                                transition: 'opacity 0.5s, transform 0.5s',
                                transform: `scale(${zoom})`,
                            }}
                            alt="Profile image hover"
                        />
                    )}
                </div>
                <div className='w-3/4 flex flex-col justify-center'>
                    <h1 className='text-3xl font-bold pb-2'>About me</h1>
                    <div class="border-t mt-2 w-screen"></div>
                    <p className='py-6'>I’m a UP Diliman graduate with an enthusiasm for blending <span className='text-orange-600'>art</span> and <span className='text-orange-600'>technology</span>.</p>
                    <p className='leading-7'>I’m especially drawn to front-end development because it allows me to combine creativity and functionality to create engaging and intuitive user experiences.</p>
                </div>

            </div>
        </section>
    )
}

export default About
