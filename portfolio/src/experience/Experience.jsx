import { getDownloadURL, ref } from 'firebase/storage';
import React, { useEffect, useState } from 'react'
import { firestore, storage } from '../firebase';
import ExperiencePanel from './ExperiencePanel'
import { collection, getDocs } from 'firebase/firestore';
import RevealAnimation from '../components/RevealAnimation';

const Experience = () => {
    // get background
    const [expBackground, setExpBackground] = useState("");

    useEffect(() => {
        const bgUrl = ref(storage, "/assets/profile-bg.jpg");
        getDownloadURL(bgUrl)
            .then((url) => setExpBackground(url))
            .catch((error) => console.log("Failed to load background image:", error));
    }, []);

    // zoom effect on background
    const [zoom, setZoom] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const newZoom = 1 + window.scrollY / 10000;
            setZoom(Math.min(newZoom, 2));
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    // get experience information
    const [expInfo, setExpInfo] = useState([]);

    useEffect(() => {
        const expInfoCollection = collection(firestore, "experience")
        const getExpInfo = async () => {
            const data = await getDocs(expInfoCollection);
            setExpInfo(data.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        }
        getExpInfo();
    }, [])

    const expYears = [2025, 2024, 2023];

    return (
        <>
            <div className='grid justify-items-center relative'>
                <RevealAnimation delay={0.5} width='100%'>
                    <h1 className='w-full text-orange-600 font-extralight text-6xl py-15 sm:text-8xl sm:py-28 ps-5'>Experience</h1>
                </RevealAnimation>

                <div className='absolute z-[-10] top-52 w-[1980px]'>
                    {expBackground && <img className='opacity-30' style={{ transition: 'transform 0.5s', transform: `scale(${zoom})` }} src={expBackground} alt="background" />}
                </div>

                <div className='relative h-full w-4/5 flex flex-col'>
                    <RevealAnimation delay={1}>
                        <div className='grid gap-15 xl:grid-cols-6 xl:gap-20'>
                            {
                                expYears.map((year) => (
                                    // We need to use React.Fagment to be able to add a key since every element in a .map function should have a key
                                    // it helps react to efficiently identify and update elements
                                    <React.Fragment key={year}>
                                        <div className='hidden xl:col-span-2 xl:flex xl:justify-end xl:items-start'>
                                            <h1 className='text-9xl font-extralight'>{year}</h1>
                                        </div>
                                        <div className='xl:col-span-4 xl:gap-20 gap-15 flex flex-col justify-center items-center'>
                                            {
                                                expInfo
                                                    .filter(exp => {
                                                        if (!exp.start_date) return false;
                                                        return exp.start_date.toDate().getFullYear() === year;
                                                    })
                                                    .sort((a, b) => b.start_date.toDate() - a.start_date.toDate()) // descending
                                                    .map((exp) => <ExperiencePanel
                                                        key={exp.id}
                                                        logo={exp.logo}
                                                        company={exp.company}
                                                        role={exp.role}
                                                        duration={exp.duration} />
                                                    )
                                            }
                                        </div>
                                    </React.Fragment>
                                ))
                            }
                        </div>
                    </RevealAnimation>

                </div>

            </div>
        </>

    )
}

export default Experience
