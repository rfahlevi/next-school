"use client";

import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export const EventCalendar = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        defaultValue={new Date()}
        locale="en-US"
      />
    </div>
  );
};

export default EventCalendar;
