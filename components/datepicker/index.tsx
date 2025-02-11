"use client"
import './style.css'
import React, { useState } from "react";
import dayjs from "dayjs";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useSwipeable } from "react-swipeable";

const DatePicker = () => {
  const today = dayjs();
  const [selectedDate, setSelectedDate] = useState(today);

  // Generate 7 days from current date
  const generateDates = (startDate: any) => {
    return Array.from({ length: 7 }, (_, i) => startDate.add(i, "day"));
  };

  const [dates, setDates] = useState(generateDates(today));

  // Function to move left
  const handlePrev = () => {
    const newStartDate = dates[0].subtract(1, "day");
    setDates(generateDates(newStartDate));
  };

  // Function to move right
  const handleNext = () => {
    const newStartDate = dates[1];
    setDates(generateDates(newStartDate));
  };

  // Handle swipe gestures
  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
  });

  return (
    <div className="date-picker-container" {...swipeHandlers}>
      <button className="nav-button" onClick={handlePrev}>
        <LeftOutlined />
      </button>
      <div className="date-list">
        {dates.map((date) => (
          <div
            key={date.format("DD-MM-YYYY")}
            className={`date-item ${
              date.isSame(selectedDate, "day") ? "selected" : ""
            }`}
            onClick={() => setSelectedDate(date)}
          >
            <span className="day">{date.format("DD")}</span>
            <span className="weekday">{date.format("ddd")}</span>
            {date.isSame(today, "day") && <div className="dot"></div>}
          </div>
        ))}
      </div>
      <button className="nav-button" onClick={handleNext}>
        <RightOutlined />
      </button>
    </div>
  );
};

export default DatePicker;
