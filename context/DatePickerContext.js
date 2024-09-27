// context/DatePickerContext.js
"use client"; 
import React, { createContext, useState, useContext } from 'react';

const DatePickerContext = createContext();

export const DatePickerProvider = ({ children }) => {
  const [recurrence, setRecurrence] = useState({
    pattern: 'daily',
    interval: 1,
    daysOfWeek: [],
    nthDay: null,
    startDate: null,
    endDate: null,
  });

  return (
    <DatePickerContext.Provider value={{ recurrence, setRecurrence }}>
      {children}
    </DatePickerContext.Provider>
  );
};

export const useDatePickerContext = () => useContext(DatePickerContext);
