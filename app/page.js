// pages/index.js
"use client";
import DatePicker from '../components/DatePicker';
import { DatePickerProvider } from '../context/DatePickerContext';

export default function Home() {
  return (
    <DatePickerProvider>
      <div className="home">
        <DatePicker />
      </div>
    </DatePickerProvider>
  );
}
