import React, { useEffect, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useInView, useAnimation } from "framer-motion";

const RevealAnimation = ({ children, width = "fit-content", delay, duration = 0.5, x = 0, y = 75 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        };
    }, [isInView]);

    return (
        <div ref={ref} style={{ width, position: "relative", overflow: "hidden" }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, x, y },
                    visible: { opacity: 1, x: 0, y: 0 },
                }}
                initial='hidden'
                animate={mainControls}
                transition={{
                    duration: duration,
                    delay: delay
                }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default RevealAnimation;
