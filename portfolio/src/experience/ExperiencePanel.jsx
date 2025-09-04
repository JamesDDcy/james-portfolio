import { getDownloadURL, ref } from 'firebase/storage';
import React, { useEffect, useState } from 'react'
import { storage } from '../firebase';

const ExperiencePanel = (prop) => {

    const [logo, setLogo] = useState("");

    useEffect(() => {
        const logoRef = ref(storage, prop.logo);
        getDownloadURL(logoRef)
            .then((url) => setLogo(url))
            .catch((error) => console.log('Error fetching company logo:', error));
    }, []);

    return (
        <div className='w-3/5 border border-white/10 bg-white/10 shadow-2xl backdrop-blur-md rounded-2xl z-50 p-3'>
            <div className='grid grid-cols-4'>
                <div className='col-span-1 flex justify-center items-center'>
                    {logo && <img className='w-1/2 object-contain' src={logo} alt='logo' />}
                </div>
                <div className='col-span-3'>
                    <h1 className='font-medium text-3xl text-orange-600'>{prop.company}</h1>
                    <p className='text-xl py-1 font-'>{prop.role}</p>
                    <p className='text-md font-light text-gray-500'>{prop.duration}</p>
                </div>
            </div>

        </div>
    )
}

export default ExperiencePanel
