"use client"

import Image from "next/image"
import CountUp from "react-countup"

export const UserCard = ({ type }: { type: String }) => (
  <div className="rounded-xl odd:bg-blue-600 even:bg-yellow-400 odd:text-white even:text-slate-800 p-4 flex-1 min-w-[130px]">
    <div className="flex justify-between items-center">
      <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">
        2024/25
      </span>
      <Image src="/more.png" alt="" width={20} height={20} />
    </div>
    <CountUp start={0} end={Math.floor(Math.random() * (3000 - 1000 + 1)) + 1000}
      duration={3}
      delay={0}
      useEasing={true}
    >
      {({ countUpRef }) => <h1 className="text-2xl font-semibold my-4"><span ref={countUpRef} /></h1>}
    </CountUp>
    <h2 className="capitalize text-sm font-medium ">{type}s</h2>
  </div>
)

export default UserCard