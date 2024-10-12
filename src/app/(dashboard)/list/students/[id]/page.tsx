"use client"

import Announcements from '@/components/Announcements'
import BigCalendar from '@/components/BigCalendar'
import Performance from '@/components/Performance'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const SinglePageStudent = () => {
    return (
        <div className='flex flex-1 flex-col lg:flex-row p-4 gap-4'>
            {/* LEFT */}
            <div className="w-full lg:w-2/3">
                {/* TOP */}
                <div className="flex flex-col md:flex-row gap-4">
                    {/* USER INFO CARD */}
                    <div className="w-full md:w-2/4  flex flex-col gap-3 bg-blue-200 p-2 rounded-md">
                        {/* USER PHOTO */}
                        <div className="flex items-start gap-2">
                            <div className="w-[20%] aspect-square rounded-full bg-blue-500">
                                <Image src="https://images.pexels.com/photos/1187765/pexels-photo-1187765.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" width={144} height={144} className="w-full h-full rounded-full" />
                            </div>
                            <div className="w-[80%]">
                                <h1 className='text-lg text-slate-800 font-bold'>John Doe</h1>
                                <p className='text-xs text-gray-500 mb-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, quis.</p>
                                <div className="flex flex-col gap-y-1">
                                    <div className="flex gap-2 w-1/2 items-center text-xs">
                                        <Image src="/blood.png" alt='' width={18} height={18} className="w-3 h-3" />
                                        <p className='font-semibold'>A+</p>
                                    </div>
                                    <div className="flex gap-2 w-1/2 items-center text-xs ">
                                        <Image src="/date.png" alt='' width={18} height={18} className="w-3 h-3" />
                                        <p className='font-semibold'>January 2025</p>
                                    </div>
                                    <div className="flex gap-2 w-1/2 items-center text-xs">
                                        <Image src="/mail.png" alt='' width={18} height={18} className="w-3 h-3" />
                                        <p className='font-semibold'>elmer@gmail.com</p>
                                    </div>
                                    <div className="flex gap-2 w-1/2 items-center text-xs">
                                        <Image src="/phone.png" alt='' width={18} height={18} className="w-3 h-3" />
                                        <p className='font-semibold'>+1 234 567 89</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* SMALL CARDS */}
                    <div className="w-full md:w-2/4 flex justify-between gap-y-4 flex-wrap">
                        {/* CARD */}
                        <div className="bg-white p-4 rounded-md flex gap-4 w-[48%]">
                            <Image
                                src="/singleAttendance.png"
                                alt=""
                                width={24}
                                height={24}
                                className="w-6 h-6"
                            />
                            <div className="">
                                <h1 className="text-xl font-semibold">90%</h1>
                                <span className="text-sm text-gray-400">Attendance</span>
                            </div>
                        </div>
                        {/* CARD */}
                        <div className="bg-white p-4 rounded-md flex gap-4 w-[48%]">
                            <Image
                                src="/singleBranch.png"
                                alt=""
                                width={24}
                                height={24}
                                className="w-6 h-6"
                            />
                            <div className="">
                                <h1 className="text-xl font-semibold">6th</h1>
                                <span className="text-sm text-gray-400">Grade</span>
                            </div>
                        </div>
                        {/* CARD */}
                        <div className="bg-white p-4 rounded-md flex gap-4 w-[48%]">
                            <Image
                                src="/singleLesson.png"
                                alt=""
                                width={24}
                                height={24}
                                className="w-6 h-6"
                            />
                            <div className="">
                                <h1 className="text-xl font-semibold">18</h1>
                                <span className="text-sm text-gray-400">Lessons</span>
                            </div>
                        </div>
                        {/* CARD */}
                        <div className="bg-white p-4 rounded-md flex gap-4 w-[48%]">
                            <Image
                                src="/singleClass.png"
                                alt=""
                                width={24}
                                height={24}
                                className="w-6 h-6"
                            />
                            <div className="">
                                <h1 className="text-xl font-semibold">6A</h1>
                                <span className="text-sm text-gray-400">Class</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* BOTTOM */}
                <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
                    <h1>Student&apos;s Schedule</h1>
                    <BigCalendar />
                </div>
            </div>
            {/* RIGHT */}
            <div className="w-full lg:w-1/3 flex flex-col gap-4">
                <div className="bg-white p-4 rounded-lg">
                    <h1 className="font-bold text-lg">Shortcut</h1>
                    <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-gray-500">
                        <Link href="/" className='px-3 py-2 rounded-md bg-blue-200'>
                            Student&apos;s Lessons
                        </Link>
                        <Link href="/" className='px-3 py-2 rounded-md bg-yellow-200'>
                            Student&apos;s Teachers
                        </Link>
                        <Link href="/" className='px-3 py-2 rounded-md bg-green-200'>
                            Student&apos;s Exams
                        </Link>
                        <Link href="/" className='px-3 py-2 rounded-md bg-blue-200'>
                            Student&apos;s Assignments
                        </Link>
                        <Link href="/" className='px-3 py-2 rounded-md bg-yellow-200'>
                            Student&apos;s Results
                        </Link>
                    </div>
                </div>
                <Performance />
                <div className="p-4 rounded-lg bg-white">
                    <Announcements />
                </div>
            </div>
        </div>
    )
}

export default SinglePageStudent