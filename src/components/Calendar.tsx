import React from 'react';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import 'react-day-picker/dist/style.css';
import { motion } from 'framer-motion';

interface CalendarProps {
  selectedDate: Date | undefined;
  onSelect: (date: Date | undefined) => void;
}

const Calendar: React.FC<CalendarProps> = ({ selectedDate, onSelect }) => {
  // Disable past dates
  const disabledDays = { before: new Date() };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-4 bg-white rounded-lg shadow"
    >
      <DayPicker
        mode="single"
        selected={selectedDate}
        onSelect={onSelect}
        disabled={disabledDays}
        className="border-0"
        styles={{
          caption: { color: 'rgb(225, 29, 72)' },
          head_cell: { color: 'rgb(225, 29, 72)' },
        }}
        modifiersStyles={{
          selected: {
            backgroundColor: 'rgb(225, 29, 72)',
          },
          today: {
            color: 'rgb(225, 29, 72)',
            fontWeight: 'bold',
          },
        }}
      />
      {selectedDate && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 text-center text-gray-700"
        >
          You selected {format(selectedDate, 'PPP')}
        </motion.p>
      )}
    </motion.div>
  );
};

export default Calendar;