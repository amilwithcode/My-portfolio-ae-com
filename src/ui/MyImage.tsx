'use client'

import Image from 'next/image'
import myImage from '@/assets/images/myImage.png'

function MyImage()  {
    return (
        <div className='w-full max-w-screen h-full shadow-lg flex items-center justify-center border rounded '>
            <Image src={myImage} alt="My Image"/>
        </div>
    )
}

export default MyImage
