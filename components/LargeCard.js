import Image from 'next/image'
import React from 'react'

function LargeCard({img,title,description,buttonText}) {
  return (
    <div className='relative py-16 cursor-pointer'>
    <div className='relative h-96 min-w-[300px] py-16'>
            <Image
            src={img}
            fill
            className='rounded-2xl'
            />
    </div>
    
    <div className='absolute top-32 left-12'>
        <h1 className='text-4xl mb-3 w-64'>{title}</h1>
        <p className=''>{description}</p>
        
        <button className='py-2 px-4 bg-gray-900 text-white rounded-lg mt-5'>{buttonText}</button>
    </div>
    </div>
  )
}

export default LargeCard