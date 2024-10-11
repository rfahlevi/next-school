"use client"

import React from 'react'

export const Pagination = () => {
    return (
        <div className='flex items-center justify-between p-4 text-gray-500'>
            <button className='py-2 px-4 rounded-md bg-blue-600 text-white text-xs font-semibold 
            disabled:opacity-50 disabled:cursor-not-allowed' disabled>
                Prev
            </button>
            <div className="flex items-center justify-center gap-2 text-sm">
                <button className='px-2 rounded-sm bg-blue-100 font-semibold text-blue-700'>1</button>
                <button className='px-2 rounded-sm '>2</button>
                <button className='px-2 rounded-sm '>3</button>
                ...
                <button className='px-2 rounded-sm '>10</button>
            </div>
            <button className='py-2 px-4 rounded-md bg-blue-600 text-white text-xs font-semibold 
            disabled:opacity-50 disabled:cursor-not-allowed'>
                Next
            </button>
        </div>
    )
}

export default Pagination