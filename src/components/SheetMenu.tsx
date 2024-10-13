"use client"

import React, { useState } from 'react'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import Image from 'next/image'
import Link from 'next/link'
import { menuItems, role } from '@/lib/data'

const SheetMenu = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleMenuClick = () => {
        setIsOpen(false);  // Close the sheet
    };

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger onClick={() => setIsOpen(true)}>
                <Image src="/hamburgerMenu.png" alt='' width={24} height={24} />
            </SheetTrigger>
            <SheetContent side="left">
                <SheetHeader>
                    <SheetTitle className='flex items-center justify-start'>
                        <Link href="/" className="flex items-end justify-center lg:justify-start gap-2">
                            <Image src="/logo.png" alt="logo" width={26} height={26} priority />
                            <span className="block font-bold text-blue-900 text-sm">RZ School</span>
                        </Link>
                    </SheetTitle>
                    <SheetDescription>
                        {menuItems.map(menu => (
                                <div className="flex flex-col justify-start items-start gap-2" key={menu.title}>
                                    <span className=" text-gray-400 font-light my-4">{menu.title}</span>
                                    {menu.items.map((item, i) => {
                                        if (item.visible.includes(role)) {
                                            return (
                                                <Link href={item.href} onClick={handleMenuClick} className={`flex gap-x-2   hover:ease-in p-2 rounded-md font-medium  hover:font-bold hover:transition-all hover:duration-200 items-center justify-center lg:justify-start py-1 ${item.label === 'Logout' ? 'text-red-500 hover:bg-red-100' : 'text-gray-500 hover:bg-blue-100 hover:text-blue-700'}`} key={item.label}>
                                                    <Image src={item.icon} alt="" width={20} height={20} />
                                                    <span className="text-xs">{item.label}</span>
                                                </Link>
                                            )
                                        }
                                    })}
                                </div>
                            ))}
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>

    )
}

export default SheetMenu