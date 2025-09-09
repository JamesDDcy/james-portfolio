import React, { useEffect, useState } from 'react'
import './ShowDescButton.css'

const ShowDescButton = (prop) => {
    const [showDetails, setShowDetails] = useState(false);

    // Fade in/out logic
    // showDetails controls the toggle state.
    // shouldRender keeps the element mounted during the fade-out, enabling smooth exit animation.
    const [shouldRender, setShouldRender] = useState(showDetails);
    const [fade, setFade] = useState('');

    useEffect(() => {
        if (showDetails) {
            setShouldRender(true);
            setFade('animate-fadein-down');
        } else if (shouldRender) {
            setFade('animate-fadeout-up');
            const timeout = setTimeout(() => setShouldRender(false), 500);
            return () => clearTimeout(timeout);
        }
    }, [showDetails]);

    return (
        <div>
            <button
                className="font-extralight mt-3 self-start focus:outline-none transition-transform duration-300 flex gap-1 items-center"
                onClick={() => setShowDetails((prev) => !prev)}
                aria-label={showDetails ? 'Hide details' : 'Show details'}
            >
                Read Description
                <svg
                    className={`w-5 h-5 font-extralight transform transition-transform duration-300 ${showDetails ? 'rotate-90' : 'rotate-270'}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </button>
            {shouldRender && prop && (
                <p
                    className={`pt-5 transition-all duration-500 ease-out transform ${fade}`}
                    style={{
                        animation: `${fade === 'animate-fadein-down' ? 'fadein-down' : 'fadeout-up'} 0.5s cubic-bezier(0.4,0,0.2,1)`
                    }}
                >
                    {prop.description}
                </p>
            )}
        </div>
    )
}

export default ShowDescButton
