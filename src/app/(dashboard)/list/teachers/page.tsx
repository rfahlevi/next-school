import CircleButton from "@/components/CircleButton";
import InputSearch from "@/components/InputSearch";
import Pagination from "@/components/Pagination";

import React from 'react'

const TeacherListPage = () => {
    return (
        <div className='m-4 mt-0 p-4 flex-1 flex-col gap-2 bg-white rounded-md'>
            <div className='flex items-center justify-between'>
                {/* TITLE */}
                <h1 className='hidden md:block font-bold'>All Teachers</h1>
                <div className="flex flex-col md:flex-row w-full md:w-auto gap-2 md:gap-0">
                    <InputSearch />
                    <div className='flex w-full justify-end gap-2'>
                        <CircleButton src='/filter.png' />
                        <CircleButton src='/sort.png' />
                        <CircleButton src='/plus.png' />
                    </div>
                </div>
            </div>
            {/* TABLE */}
            <div className=""></div>
            {/* PAGINATION */}
            <div className="">
                <Pagination />
            </div>
        </div>
    )
}

export default TeacherListPage