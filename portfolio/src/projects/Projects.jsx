import React, { useEffect, useState } from 'react'
import ProjectPanel from './ProjectPanel'
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../firebase';

const Projects = () => {
    // get project information
    const [projInfo, setProjInfo] = useState([]);

    useEffect(() => {
        const projCollection = collection(firestore, 'projects');
        const getProj = async () => {
            const data = await getDocs(projCollection);
            setProjInfo(data.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        }
        getProj();
    }, [])

    // Helper to chunk array into pairs
    const chunkArray = (arr, size) => {
        const result = [];
        for (let i = 0; i < arr.length; i += size) {
            result.push(arr.slice(i, i + size));
        }
        return result;
    };

    // Sort by 'order' field ascending
    const sortedProjInfo = [...projInfo].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
    const projectPairs = chunkArray(sortedProjInfo, 2);

    return (
        <div id="projects">
            <h1 className='w-full text-orange-600 text-8xl font-extralight py-28 ps-5'>Projects</h1>
            <div className='flex flex-col gap-5 mx-5 pb-10 z-10'>
                {projectPairs.map((pair, rowIdx) => (
                    <div key={rowIdx} className="flex w-full gap-5">
                        {pair.length === 1 ? (
                            <div className="w-full"><ProjectPanel {...pair[0]} /></div>
                        ) : rowIdx % 2 === 0 ? (
                            <>
                                <div className="w-2/5"><ProjectPanel {...pair[0]} /></div>
                                <div className="w-3/5"><ProjectPanel {...pair[1]} /></div>
                            </>
                        ) : (
                            <>
                                <div className="w-3/5"><ProjectPanel {...pair[0]} /></div>
                                <div className="w-2/5"><ProjectPanel {...pair[1]} /></div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects