import React, { useEffect, useState } from 'react'
import SplineScene from '../components/SplineScene'
import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '../firebase';
import SocialsButtons from '../components/SocialsButtons';
import RevealAnimation from '../components/RevealAnimation';

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
                <RevealAnimation delay={0.25} duration={1}>
                    <div className='text-5xl md:text-6xl font-bold tracking-wider z-0'>
                        <h1>James Daniel</h1>
                        <h1>Ducay</h1>
                    </div>
                </RevealAnimation>

                <RevealAnimation delay={0.5} duration={1}>
                    <p className='pt-7 font-extralight'>Software Developer</p>
                </RevealAnimation>
            </div>

            <div className='absolute bottom-20 left-20 text-sm hover:text-orange-600 transition duration-300'>
                <RevealAnimation delay={0.75} duration={1}>
                    <a href={resumeUrl} target="_blank">Résumé</a>
                </RevealAnimation>
            </div>
        </section>


    )
}

export default Home
