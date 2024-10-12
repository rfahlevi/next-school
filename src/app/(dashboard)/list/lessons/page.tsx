import CircleButton from "@/components/CircleButton";
import FormModal from "@/components/FormModal";
import InputSearch from "@/components/InputSearch";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import { role, lessonsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

import React from 'react'

type Lesson = {
    id: number
    subject: string
    class: string
    teacher: string
}

const columns = [
    {
        title: "Subject Name",
        accessor: "subjectName",
    },
    {
        title: "Class",
        accessor: "class",
    },
    {
        title: "Teacher",
        accessor: "teacher",
        className: "hidden lg:table-cell"
    },
    {
        title: "Actions",
        accessor: "actions",
        className: "flex justify-center"
    },
]

const ClassListPage = () => {
    const renderRow = (item: Lesson) => (
        <tr key={item.id} className="border-b border-gray-200 even:bg-[#F7F8FA] cursor-pointer text-sm hover:bg-blue-100 hover:transition-all hover:duration-200">
            <td className="p-4">
                <h3 className="font-semibold">{item.subject}</h3>
            </td>
            <td>{item.class}</td>
            <td className="hidden lg:table-cell">{item.teacher}</td>
            <td>
                <div className="flex items-center justify-center gap-2">
                    {role === 'admin' && (
                        <>
                            <FormModal table="lesson" type="update" data={item} />
                            <FormModal table="lesson" type="delete" id={item.id} />
                        </>
                    )}
                </div>
            </td>
        </tr>
    )

    return (
        <div className='m-4 mt-0 p-4 flex-1 flex-col gap-2 bg-white rounded-md'>
            <div className='flex items-center justify-between'>
                {/* TITLE */}
                <h1 className='hidden md:block font-bold'>All Lessons</h1>
                <div className="flex flex-col md:flex-row w-full md:w-auto gap-2 md:gap-0">
                    <InputSearch />
                    <div className='flex w-full justify-end gap-2'>
                        <CircleButton src='/filter.png' />
                        <CircleButton src='/sort.png' />
                        {role === 'admin' && (<FormModal table="lesson" type="create" />)}
                    </div>
                </div>
            </div>
            {/* TABLE */}
            <div className="">
                <Table columns={columns} renderRow={renderRow} data={lessonsData} />
            </div>
            {/* PAGINATION */}
            <div className="">
                <Pagination />
            </div>
        </div>
    )
}

export default ClassListPage