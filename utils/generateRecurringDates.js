// utils/generateRecurringDates.js
import { addDays, addWeeks, addMonths, addYears, format, isBefore, isSameDay } from 'date-fns';

export const generateRecurringDates = (recurrence, startDate, endDate) => {
  const { pattern, interval, daysOfWeek, nthDay } = recurrence;
  const recurringDates = [];
  let currentDate = new Date(startDate);

  const addInterval = {
    daily: (date) => addDays(date, interval),
    weekly: (date) => addWeeks(date, interval),
    monthly: (date) => addMonths(date, interval),
    yearly: (date) => addYears(date, interval),
  };

  while (isBefore(currentDate, new Date(endDate)) || isSameDay(currentDate, new Date(endDate))) {
    if (pattern === 'weekly' && daysOfWeek.length > 0) {
      const weekStart = currentDate;
      for (let i = 0; i < 7; i++) {
        const weekDate = addDays(weekStart, i);
        if (daysOfWeek.includes(format(weekDate, 'E'))) {
          recurringDates.push(weekDate);
        }
      }
    } else if (pattern === 'monthly' && nthDay) {
      const nthDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), nthDay);
      recurringDates.push(nthDate);
    } else {
      recurringDates.push(currentDate);
    }

    currentDate = addInterval[pattern](currentDate);
  }

  return recurringDates;
};
