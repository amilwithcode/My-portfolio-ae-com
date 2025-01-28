'use client'

import Image from 'next/image'
import myImage from '@/src/assets/images/myImage.png'

function MyImage()  {
    return (
        <div>
            <Image src={myImage} alt="My Image" className='flex  justify-center items-center border rounded ml-2 '/>
        </div>
    )
}

export default MyImage
