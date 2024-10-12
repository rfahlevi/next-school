import Image from 'next/image';
import React from 'react'
import { Pie, PieChart, ResponsiveContainer } from 'recharts'


const data = [
    { name: 'Group A', value: 92, fill: "#2563EB" },
    { name: 'Group B', value: 8, fill: "#FBBF24" },
];

export const Performance = () => {
    return (
        <div className="bg-white p-4 rounded-lg h-[280px] relative">
            <div className='flex justify-between items-center'>
                <h1 className='font-bold text-lg'>Performance</h1>
                <Image src="/moreDark.png" alt='' width={14} height={14} />
            </div>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        dataKey="value"
                        startAngle={180}
                        endAngle={0}
                        data={data}
                        cx="50%"
                        cy="50%"
                        isAnimationActive={true}
                        animationDuration={3000}
                        animationBegin={0}
                        animationEasing='ease'
                        innerRadius={65}
                    />
                </PieChart>
            </ResponsiveContainer>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <h1 className='text-xl font-bold'>9.2</h1>
                <p className='text-xs text-gray-500'>of 10 max LTS</p>
            </div>
            <div className="font-medium absolute bottom-16 left-0 right-0 m-auto text-center">1st Semester - 2nd Semester</div>
        </div>
    )
}

export default Performance