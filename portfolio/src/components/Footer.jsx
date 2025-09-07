import React from 'react'
import SocialsButtons from './SocialsButtons'

const Footer = () => {
    return (
        <div className='pt-20 flex flex-col min-h-[50vh] items-center justify-center'>
            <div className="border-t mt-2 mx-32 w-3/4">
                <div className='flex justify-between'>
                    <div>
                        <h1 className='pt-5 font-bold text-xl'>Get in touch</h1>
                        <p className='pt-2 font-extralight'>jamesdaniel.dcy@gmail.com</p>
                        <p className='pt-2 font-extralight'>(+63) 932-254-8492</p>
                    </div>
                    <div>
                        <h1 className='pt-5 font-bold text-xl'>Connect with me</h1>
                        <div className='pt-5 flex justify-end'>
                            <SocialsButtons></SocialsButtons>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer
