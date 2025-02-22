import React from 'react';
import Calendar from '../components/Calendar';
import TimeSlots from '../components/TimeSlots';
import AnimatedSection from '../components/AnimatedSection';
import { motion } from 'framer-motion';
import { Headphones, Heart, MessageCircle } from 'lucide-react';

const listeners = [
  {
    id: 1,
    name: "Maria Garcia",
    specialization: "Empathetic Listener",
    experience: "8 years",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 2,
    name: "David Kim",
    specialization: "Support Specialist",
    experience: "6 years",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];

const features = [
  {
    icon: <Headphones className="h-6 w-6 text-rose-600" />,
    title: "Non-judgmental Listening",
    description: "Share your thoughts in a safe, accepting environment"
  },
  {
    icon: <Heart className="h-6 w-6 text-rose-600" />,
    title: "Emotional Support",
    description: "Receive compassionate understanding and validation"
  },
  {
    icon: <MessageCircle className="h-6 w-6 text-rose-600" />,
    title: "Open Conversation",
    description: "Talk about anything that's on your mind"
  }
];

const ListeningSession = () => {
  const [selectedDate, setSelectedDate] = React.useState<Date>();
  const [selectedTime, setSelectedTime] = React.useState<string | null>(null);
  const [selectedListener, setSelectedListener] = React.useState<number | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <AnimatedSection>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Listening Sessions</h1>
        <p className="text-lg text-gray-600 mb-8">
          Sometimes you just need someone to listen. Our trained listeners are here to provide a supportive ear without judgment.
        </p>
      </AnimatedSection>

      <AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatedSection>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Choose Your Listener</h2>
          <div className="space-y-4">
            {listeners.map((listener) => (
              <motion.div
                key={listener.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`p-4 border rounded-lg cursor-pointer transition-colors duration-200 ${
                  selectedListener === listener.id ? 'border-rose-600 bg-rose-50' : 'border-gray-200 hover:border-rose-300'
                }`}
                onClick={() => setSelectedListener(listener.id)}
              >
                <div className="flex items-center">
                  <img
                    src={listener.image}
                    alt={listener.name}
                    className="h-16 w-16 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{listener.name}</h3>
                    <p className="text-sm text-gray-500">{listener.specialization}</p>
                    <p className="text-sm text-gray-500">{listener.experience} experience</p>
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
            if (!selectedDate || !selectedTime || !selectedListener) {
              alert('Please select a date, time, and listener');
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

export default ListeningSession;