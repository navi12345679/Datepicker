// components/CalendarPreview.js
"use client";
import { useDatePickerContext } from '../context/DatePickerContext';
import { format, startOfMonth, endOfMonth, startOfWeek, addDays, isSameMonth, isSameDay } from 'date-fns';
import { generateRecurringDates } from '../utils/generateRecurringDates';
import { useState, useEffect } from 'react';

const CalendarPreview = () => {
  const { recurrence } = useDatePickerContext();
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [recurringDates, setRecurringDates] = useState([]);

  const { startDate, endDate } = recurrence;

  useEffect(() => {
    if (startDate && endDate) {
      const dates = generateRecurringDates(recurrence, startDate, endDate);
      setRecurringDates(dates);
    }
  }, [recurrence, startDate, endDate]);

  const renderHeader = () => {
    const monthFormat = "MMMM yyyy";
    return (
      <div className="header">
        <div>
          <span>{format(currentMonth, monthFormat)}</span>
        </div>
        <div>
          <button onClick={() => setCurrentMonth(addDays(currentMonth, -30))}>Prev</button>
          <button onClick={() => setCurrentMonth(addDays(currentMonth, 30))}>Next</button>
        </div>
      </div>
    );
  };

  const renderDays = () => {
    const days = [];
    const dateFormat = "E";
    let startDate = startOfWeek(currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col" key={i}>
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }

    return <div className="days-row">{days}</div>;
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = addDays(endOfMonth(monthEnd), 6);

    const rows = [];
    let days = [];
    let day = startDate;
    const dateFormat = "d";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const formattedDate = format(day, dateFormat);
        const cloneDay = day;

        days.push(
          <div
            className={`col cell ${!isSameMonth(day, monthStart)
              ? "disabled"
              : isSameDay(day, new Date()) ? "today" : ""
            } ${recurringDates.some(date => isSameDay(date, cloneDay)) ? "recurring" : ""}`}
            key={day}
          >
            <span>{formattedDate}</span>
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );
      days = [];
    }

    return <div className="body">{rows}</div>;
  };

  return (
    <div className="calendar-preview">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </div>
  );
};

export default CalendarPreview;
