// components/DatePicker.js
"use client";
import RecurrenceOptions from './RecurrenceOptions';
import RecurrenceCustomization from './RecurrenceCustomization';
import DateRangePicker from './DateRangePicker';
import CalendarPreview from './CalendarPreview';

const DatePicker = () => {
  return (
    <div className='view'>
    <div className="date-picker">
      <h2>Date Picker with Recurrence</h2>
      <RecurrenceOptions />
      <RecurrenceCustomization />
      <DateRangePicker />
      
    </div>
    <div className='calendar-preview1'>
    <CalendarPreview />
    </div>
    </div>
  );
};

export default DatePicker;
