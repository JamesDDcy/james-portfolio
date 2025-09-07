import React, { useEffect, useState } from 'react'
import ShowDescButton from '../components/ShowDescButton'
import { storage } from '../firebase';
import { Fade } from 'react-slideshow-image';
import { getDownloadURL, listAll, ref } from 'firebase/storage';
import 'react-slideshow-image/dist/styles.css'
import './ProjectPanel.css'


const ProjectPanel = (prop) => {
    const [imgUrls, setImgUrls] = useState([]);
    // const [imgIdx, setImgIdx] = useState(0);
    // const [fade, setFade] = useState('fade-in');

    // get project photos
    useEffect(() => {
        const getAllPhotos = async () => {
            const dirRef = ref(storage, prop.images);
            const res = await listAll(dirRef);
            // get download URLs
            const urls = await Promise.all(res.items.map((ref) => getDownloadURL(ref)));
            return urls;
        };
        getAllPhotos(prop.images)
            .then((urls) => setImgUrls(urls))
            .catch((error) => console.log('Error fetching project images:', error));
    }, []);

    // Loop through images every 5 seconds with fade effect
    // useEffect(() => {
    //     if (!imgUrls || imgUrls.length === 0) return;
    //     const interval = setInterval(() => {
    //         setFade('fade-out');
    //         setTimeout(() => {
    //             setImgIdx((prevIdx) => (prevIdx + 1) % imgUrls.length);
    //             setFade('fade-in');
    //         }, 1000); // fade duration
    //     }, 5000);
    //     return () => clearInterval(interval);
    // }, [imgUrls]);

    // convert tools to string
    const toolsToString = (tools = []) => {
        return tools && tools.length > 0 ? tools.join(' | ') : '';
    };
    const toolString = toolsToString(prop.tools);

    // convert awards to string
    const awardsToString = (awards = []) => {
        return awards && awards.length > 0 ? awards.map((award) => `⭐ ${award}`).join(' \n ') : '';
    };
    const awardString = awardsToString(prop.awards);

    return (
        <div className='relative rounded-2xl z-10 h-full' style={{ minHeight: 'calc(100vh - 80px)' }}>

            <div className="absolute z-0 w-full h-full overflow-hidden rounded-2xl">
                <Fade
                    arrows={false}
                    indicators={false}
                    pauseOnHover={false}
                    canSwipe={false}
                    duration={5000}
                    transitionDuration={1000}

                >
                    {imgUrls.map((url, idx) => (
                        <div key={idx} className='w-full h-full'>
                            <img className='w-full h-full object-cover brightness-50' src={url} alt="project image" />
                        </div>
                    ))}
                </Fade>
            </div>
            <div className='relative p-5 flex flex-col h-full'>
                <div className='flex justify-between'>
                    <h1 className='text-xl font-light'>{prop.title}</h1>
                    <p className='text-sm'>{prop.year}</p>
                </div>
                <p className='pt-1 font-extralight'>{toolString}</p>
                <p className='pt-5'>{prop.overview}</p>
                <ShowDescButton description={prop.description}></ShowDescButton>
                <div className='flex flex-col justify-end h-full'>
                    <p>{awardString}</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectPanel
