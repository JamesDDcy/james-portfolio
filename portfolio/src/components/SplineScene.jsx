import { storage } from '../firebase';
import { ref, getDownloadURL } from 'firebase/storage';
import { useEffect, useState } from 'react';

export default function SplineScene() {
    const [imgUrl, setImgUrl] = useState("");
    const [loaded, setLoaded] = useState(false);
    // ref - craetes a ponter to a file. It does not contain the file itself or its URL
    // getDownloadURL retrieves a publicly accessible URL for a file stored in Firebase Storage
    useEffect(() => {
        const splineGifRef = ref(storage, "assets/spline-3d.gif");
        getDownloadURL(splineGifRef)
            .then((url) => setImgUrl(url))
            .catch((error) => console.error("Error fetching image URL:", error));
    }, []);

    return (
        <div className='spline-bg'>
            {imgUrl && <img
                src={imgUrl}
                alt="Spline background"
                onLoad={() => setLoaded(true)}
                className={`transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
            />};
        </div>
    );
}
