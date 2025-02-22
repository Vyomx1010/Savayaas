import React from 'react';
import { format } from 'date-fns';
import clsx from 'clsx';
import { motion } from 'framer-motion';

interface TimeSlotsProps {
  date: Date | undefined;
  onSelectTime: (time: string) => void;
  selectedTime: string | null;
}

const TimeSlots: React.FC<TimeSlotsProps> = ({ date, onSelectTime, selectedTime }) => {
  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00',
    '14:00', '15:00', '16:00', '17:00'
  ];

  if (!date) return null;

  // Check if the selected date is today
  const isToday = date.toDateString() === new Date().toDateString();

  // Get current hour for today's date
  const currentHour = new Date().getHours();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-6"
    >
      <h3 className="text-lg font-medium text-gray-900 mb-4">
        Available time slots for {format(date, 'MMMM d, yyyy')}
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {timeSlots.map((time) => {
          const hour = parseInt(time.split(':')[0], 10);
          const isDisabled = isToday && hour <= currentHour;

          return (
            <motion.button
              key={time}
              whileHover={!isDisabled ? { scale: 1.05 } : {}}
              whileTap={!isDisabled ? { scale: 0.95 } : {}}
              onClick={() => !isDisabled && onSelectTime(time)}
              disabled={isDisabled}
              className={clsx(
                'px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200',
                isDisabled
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : selectedTime === time
                  ? 'bg-rose-600 text-white'
                  : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
              )}
            >
              {time}
            </motion.button>
          );
        })}
      </div>
      {isToday && (
        <p className="mt-4 text-sm text-gray-500">
          Note: Time slots before current time are not available for today
        </p>
      )}
    </motion.div>
  );
};

export default TimeSlots;