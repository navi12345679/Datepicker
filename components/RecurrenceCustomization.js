// components/RecurrenceCustomization.js
"use client";
import { useDatePickerContext } from '../context/DatePickerContext';

const RecurrenceCustomization = () => {
  const { recurrence, setRecurrence } = useDatePickerContext();

  const handleIntervalChange = (e) => {
    setRecurrence({ ...recurrence, interval: e.target.value });
  };

  const handleDaysOfWeekChange = (day) => {
    const updatedDays = recurrence.daysOfWeek.includes(day)
      ? recurrence.daysOfWeek.filter(d => d !== day)
      : [...recurrence.daysOfWeek, day];
    setRecurrence({ ...recurrence, daysOfWeek: updatedDays });
  };

  const handleNthDayChange = (e) => {
    setRecurrence({ ...recurrence, nthDay: e.target.value });
  };

  return (
    <div className="recurrence-customization">
      <label>Every X {recurrence.pattern}</label>
      <input type="number" value={recurrence.interval} onChange={handleIntervalChange} />

      {recurrence.pattern === 'weekly' && (
        <div className="days-of-week">
          <label>Select Days of the Week:</label>
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <button
              key={day}
              onClick={() => handleDaysOfWeekChange(day)}
              className={recurrence.daysOfWeek.includes(day) ? 'selected' : ''}
            >
              {day}
            </button>
          ))}
        </div>
      )}

      {recurrence.pattern === 'monthly' && (
        <div className="nth-day">
          <label>Select the Nth Day of the Month:</label>
          <input type="number" value={recurrence.nthDay || ''} onChange={handleNthDayChange} />
        </div>
      )}
    </div>
  );
};

export default RecurrenceCustomization;
