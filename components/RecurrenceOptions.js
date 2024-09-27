// components/RecurrenceOptions.js
"use client";
import { useDatePickerContext } from '../context/DatePickerContext';

const RecurrenceOptions = () => {
  const { recurrence, setRecurrence } = useDatePickerContext();

  const handlePatternChange = (e) => {
    setRecurrence({ ...recurrence, pattern: e.target.value });
  };

  return (
    <div className="recurrence-options">
      <label>Recurrence Pattern</label>
      <select value={recurrence.pattern} onChange={handlePatternChange}>
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>
    </div>
  );
};

export default RecurrenceOptions;
