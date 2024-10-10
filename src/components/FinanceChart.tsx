"use client"

import Image from 'next/image'
import React from 'react'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';

const data = [
    {
        name: 'Jan',
        income: 4000,
        expanse: 3500,
    },
    {
        name: 'Feb',
        income: 3000,
        expanse: 2500,
    },
    {
        name: 'Mar',
        income: 2000,
        expanse: 1500,
    },
    {
        name: 'Apr',
        income: 2780,
        expanse: 2390,
    },
    {
        name: 'May',
        income: 1890,
        expanse: 2000,
    },
    {
        name: 'Jun',
        income: 2390,
        expanse: 1800,
    },
    {
        name: 'Jul',
        income: 3490,
        expanse: 2130,
    },
    {
        name: 'Aug',
        income: 2000,
        expanse: 2810,
    },
    {
        name: 'Sep',
        income: 1800,
        expanse: 1400,
    },
    {
        name: 'Oct',
        income: 2390,
        expanse: 3370,
    },
    {
        name: 'Nov',
        income: 3210,
        expanse: 2000,
    },
    {
        name: 'Dec',
        income: 3390,
        expanse: 2800,
    },
];

export const FinanceChart = () => {
    return (
        <div className='bg-white rounded-xl p-4 h-full'>
            {/* TITLE */}
            <div className='flex justify-between items-center'>
                <h1 className='font-bold text-lg'>Finance</h1>
                <Image src="/moreDark.png" alt='' width={14} height={14} />
            </div>
            {/* CHART */}
            <div className='w-full h-full pb-4'>
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        
                    >
                        <CartesianGrid strokeDasharray="3 3" stroke='#ddd' />
                        <XAxis dataKey="name" fontSize={12} axisLine={false} tick={{ fill:"#d1d5db" }} tickLine={false} />
                        <YAxis fontSize={12} axisLine={false} tick={{ fill:"#d1d5db" }} tickLine={false} tickMargin={10} />
                        <Tooltip contentStyle={{ borderRadius:"10px", borderColor:"lightgray", fontSize:"12px", fontWeight:"500", textTransform:"capitalize"}} />
                        <Legend align='center' verticalAlign='top' wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px", textTransform: "capitalize", fontSize:"14px", fontWeight:"500" }} />
                        <Area type="monotone" dataKey="income" stroke="#2563EB" fill='#2563EB' fillOpacity={0.2} activeDot={{ r: 8 }} strokeWidth={3} animationDuration={3000}
                            animationEasing='ease'  />
                        <Area type="monotone" dataKey="expanse" stroke="#FBBF24" fill='#FBBF24' fillOpacity={0.2} activeDot={{ r: 8 }} strokeWidth={3} animationDuration={3000}
                            animationEasing='ease' />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default FinanceChart