import AttendanceChart from "@/components/AttendanceChart"
import CountChart from "@/components/CountChart"
import FinanceChart from "@/components/FinanceChart"
import UserCard from "@/components/UserCard"
import EventCalendar from "@/components/EventCalendar"
import React from "react"
import Announcements from "@/components/Announcements"

const AdminPage = () => {
    return (
        <div className="flex flex-col md:flex-row p-4 gap-4">
            {/* LEFT SIDE */}
            <div className="w-full lg:w-2/3 flex flex-col gap-4">
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
                    <div className="w-full lg:w-2/3 h-[450px]">
                        <AttendanceChart />
                    </div>
                </div>
                {/* BOTTOM CHART */}
                <div className="w-full h-[500px]">
                    <FinanceChart />
                </div>
            </div>
            {/* RIGHT SIDE */}
            <div className="w-full lg:w-1/3 flex flex-col gap-4">
                {/* EVENT CALENDAR */}
                <div className="bg-white rounded-xl p-4">
                    <EventCalendar />
                </div>
                {/* ANNOUNCEMENTS */}
                <div className="bg-white rounded-xl p-4">
                    <Announcements/>
                </div>
            </div>
        </div>
    )
}

export default AdminPage