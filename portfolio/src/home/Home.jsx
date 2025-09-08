import React, { useEffect, useState } from 'react'
import SplineScene from '../components/SplineScene'
import cornerImg from '../assets/img/corner.png';
import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '../firebase';
import SocialsButtons from '../components/SocialsButtons';

const Home = () => {

    const [resumeUrl, setResumeUrl] = useState("");

    useEffect(() => {
        const resumeRef = ref(storage, "assets/resume.pdf")
        getDownloadURL(resumeRef).then((url) => setResumeUrl(url)).catch((error) => console.log("Error in fetching resume:", error))
    }, [])

    return (
        <section id='home' className='h-screen relative'>
            <div className='spline-bg pointer-events-none' >
                <SplineScene />
            </div>

            <div className="absolute ml-20 mt-15 z-100">
                <SocialsButtons></SocialsButtons>
            </div>

            <div className='absolute bottom-40 ml-20'>
                <div className='text-6xl font-bold tracking-wider z-0'>
                    <h1>James Daniel</h1>
                    <h1>Ducay</h1>
                </div>
                <p className='pt-7 font-extralight'>Software Developer</p>
            </div>

            <div className='absolute bottom-5 right-15'>
                <img src={cornerImg} alt="Corner" className='h-40' />
            </div>


            <div className='absolute bottom-20 left-20 text-sm hover:text-orange-600 transition duration-300'>
                <a href={resumeUrl} target="_blank">Resume</a>
            </div>
        </section>


    )
}

export default Home
