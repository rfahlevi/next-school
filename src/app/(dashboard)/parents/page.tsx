import Announcements from "@/components/Announcements"
import BigCalendar from "@/components/BigCalendar"
import React from "react"

const ParentPage = () => {
    return (
        <div className="flex flex-col min-h-screen md:flex-row p-4 gap-4">
            {/* LEFT SIDE */}
            <div className="w-full lg:w-2/3 gap-4 bg-white rounded-lg p-4">
                <span className="font-bold">Schedule (John Doe)</span>
                <BigCalendar />
            </div>
            {/* RIGHT SIDE */}
            <div className="w-full lg:w-1/3 gap-4">
                <div className="bg-white rounded-xl p-4">
                    <Announcements />
                </div>
            </div>
        </div>
    )
}

export default ParentPage