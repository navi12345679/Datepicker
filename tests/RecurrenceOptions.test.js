// __tests__/RecurrenceOptions.test.js
import { render, screen } from '@testing-library/react';
import RecurrenceOptions from '../components/RecurrenceOptions';
import { DatePickerProvider } from '../context/DatePickerContext';

test('renders recurrence options', () => {
  render(
    <DatePickerProvider>
      <RecurrenceOptions />
    </DatePickerProvider>
  );
  expect(screen.getByLabelText(/Recurrence Pattern/i)).toBeInTheDocument();
});
