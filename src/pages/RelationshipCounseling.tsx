import React from 'react';
import Calendar from '../components/Calendar';
import TimeSlots from '../components/TimeSlots';
import AnimatedSection from '../components/AnimatedSection';
import { motion } from 'framer-motion';

const experts = [
  {
    id: 1,
    name: "Dr. Emily Roberts",
    specialization: "Marriage Counseling",
    experience: "18 years",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 2,
    name: "Dr. James Wilson",
    specialization: "Family Therapy",
    experience: "15 years",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];

const RelationshipCounseling = () => {
  const [selectedDate, setSelectedDate] = React.useState<Date>();
  const [selectedTime, setSelectedTime] = React.useState<string | null>(null);
  const [selectedExpert, setSelectedExpert] = React.useState<number | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <AnimatedSection>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Relationship Counseling</h1>
        <p className="text-lg text-gray-600 mb-8">
          Work through relationship challenges with our experienced counselors who specialize in couples and family therapy.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatedSection>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Choose Your Expert</h2>
          <div className="space-y-4">
            {experts.map((expert) => (
              <motion.div
                key={expert.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`p-4 border rounded-lg cursor-pointer transition-colors duration-200 ${
                  selectedExpert === expert.id ? 'border-rose-600 bg-rose-50' : 'border-gray-200 hover:border-rose-300'
                }`}
                onClick={() => setSelectedExpert(expert.id)}
              >
                <div className="flex items-center">
                  <img
                    src={expert.image}
                    alt={expert.name}
                    className="h-16 w-16 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{expert.name}</h3>
                    <p className="text-sm text-gray-500">{expert.specialization}</p>
                    <p className="text-sm text-gray-500">{expert.experience} experience</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        <div>
          <AnimatedSection>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Schedule Your Session</h2>
            <Calendar selectedDate={selectedDate} onSelect={setSelectedDate} />
            <TimeSlots
              date={selectedDate}
              onSelectTime={setSelectedTime}
              selectedTime={selectedTime}
            />
          </AnimatedSection>
        </div>
      </div>

      <AnimatedSection className="mt-8 flex justify-end">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-rose-600 text-white font-medium rounded-md hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 transition-colors duration-200"
          onClick={() => {
            if (!selectedDate || !selectedTime || !selectedExpert) {
              alert('Please select a date, time, and expert');
              return;
            }
            alert('Booking confirmed!');
          }}
        >
          Book Session
        </motion.button>
      </AnimatedSection>
    </div>
  );
};

export default RelationshipCounseling;