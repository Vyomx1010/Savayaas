import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import { Calendar, Clock, FileText, MessageSquare, Settings, Users, DollarSign } from 'lucide-react';
import LoadingSpinner from '../components/LoadingSpinner';
import Toast from '../components/Toast';

interface Client {
  id: number;
  name: string;
  email: string;
  sessionType: string;
  nextSession: string;
  totalSessions: number;
}

const ProfessionalDashboard = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(true);
  const [toast, setToast] = React.useState<{ type: 'success' | 'error' | 'info', message: string } | null>(null);

  React.useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleSettingsClick = () => {
    navigate('/settings');
  };

  const clients: Client[] = [
    {
      id: 1,
      name: 'Alice Johnson',
      email: 'alice@example.com',
      sessionType: 'Counseling',
      nextSession: '2024-03-20 10:00 AM',
      totalSessions: 5
    },
    {
      id: 2,
      name: 'Bob Smith',
      email: 'bob@example.com',
      sessionType: 'Relationship',
      nextSession: '2024-03-21 2:00 PM',
      totalSessions: 3
    }
  ];

  const stats = [
    { icon: <Users className="h-6 w-6" />, label: 'Total Clients', value: '24' },
    { icon: <Calendar className="h-6 w-6" />, label: 'Sessions This Week', value: '12' },
    { icon: <Clock className="h-6 w-6" />, label: 'Hours Completed', value: '156' },
    { icon: <DollarSign className="h-6 w-6" />, label: 'Earnings', value: '$2,450' }
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Professional Dashboard</h1>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSettingsClick}
              className="flex items-center px-4 py-2 bg-rose-600 text-white rounded-md hover:bg-rose-700"
            >
              <Settings className="h-5 w-5 mr-2" />
              Settings
            </motion.button>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Schedule */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Today's Schedule</h2>
                  <div className="space-y-4">
                    {[
                      { time: '10:00 AM', client: 'Alice Johnson', type: 'Counseling Session' },
                      { time: '2:00 PM', client: 'Bob Smith', type: 'Relationship Counseling' },
                      { time: '4:00 PM', client: 'Carol White', type: 'Listening Session' }
                    ].map((session, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        className="p-4 border rounded-lg"
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-medium text-gray-900">{session.time}</p>
                            <p className="text-sm text-gray-500">{session.client}</p>
                          </div>
                          <div>
                            <span className="px-3 py-1 bg-rose-100 text-rose-800 rounded-full text-sm">
                              {session.type}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
                <div className="space-y-4">
                  {[
                    { label: 'View Calendar', icon: <Calendar className="h-5 w-5" /> },
                    { label: 'Client Reports', icon: <FileText className="h-5 w-5" /> },
                    { label: 'Send Messages', icon: <MessageSquare className="h-5 w-5" /> }
                  ].map((action, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center justify-between p-4 border rounded-lg hover:border-rose-300"
                    >
                      <span className="text-gray-700">{action.label}</span>
                      <span className="text-rose-600">{action.icon}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.6}>
          <div className="mt-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Client List</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Client
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Session Type
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Next Session
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Total Sessions
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {clients.map((client) => (
                        <tr key={client.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div>
                                <div className="text-sm font-medium text-gray-900">{client.name}</div>
                                <div className="text-sm text-gray-500">{client.email}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-rose-100 text-rose-800">
                              {client.sessionType}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {client.nextSession}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {client.totalSessions}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button className="text-rose-600 hover:text-rose-900">View Details</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {toast && (
          <Toast
            type={toast.type}
            message={toast.message}
            onClose={() => setToast(null)}
          />
        )}
      </div>
    </div>
  );
};

export default ProfessionalDashboard;