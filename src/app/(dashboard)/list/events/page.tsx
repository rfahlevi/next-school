import CircleButton from "@/components/CircleButton";
import InputSearch from "@/components/InputSearch";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import { role, eventsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

import React from 'react'

type Event = {
    id: number
    title: string
    class: string
    date: string
    startTime: string
    endTime: string
}

const columns = [
    {
        title: "Subject",
        accessor: "subject",
    },
    {
        title: "Class",
        accessor: "class",
        className: "hidden md:table-cell"
    },
    {
        title: "Date & Time",
        accessor: "dateTime",
    },
    {
        title: "Actions",
        accessor: "actions",
        className: "flex justify-center"
    },
]

const ClassListPage = () => {
    const renderRow = (item: Event) => (
        <tr key={item.id} className="border-b border-gray-200 even:bg-[#F7F8FA] cursor-pointer text-sm hover:bg-blue-100 hover:transition-all hover:duration-200">
            <td className="p-4">
                <h3 className="font-semibold">{item.title}</h3>
            </td>
            <td className="hidden md:table-cell">{item.class}</td>
            <td className="flex flex-col items-start justify-center mt-2">
                <p className="text-sm">{item.date}</p>
                <span className="text-xs text-gray-500">{item.startTime} - { item.endTime }</span>
            </td>
            <td>
                <div className="flex items-center justify-center gap-2">
                    <Link href={`/list/teacher/${item.id}`} >
                        <button className="w-6 h-6 flex items-center justify-center rounded-full  bg-blue-600 hover:bg-blue-700 hover:transition-all hover:duration-200">
                            <Image src="/edit.png" alt="" width={16} height={16} className="w-3 h-3" />
                        </button>
                    </Link>
                    {role === 'admin' && (
                        <button className="w-6 h-6 flex items-center justify-center rounded-full  bg-red-500 hover:bg-red-600 hover:transition-all hover:duration-200">
                            <Image src="/delete.png" alt="" width={16} height={16} className="w-3 h-3" />
                        </button>
                    )}
                </div>
            </td>
        </tr>
    )

    return (
        <div className='m-4 mt-0 p-4 flex-1 flex-col gap-2 bg-white rounded-md'>
            <div className='flex items-center justify-between'>
                {/* TITLE */}
                <h1 className='hidden md:block font-bold'>All Events</h1>
                <div className="flex flex-col md:flex-row w-full md:w-auto gap-2 md:gap-0">
                    <InputSearch />
                    <div className='flex w-full justify-end gap-2'>
                        <CircleButton src='/filter.png' />
                        <CircleButton src='/sort.png' />
                        {role === 'admin' && (<CircleButton src='/plus.png' />)}
                    </div>
                </div>
            </div>
            {/* TABLE */}
            <div className="">
                <Table columns={columns} renderRow={renderRow} data={eventsData} />
            </div>
            {/* PAGINATION */}
            <div className="">
                <Pagination />
            </div>
        </div>
    )
}

export default ClassListPage