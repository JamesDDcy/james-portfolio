import React from 'react'
import SocialsButtons from './SocialsButtons'
import AnimatedLine from './AnimatedLine'
import RevealAnimation from './RevealAnimation'

const Footer = () => {
    return (
        <div className='pt-20 flex flex-col min-h-[50vh] items-center justify-center'>
            <div className="mx-32 w-3/4">
                <AnimatedLine></AnimatedLine>
                <div className='flex justify-between'>
                    <div>
                        <RevealAnimation delay={0.5}>
                            <h1 className='pt-5 font-bold text-xl'>Get in touch</h1>
                        </RevealAnimation>
                        <RevealAnimation delay={0.75}>
                            <p className='pt-2 font-extralight'>jamesdaniel.dcy@gmail.com</p>
                        </RevealAnimation>
                        <RevealAnimation delay={1}>
                            <p className='pt-2 font-extralight'>(+63) 932-254-8492</p>
                        </RevealAnimation>
                    </div>
                    <RevealAnimation delay={3}>
                        <h1 className='pt-5 font-bold text-xl'>Connect with me</h1>
                        <div className='pt-5 flex justify-end'>
                            <SocialsButtons></SocialsButtons>
                        </div>
                    </RevealAnimation>
                </div>

            </div>
        </div>
    )
}

export default Footer
