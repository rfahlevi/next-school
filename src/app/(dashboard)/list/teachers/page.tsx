import CircleButton from "@/components/CircleButton";
import FormModal from "@/components/FormModal";
import InputSearch from "@/components/InputSearch";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import { role, teachersData } from "@/lib/data";
import prisma from "@/lib/prisma";
import { Class, Subject, Teacher } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

import React from 'react'

type TeacherList = Teacher & {subjects: Subject[]} & {classes: Class[]}

const columns = [
    {
        title: "Info",
        accessor: "info",
    },
    {
        title: "Teacher ID",
        accessor: "teacherId",
        className: "hidden md:table-cell"
    },
    {
        title: "Subjects",
        accessor: "subjects",
        className: "hidden md:table-cell"
    },
    {
        title: "Classes",
        accessor: "classes",
        className: "hidden md:table-cell"
    },
    {
        title: "Phone",
        accessor: "phone",
        className: "hidden lg:table-cell"
    },
    {
        title: "Address",
        accessor: "address",
        className: "hidden lg:table-cell"
    },
    {
        title: "Actions",
        accessor: "actions",
        className: "flex justify-center"
    },
]

  const renderRow = (item: TeacherList) => (
        <tr key={item.id} className="border-b border-gray-200 even:bg-[#F7F8FA] text-sm cursor-pointer hover:bg-blue-100 hover:transition-all hover:duration-200">
            <td className="flex items-center gap-4 p-4">
                <Image src={item.img || '/noAvatar.png'} alt="" width={40} height={40} className="md:hidden xl:block w-10 h-10 rounded-full object-cover" />
                <div className="flex flex-col ">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item?.email}</p>
                </div>
            </td>
            <td className="hidden md:table-cell">{item.username}</td>
            <td className="hidden md:table-cell">{item.subjects.map((subject) => subject.name).join(", ")}</td>
            <td className="hidden md:table-cell">{item.classes.map((classItem) => classItem.name).join(", ")}</td>
            <td className="hidden lg:table-cell">{item.phone}</td>
            <td className="hidden lg:table-cell">{item.address}</td>
            <td>
                <div className="flex items-center justify-center gap-2">
                    <Link href={`/list/teachers/${item.id}`} >
                        <button className="w-6 h-6 flex items-center justify-center rounded-full  bg-blue-600 hover:bg-blue-700 hover:transition-all hover:duration-200">
                            <Image src="/view.png" alt="" width={16} height={16} className="w-3 h-3" />
                        </button>
                    </Link>
                    {role === 'admin' && (
                        // <button className="w-6 h-6 flex items-center justify-center rounded-full  bg-red-500 hover:bg-red-600 hover:transition-all hover:duration-200">
                        //     <Image src="/delete.png" alt="" width={16} height={16} className="w-3 h-3" />
                        // </button>
                        <FormModal table="teacher" type="delete" id={item.id} />
                    )}
                </div>
            </td>
        </tr>
    )

const TeacherListPage = async () => {
    const teachers = await prisma.teacher.findMany({
        include: {
            subjects: true,
            classes: true
        }
    })

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
                        {role === 'admin' && (<FormModal table="teacher" type="create" />)}
                    </div>
                </div>
            </div>
            {/* TABLE */}
            <div className="">
                <Table columns={columns} renderRow={renderRow} data={teachers} />
            </div>
            {/* PAGINATION */}
            <div className="">
                <Pagination />
            </div>
        </div>
    )
}

export default TeacherListPage