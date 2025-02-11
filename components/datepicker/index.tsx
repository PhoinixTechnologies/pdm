"use client"
import './style.scss'
import React, { useEffect, useRef, useState } from "react";
import dayjs from "dayjs";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useSwipeable } from "react-swipeable";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faEllipsis, faTowerCell } from '@fortawesome/free-solid-svg-icons';

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
        <div className='summary'>
            <div className="date-picker-container" {...swipeHandlers}>
                <div className='cursors-nd-month'>
                    <button className="nav-button" onClick={handlePrev}> <LeftOutlined /> </button>
                    <p> {dates[0].format("MMMM YYYY")} </p>
                    <button className="nav-button" onClick={handleNext}> <RightOutlined /> </button>
                </div>

                <div className="date-list">
                    {dates.map((date, index) => {
                        const isDot2 = index >= 2 && index <= 4;
                        return (
                        <div  key={date.format("DD-MM-YYYY")}  className={`date-item ${date.isSame(selectedDate, "day") ? "selected" : ""}`}  onClick={() => setSelectedDate(date)}>
                            <span className="day"> {date.format("DD")} </span>
                            <span className="weekday"> {date.format("ddd")} </span>
                            {date.isSame(today, "day") && <div className="dot"></div>}
                            {isDot2 && <div className="dot-two"></div>}
                        </div>
                        );
                    })}
                </div>
            </div>

            <div className='reviews'>
                <div className='each-item'>
                    <div>
                    <p> <FontAwesomeIcon icon={faClock} /> 10:00 - 10:30 </p>
                    <button type='button'> <FontAwesomeIcon icon={faEllipsis} /> </button>
                    </div>

                    <h6> Works review </h6>
                    <em> Data ANayltics </em>
                </div>
                
                <div className='each-item live'>
                    <div>
                    <p> <FontAwesomeIcon icon={faClock} /> 11:00 - 12:30 </p>
                    <button type='button'> <FontAwesomeIcon icon={faEllipsis} /> </button>
                    </div>

                    <div>
                    <FontAwesomeIcon icon={faTowerCell} />
                    <div>
                        <h6> Notes and messages </h6>
                        <em> Variables </em>
                    </div>
                    </div>
                </div>

                <div className='each-item'>
                    <div>
                    <p> <FontAwesomeIcon icon={faClock} /> 15:00 - 16:45 </p>
                    <button type='button'> <FontAwesomeIcon icon={faEllipsis} /> </button>
                    </div>

                    <h6> Teamwork </h6>
                    <em> Python Fundamentals </em>
                </div>

                <div className='each-item'>
                    <div>
                    <p> <FontAwesomeIcon icon={faClock} style={{ color: '#CDDC39' }} /> 17:00 - 17:30 </p>
                    <button type='button'> <FontAwesomeIcon icon={faEllipsis} /> </button>
                    </div>

                    <h6> Tutor </h6>
                </div>

            </div>
        </div>
  );
};

export default DatePicker;
