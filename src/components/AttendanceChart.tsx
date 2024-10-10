"use client"
import Image from 'next/image';
import React from 'react'

import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Mon',
        present: 928,
        absent: 445,
    },
    {
        name: 'Tue',
        present: 923,
        absent: 534,
    },
    {
        name: 'Wed',
        present: 1000,
        absent: 344,
    },
    {
        name: 'Thu',
        present: 996,
        absent: 433,
    },
    {
        name: 'Fri',
        present: 970,
        absent: 540,
    },
];

export const AttendanceChart = () => {
    return (
        <div className='bg-white rounded-xl p-4 h-full'>
            {/* TITLE */}
            <div className='flex justify-between items-center'>
                <h1 className='font-bold text-lg'>Attendance</h1>
                <Image src="/moreDark.png" alt='' width={14} height={14} />
            </div>
            {/* CHART */}
            <div className='w-full h-full pb-4'>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={300}
                        barSize={16}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd' />
                        <XAxis dataKey="name" fontSize={12} axisLine={false} tick={{ fill:"#d1d5db" }} tickLine={false} />
                        <YAxis fontSize={12} axisLine={false} tick={{ fill:"#d1d5db" }} tickLine={false} />
                        <Tooltip contentStyle={{ borderRadius:"10px", borderColor:"lightgray" }}/>
                        <Legend align='left' verticalAlign='top' wrapperStyle={{ paddingTop:"20px", paddingBottom:"40px", textTransform:"capitalize" }}/>
                        <Bar dataKey="present" fill="#2563EB" legendType='circle' radius={[10, 10, 0, 0]} />
                        <Bar dataKey="absent" fill="#FBBF24" legendType='circle' radius={[10, 10, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default AttendanceChart