import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import { Calendar, Clock, FileText, MessageSquare, Settings, User } from 'lucide-react';

interface Session {
  id: number;
  type: string;
  date: string;
  time: string;
  professional: string;
  status: 'upcoming' | 'completed' | 'cancelled';
}

const Dashboard = () => {
  const [activeTab, setActiveTab] = React.useState('upcoming');
  
  const sessions: Session[] = [
    {
      id: 1,
      type: 'Counseling Session',
      date: '2024-03-20',
      time: '10:00 AM',
      professional: 'Dr. Sarah Johnson',
      status: 'upcoming'
    },
    {
      id: 2,
      type: 'Listening Session',
      date: '2024-03-18',
      time: '2:00 PM',
      professional: 'Maria Garcia',
      status: 'completed'
    }
  ];

  const stats = [
    { icon: <Calendar className="h-6 w-6" />, label: 'Total Sessions', value: '8' },
    { icon: <Clock className="h-6 w-6" />, label: 'Hours Spent', value: '12' },
    { icon: <MessageSquare className="h-6 w-6" />, label: 'Feedback Given', value: '6' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center px-4 py-2 bg-rose-600 text-white rounded-md hover:bg-rose-700"
            >
              <Settings className="h-5 w-5 mr-2" />
              Settings
            </motion.button>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex items-center justify-between">
                  <div className="text-rose-600">{stat.icon}</div>
                  <span className="text-2xl font-bold text-gray-900">{stat.value}</span>
                </div>
                <p className="mt-2 text-sm text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="border-b border-gray-200">
              <nav className="flex -mb-px">
                {['upcoming', 'completed', 'cancelled'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`${
                      activeTab === tab
                        ? 'border-rose-500 text-rose-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    } whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm capitalize`}
                  >
                    {tab} Sessions
                  </button>
                ))}
              </nav>
            </div>

            <div className="p-6">
              {sessions
                .filter((session) => session.status === activeTab)
                .map((session) => (
                  <motion.div
                    key={session.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="mb-4 p-4 border rounded-lg hover:border-rose-300 transition-colors duration-200"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">{session.type}</h3>
                        <p className="text-sm text-gray-500">with {session.professional}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-gray-900">{session.date}</p>
                        <p className="text-sm text-gray-500">{session.time}</p>
                      </div>
                    </div>
                    {session.status === 'upcoming' && (
                      <div className="mt-4 flex justify-end space-x-4">
                        <button className="text-sm text-gray-600 hover:text-gray-900">
                          Reschedule
                        </button>
                        <button className="text-sm text-rose-600 hover:text-rose-700">
                          Cancel
                        </button>
                      </div>
                    )}
                  </motion.div>
                ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.6}>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Profile</h2>
              <div className="flex items-center mb-6">
                <div className="h-20 w-20 rounded-full bg-gray-200 flex items-center justify-center">
                  <User className="h-12 w-12 text-gray-400" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">John Doe</h3>
                  <p className="text-sm text-gray-500">john.doe@example.com</p>
                </div>
              </div>
              <button className="text-rose-600 hover:text-rose-700 text-sm font-medium">
                Edit Profile
              </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Documents</h2>
              <div className="space-y-4">
                {['Session Notes', 'Feedback Forms', 'Progress Reports'].map((doc, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-900">{doc}</span>
                    </div>
                    <button className="text-rose-600 hover:text-rose-700 text-sm">View</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Dashboard;