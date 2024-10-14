"use client"

import dynamic from 'next/dynamic'
import Image from 'next/image'
import React, { useState } from 'react'
// import TeacherForm from './form/TeacherForm'
// import StudentForm from './form/StudentForm'

const TeacherForm = dynamic(() => import('./form/TeacherForm'), {
    loading: () => <h1>Loading...</h1>
})
const StudentForm = dynamic(() => import('./form/StudentForm'), {
    loading: () => <h1>Loading...</h1>
})
const ParentForm = dynamic(() => import('./form/ParentForm'), {
    loading: () => <h1>Loading...</h1>
})
const SubjectForm = dynamic(() => import('./form/SubjectForm'), {
    loading: () => <h1>Loading...</h1>
})
const ClassForm = dynamic(() => import('./form/ClassForm'), {
    loading: () => <h1>Loading...</h1>
})
const LessonForm = dynamic(() => import('./form/LessonForm'), {
    loading: () => <h1>Loading...</h1>
})
const ExamForm = dynamic(() => import('./form/ExamForm'), {
    loading: () => <h1>Loading...</h1>
})
const AssignmentForm = dynamic(() => import('./form/AssignmentForm'), {
    loading: () => <h1>Loading...</h1>
})
const ResultForm = dynamic(() => import('./form/ResultForm'), {
    loading: () => <h1>Loading...</h1>
})
const EventForm = dynamic(() => import('./form/EventForm'), {
    loading: () => <h1>Loading...</h1>
})
const AnnouncementForm = dynamic(() => import('./form/AnnouncementForm'), {
    loading: () => <h1>Loading...</h1>
})

const forms: {
    [key: string]: (type: "create" | "update", data?: any) => JSX.Element
} = {
    teacher: (type, data) => <TeacherForm type={type} data={data} />,
    student: (type, data) => <StudentForm type={type} data={data} />,
    parent: (type, data) => <ParentForm type={type} data={data} />,
    subject: (type, data) => <SubjectForm type={type} data={data} />,
    class: (type, data) => <ClassForm type={type} data={data} />,
    lesson: (type, data) => <LessonForm type={type} data={data} />,
    exam: (type, data) => <ExamForm type={type} data={data} />,
    assignment: (type, data) => <AssignmentForm type={type} data={data} />,
    result: (type, data) => <ResultForm type={type} data={data} />,
    event: (type, data) => <EventForm type={type} data={data} />,
    announcement: (type, data) => <AnnouncementForm type={type} data={data} />,
}

const FormModal = ({ table, type, data, id }: {
    table:
    "teacher" |
    "student" |
    "parent" |
    "subject" |
    "class" |
    "lesson" |
    "exam" |
    "assignment" |
    "result" |
    "event" |
    "announcement"
    type: "create" | "update" | "delete"
    data?: any
    id?: number | string
}) => {

    const size = type === "create" ? "w-8 h-8" : "w-6 h-6"
    const color = type === "create" ? "bg-yellow-400 hover:bg-yellow-500"
        : type === "update" ? "bg-blue-600 hover:bg-blue-700"
            : "bg-red-500 hover:bg-red-600"

    const Form = () => {
        return type === "delete" && id ? (
            <form action="" className='p-4 flex flex-col gap-4'>
                <span className='font-medium text-center'>All data will be lost. Are you sure want to delete this {table}?</span>
                <div className="flex gap-4 items-center justify-center">
                    <button className='bg-red-500 text-white px-4 py-2 rounded-md w-fit text-xs hover:transition-all hover:duration-200 hover:bg-red-600' onClick={toggleModal}>Cancel</button>
                    <button className='bg-white text-gray-500 border border-gray-200 hover:transition-all hover:duration-200 hover:bg-gray-100 px-4 py-2 rounded-md w-fit text-xs'>Delete</button>
                </div>
            </form>
        ) : type === 'create' || type === 'update' ?
                (forms[table](type, data))
                : "Load form error!"
    }

    const [open, setOpen] = useState(false)

    const toggleModal = (event: { preventDefault: () => void }) => {
        event.preventDefault()
        setOpen(!open)
    }

    return <>
        <button className={`${size} flex items-center justify-center rounded-full ${color} hover:transition-all hover:duration-200`} onClick={toggleModal}>
            <Image src={`/${type}.png`} alt='' width={type === 'delete' ? 14 : 16} height={type === 'delete' ? 14 : 16} />
        </button>
        {open && (<div className="absolute bg-black transform left-0 top-0 bg-opacity-60 z-50 w-screen h-screen flex items-center justify-center">
            <div className="bg-white p-4 rounded-lg relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
                <div className="absolute top-4 right-4 cursor-pointer" onClick={toggleModal}>
                    <Image src="/close.png" alt='' width={14} height={14} />
                </div>
                <Form />
            </div>
        </div>)}
    </>
}

export default FormModal