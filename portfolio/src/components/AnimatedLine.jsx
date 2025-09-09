import { useInView } from 'motion/react';
import React, { useEffect, useRef, useState } from 'react'

const AnimatedLine = () => {
    const ref = useRef(null);
    const isInView = useInView(ref);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        if (isInView) {
            setAnimate(true);
        }
    }, [isInView])

    return (
        <div
            ref={ref}
            className={`border-t mt-2 transition-all duration-[5000ms] ${animate ? 'w-full' : 'w-0'}`}
            style={{ overflow: 'hidden' }}
        >
        </div>
    )
}

export default AnimatedLine
