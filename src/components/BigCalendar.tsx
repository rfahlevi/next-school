"use client"

import { Calendar, momentLocalizer, View, Views } from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css"
import { calendarEvents } from '@/lib/data'
import { useState } from 'react'

const localizer = momentLocalizer(moment)

const BigCalendar = () => {
    const [view, setView] = useState<View>(Views.WORK_WEEK)

    const handleChangeView = (selectedView: View) => {
        setView(selectedView)
    }

   
    return (
        <Calendar
            localizer={localizer}
            events={calendarEvents.map(event => ({ 
                title: event.title, 
                start: moment(event.start).toDate(), 
                end: moment(event.end).toDate()
             }))}
            startAccessor="start"
            endAccessor="end"
            style={{ height: "98%" }}
            views={["work_week", "day"]}
            view={view}
            onView={handleChangeView}
            min={new Date(2025, 1, 1, 8, 0, 0)}
            max={new Date(2025, 1, 1, 18, 0, 0)}
        />
    )
}

export default BigCalendar