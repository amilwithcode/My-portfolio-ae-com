'use client'

import Image from 'next/image'
import myImage from '@/assets/images/myImage.png'

function MyImage()  {
    return (
        <div className='w-full max-w-screen h-full shadow-lg'>
            <Image src={myImage} alt="My Image" className=' border rounded  '/>
        </div>
    )
}

export default MyImage
