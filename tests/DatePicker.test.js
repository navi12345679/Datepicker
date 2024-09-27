// __tests__/DatePicker.test.js
import { render, screen } from '@testing-library/react';
import DatePicker from '../components/DatePicker';
import { DatePickerProvider } from '../context/DatePickerContext';

test('renders full date picker', () => {
  render(
    <DatePickerProvider>
      <DatePicker />
    </DatePickerProvider>
  );
  expect(screen.getByText(/Recurring Dates Preview/i)).toBeInTheDocument();
});
