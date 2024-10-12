import CircleButton from "@/components/CircleButton";
import FormModal from "@/components/FormModal";
import InputSearch from "@/components/InputSearch";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import { role, classesData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

import React from 'react'

type Class = {
    id: number
    name: string
    capacity: number
    grade: number
    supervisor: string
}

const columns = [
    {
        title: "Class Name",
        accessor: "className",
    },
    {
        title: "Capacity",
        accessor: "capacity",
        className: "hidden lg:table-cell"
    },
    {
        title: "Grade",
        accessor: "grade",
        className: "hidden lg:table-cell"
    },
    {
        title: "Supervisor",
        accessor: "supervisor",
        className: "hidden lg:table-cell"
    },
    {
        title: "Actions",
        accessor: "actions",
        className: "flex justify-center"
    },
]

const ClassListPage = () => {
    const renderRow = (item: Class) => (
        <tr key={item.id} className="border-b border-gray-200 even:bg-[#F7F8FA] cursor-pointer text-sm hover:bg-blue-100 hover:transition-all hover:duration-200">
            <td className="p-4">
                <h3 className="font-semibold">{item.name}</h3>
            </td>
            <td className="hidden lg:table-cell">{item.capacity}</td>
            <td className="hidden lg:table-cell">{item.grade}</td>
            <td className="hidden lg:table-cell">{item.supervisor}</td>
            <td>
                <div className="flex items-center justify-center gap-2">
                    {role === 'admin' && (
                        <>
                            <FormModal table="class" type="update" data={item} />
                            <FormModal table="class" type="delete" id={item.id} />
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
                <h1 className='hidden md:block font-bold'>All Classes</h1>
                <div className="flex flex-col md:flex-row w-full md:w-auto gap-2 md:gap-0">
                    <InputSearch />
                    <div className='flex w-full justify-end gap-2'>
                        <CircleButton src='/filter.png' />
                        <CircleButton src='/sort.png' />
                        {role === 'admin' && (<FormModal table="class" type="create" />
                        )}
                    </div>
                </div>
            </div>
            {/* TABLE */}
            <div className="">
                <Table columns={columns} renderRow={renderRow} data={classesData} />
            </div>
            {/* PAGINATION */}
            <div className="">
                <Pagination />
            </div>
        </div>
    )
}

export default ClassListPage