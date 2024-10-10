"use client";

import Image from "next/image";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export const eventsData = [
  {
    id: 1,
    title: "Lake Trip",
    class: "1A",
    date: "2025-01-01",
    startTime: "10:00",
    endTime: "11:00",
  },
  {
    id: 2,
    title: "Picnic",
    class: "2A",
    date: "2025-01-01",
    startTime: "10:00",
    endTime: "11:00",
  },
  {
    id: 3,
    title: "Beach Trip",
    class: "3A",
    date: "2025-01-01",
    startTime: "10:00",
    endTime: "11:00",
  },
  {
    id: 4,
    title: "Museum Trip",
    class: "4A",
    date: "2025-01-01",
    startTime: "10:00",
    endTime: "11:00",
  },
  {
    id: 5,
    title: "Music Concert",
    class: "5A",
    date: "2025-01-01",
    startTime: "10:00",
    endTime: "11:00",
  },
  {
    id: 6,
    title: "Magician Show",
    class: "1B",
    date: "2025-01-01",
    startTime: "10:00",
    endTime: "11:00",
  },
  {
    id: 7,
    title: "Lake Trip",
    class: "2B",
    date: "2025-01-01",
    startTime: "10:00",
    endTime: "11:00",
  },
  {
    id: 8,
    title: "Cycling Race",
    class: "3B",
    date: "2025-01-01",
    startTime: "10:00",
    endTime: "11:00",
  },
  {
    id: 9,
    title: "Art Exhibition",
    class: "4B",
    date: "2025-01-01",
    startTime: "10:00",
    endTime: "11:00",
  },
  {
    id: 10,
    title: "Sports Tournament",
    class: "5B",
    date: "2025-01-01",
    startTime: "10:00",
    endTime: "11:00",
  },
];

export const EventCalendar = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div className="flex flex-col gap-4">
      <Calendar
        onChange={onChange}
        value={value}
        defaultValue={new Date()}
        locale="en-US"
      />
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-lg">Events</h1>
          <Image src="/moreDark.png" alt="" width={14} height={14} />
        </div>
        {eventsData.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-md p-2 border-gray-100 border border-t-4 even:border-t-blue-600 odd:border-t-yellow-400"
          >
            <span className="text-xs font-semibold text-gray-600">
              {event.date} . {event.startTime} - {event.endTime}
            </span>
            <div className="flex items-start justify-between">
              <h1 className="font-bold text-sm">{event.title}</h1>
              <div className="flex flex-col items-center justify-end">
                <span className="text-xs text-gray-500">{event.class}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
