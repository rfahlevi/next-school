import Image from 'next/image'
import React from 'react'

export const InputSearch = () => {
    return (
        <div className="flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
            <Image src="/search.png" alt="" width={14} height={14} />
            <input type="text" className="w-[200px] py-2 bg-transparent outline-none" placeholder="Search..." />
        </div>
    )
}

export default InputSearch