import Image from 'next/image'
import React from 'react'

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
    "attendance" |
    "event" |
    "announcement"
    type: "create" | "update" | "delete"
    data?: any
    id?: number
}) => {

    const size = type === "create" ? "w-8 h-8" : "w-6 h-6"
    const color = type === "create" ? "bg-yellow-400 hover:bg-yellow-500"
        : type === "update" ? "bg-blue-600 hover:bg-blue-700"
            : "bg-red-500 hover:bg-red-600"
    return <>
        <button className={`${size} flex items-center justify-center rounded-full ${color} hover:transition-all hover:duration-200`}>
            <Image src={`/${type}.png`} alt='' width={type === 'delete' ? 14 : 16} height={type === 'delete' ? 14 : 16} />
        </button>
    </>
}

export default FormModal