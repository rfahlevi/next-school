"use client"

import Image from 'next/image'
import React from 'react'

export const CircleButton = ({ src }: { src: string}) => {
    return (
        <button className='w-8 h-8 flex items-center justify-center rounded-full bg-yellow-400 hover:bg-yellow-500 hover:transition-all hover:duration-200'>
            <Image src={src} alt="" width={14} height={14} />
        </button>
    )
}

export default CircleButton