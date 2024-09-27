// components/DateRangePicker.js
"use client";
import { useDatePickerContext } from '../context/DatePickerContext';

const DateRangePicker = () => {
  const { recurrence, setRecurrence } = useDatePickerContext();

  const handleStartDateChange = (e) => {
    setRecurrence({ ...recurrence, startDate: e.target.value });
  };

  const handleEndDateChange = (e) => {
    setRecurrence({ ...recurrence, endDate: e.target.value });
  };

  return (
    <div className="date-range-picker">
      <label>Start Date:</label>
      <input type="date" value={recurrence.startDate || ''} onChange={handleStartDateChange} />

      <label>End Date:</label>
      <input type="date" value={recurrence.endDate || ''} onChange={handleEndDateChange} />
    </div>
  );
};

export default DateRangePicker;
