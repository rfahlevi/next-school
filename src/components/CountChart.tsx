"use client"

import Image from 'next/image';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Total',
        count: 100,
        fill: '#FFF',
    },
    {
        name: 'Girl',
        count: 50,
        fill: '#FBBF24',
    },
    {
        name: 'Boys',
        count: 50,
        fill: '#2563EB',
    },
    
];


export const CountChart = () => {
    return (
        <div className='bg-white rounded-xl p-4 h-full flex flex-col justify-between'>
            {/* TITLE */}
            <div className='flex justify-between items-center'>
                <h1 className='font-bold text-lg'>Students</h1>
                <Image src="/moreDark.png" alt='' width={14} height={14} />
            </div>
            {/* CHART */}
            <div className='relative w-full h-64'>
                <ResponsiveContainer width="100%" height="100%">
                    <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
                        <RadialBar
                            background
                            dataKey="count"
                            animationDuration={3000}
                            animationEasing='ease'
                        />
                    </RadialBarChart>
                </ResponsiveContainer>
                <Image src="/maleFemale.png" alt='' width={50} height={50} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' priority/>
            </div>
            {/* BOTTOM */}
            <div className='flex justify-evenly'>
                <div className='flex flex-col gap-1 justify-center items-center'>
                    <div className="w-5 h-5 rounded-full bg-blue-200" />
                    <h1 className='font-bold'>1,234</h1>
                    <h2 className='text-xs text-gray-500'>Boys (55%)</h2>
                </div>
                <div className='flex flex-col gap-1 justify-center items-center'>
                    <div className="w-5 h-5 rounded-full bg-yellow-200" />
                    <h1 className='font-bold'>983</h1>
                    <h2 className='text-xs text-gray-500'>Girls (45%)</h2>
                </div>
            </div>
        </div>
    )
}

export default CountChart