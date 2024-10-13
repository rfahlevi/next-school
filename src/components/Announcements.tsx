import React from 'react'

export const announcementsData = [
    {
        id: 1,
        title: "About 4A Math Test",
        class: "4A",
        date: "2025-01-01",
    },
    {
        id: 2,
        title: "About 3A Math Test",
        class: "3A",
        date: "2025-01-01",
    },
    {
        id: 3,
        title: "About 3B Math Test",
        class: "3B",
        date: "2025-01-01",
    },
    {
        id: 4,
        title: "About 6A Math Test",
        class: "6A",
        date: "2025-01-01",
    },
    {
        id: 5,
        title: "About 8C Math Test",
        class: "8C",
        date: "2025-01-01",
    },
    {
        id: 6,
        title: "About 2A Math Test",
        class: "2A",
        date: "2025-01-01",
    },
    {
        id: 7,
        title: "About 4C Math Test",
        class: "4C",
        date: "2025-01-01",
    },
    {
        id: 8,
        title: "About 4B Math Test",
        class: "4B",
        date: "2025-01-01",
    },
    {
        id: 9,
        title: "About 3C Math Test",
        class: "3C",
        date: "2025-01-01",
    },
    {
        id: 10,
        title: "About 1C Math Test",
        class: "1C",
        date: "2025-01-02",
    },
];

export const Announcements = () => {
    return (
        <div className='flex flex-col gap-4'>
            <div className="flex items-center justify-between">
                <h1 className="font-bold text-lg">Announcements</h1>
                <span className='text-xs font-medium text-gray-400'>View all</span>
            </div>
            <div className='max-h-[330px] overflow-auto flex flex-col gap-4'>
                {announcementsData.map(data => (
                    <div key={data.id} className='rounded-md p-4 even:bg-blue-600 even:bg-opacity-20 
                odd:bg-yellow-400 odd:bg-opacity-20'>
                        <div className='flex items-center justify-between'>
                            <span className='text-xs font-bold'>Class : {data.class}</span>
                            <span className='text-[10px] text-gray-500 bg-white p-1 rounded-md'>{data.date}</span>
                        </div>
                        <span className='text-sm'>
                            {data.title}
                        </span>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Announcements