"use client"
import { menuItems, role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Menu = () => {

  const [activeMenu, setActiveMenu] = useState(null)

  const handleMenuClick = (index: any) => {
    setActiveMenu(index)
  }
  
  
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((menu) => (
        <div className="flex flex-col gap-2" key={menu.title}>
          <span className="hidden lg:block text-gray-400 font-light my-4">{menu.title}</span>
          {menu.items.map((item, index) => {
            if (item.visible.includes(role)) {
              return (
                <Link href={item.href} onClick={() => handleMenuClick(index)} className={`flex gap-x-2   hover:ease-in p-2 rounded-md font-medium  hover:font-bold hover:transition-all hover:duration-200 items-center justify-center lg:justify-start py-1  ${item.label === 'Logout' ? 'text-red-500 hover:bg-red-100' : 'text-gray-500 hover:bg-blue-100 hover:text-blue-700'}`} key={item.label}>
                  <Image src={item.icon} alt="" width={20} height={20} />
                  <span className="hidden lg:block text-xs ">{item.label}</span>
                </Link>
              )
            }
          })}
        </div>
      ))}
    </div>
  )
}

export default Menu