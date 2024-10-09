import CountChart from "@/components/CountChart"
import UserCard from "@/components/UserCard"
import React from "react"

const AdminPage = () => {
    return (
        <div className="flex flex-col md:flex-row p-4 gap-4">
            {/* LEFT SIDE */}
            <div className="w-full lg:w-2/3 flex flex-col gap-8">
                {/* USER CARDS */}
                <div className="flex gap-4 justify-between flex-wrap">
                    <UserCard type="student" />
                    <UserCard type="teacher" />
                    <UserCard type="parent" />
                    <UserCard type="staff" />
                </div>
                {/* MIDDLE CHART */}
                <div className="flex gap-4 flex-col lg:flex-row">
                    <div className="w-full lg:w-1/3 h-[450px]">
                        <CountChart/>
                    </div>
                </div>
                {/* BOTTOM CHART */}
                <div className="w-full lg:w-2/3 h-[450px]">
                    
                </div>
            </div>
            {/* RIGHT SIDE */}
            <div className="w-full h-screen lg:w-1/3 bg-teal-500">

            </div>
        </div>
    )
}

export default AdminPage