import React from 'react';
import Calendar from '../components/Calendar';
import TimeSlots from '../components/TimeSlots';
import LoadingSpinner from '../components/LoadingSpinner';
import Toast from '../components/Toast';

const counselors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialization: "Clinical Psychology",
    experience: "15 years",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialization: "Cognitive Behavioral Therapy",
    experience: "12 years",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
];

const CounselingBooking = () => {
  const [selectedDate, setSelectedDate] = React.useState<Date>();
  const [selectedTime, setSelectedTime] = React.useState<string | null>(null);
  const [selectedCounselor, setSelectedCounselor] = React.useState<number | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [toast, setToast] = React.useState<{ type: 'success' | 'error' | 'info', message: string } | null>(null);

  React.useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleBooking = () => {
    if (!selectedDate || !selectedTime || !selectedCounselor) {
      setToast({ type: 'error', message: 'Please select a date, time, and counselor' });
      return;
    }
    setLoading(true);
    // Simulate booking process
    setTimeout(() => {
      setLoading(false);
      setToast({ type: 'success', message: 'Booking confirmed successfully!' });
    }, 1500);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Book a Counseling Session</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Select a Counselor</h2>
          <div className="space-y-4">
            {counselors.map((counselor) => (
              <div
                key={counselor.id}
                className={`p-4 border rounded-lg cursor-pointer ${
                  selectedCounselor === counselor.id ? 'border-rose-600' : 'border-gray-200'
                }`}
                onClick={() => setSelectedCounselor(counselor.id)}
              >
                <div className="flex items-center">
                  <img
                    src={counselor.image}
                    alt={counselor.name}
                    className="h-12 w-12 rounded-full"
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{counselor.name}</h3>
                    <p className="text-sm text-gray-500">{counselor.specialization}</p>
                    <p className="text-sm text-gray-500">{counselor.experience} experience</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Select Date & Time</h2>
          <Calendar selectedDate={selectedDate} onSelect={setSelectedDate} />
          <TimeSlots
            date={selectedDate}
            onSelectTime={setSelectedTime}
            selectedTime={selectedTime}
          />
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <button
          onClick={handleBooking}
          className="px-6 py-3 bg-rose-600 text-white font-medium rounded-md hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
        >
          Confirm Booking
        </button>
      </div>

      {toast && (
        <Toast
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
};

export default CounselingBooking;