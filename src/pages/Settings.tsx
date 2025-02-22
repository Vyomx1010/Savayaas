import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { Bell, Lock, User, Shield, Eye, Moon, Sun, Phone, Mail } from 'lucide-react';

const Settings = () => {
  const [activeTab, setActiveTab] = React.useState('profile');
  const [theme, setTheme] = React.useState('light');
  const [notifications, setNotifications] = React.useState<{ [key: string]: boolean }>({
    email: true,
    sms: true,
    appointments: true,
    updates: false
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Settings</h1>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <AnimatedSection className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <nav className="space-y-1">
                {[
                  { id: 'profile', name: 'Profile Settings', icon: <User /> },
                  { id: 'security', name: 'Security', icon: <Lock /> },
                  { id: 'notifications', name: 'Notifications', icon: <Bell /> },
                  { id: 'privacy', name: 'Privacy', icon: <Shield /> },
                  { id: 'appearance', name: 'Appearance', icon: <Eye /> }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center px-4 py-3 text-sm font-medium ${
                      activeTab === item.id
                        ? 'bg-rose-50 text-rose-600'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <span className="mr-3 h-5 w-5">{item.icon}</span>
                    {item.name}
                  </button>
                ))}
              </nav>
            </div>
          </AnimatedSection>

          {/* Main Content */}
          <AnimatedSection className="md:col-span-3">
            <div className="bg-white rounded-lg shadow-md p-6">
              {activeTab === 'profile' && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-gray-900">Profile Settings</h2>
                  <div className="flex items-center">
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="Profile"
                        className="h-24 w-24 rounded-full object-cover"
                      />
                      <button className="absolute bottom-0 right-0 bg-rose-600 text-white p-1 rounded-full">
                        <User className="h-4 w-4" />
                      </button>
                    </div>
                    <button className="ml-5 bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200">
                      Change Photo
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">First Name</label>
                      <input
                        type="text"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                        defaultValue="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Last Name</label>
                      <input
                        type="text"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                        defaultValue="Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Email</label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                          <Mail className="h-4 w-4" />
                        </span>
                        <input
                          type="email"
                          className="flex-1 block w-full rounded-none rounded-r-md border-gray-300 focus:border-rose-500 focus:ring-rose-500"
                          defaultValue="john.doe@example.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Phone</label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                          <Phone className="h-4 w-4" />
                        </span>
                        <input
                          type="tel"
                          className="flex-1 block w-full rounded-none rounded-r-md border-gray-300 focus:border-rose-500 focus:ring-rose-500"
                          defaultValue="+1 (555) 123-4567"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Bio</label>
                    <textarea
                      rows={4}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                      defaultValue="Tell us about yourself..."
                    />
                  </div>
                </div>
              )}

              {activeTab === 'security' && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-gray-900">Security Settings</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Current Password</label>
                      <input
                        type="password"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">New Password</label>
                      <input
                        type="password"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Confirm New Password</label>
                      <input
                        type="password"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                      />
                    </div>
                  </div>
                  <div className="space-y-4 mt-6">
                    <h3 className="text-lg font-medium text-gray-900">Two-Factor Authentication</h3>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                      </div>
                      <button className="bg-rose-600 text-white px-4 py-2 rounded-md hover:bg-rose-700">
                        Enable 2FA
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'notifications' && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-gray-900">Notification Preferences</h2>
                  <div className="space-y-4">
                    {Object.entries(notifications).map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-900 capitalize">{key} Notifications</p>
                          <p className="text-sm text-gray-500">Receive notifications about {key}</p>
                        </div>
                        <button
                          onClick={() => setNotifications(prev => ({ ...prev, [key]: !prev[key as keyof typeof notifications] }))}
                          className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                            value ? 'bg-rose-600' : 'bg-gray-200'
                          }`}
                        >
                          <span
                            className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                              value ? 'translate-x-5' : 'translate-x-0'
                            }`}
                          />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'privacy' && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-gray-900">Privacy Settings</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">Profile Visibility</h3>
                      <div className="mt-2 space-y-4">
                        <div className="flex items-center">
                          <input
                            type="radio"
                            name="privacy"
                            id="public"
                            className="h-4 w-4 text-rose-600 focus:ring-rose-500 border-gray-300"
                          />
                          <label htmlFor="public" className="ml-3">
                            <span className="block text-sm font-medium text-gray-900">Public</span>
                            <span className="block text-sm text-gray-500">Anyone can see your profile</span>
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="radio"
                            name="privacy"
                            id="private"
                            className="h-4 w-4 text-rose-600 focus:ring-rose-500 border-gray-300"
                          />
                          <label htmlFor="private" className="ml-3">
                            <span className="block text-sm font-medium text-gray-900">Private</span>
                            <span className="block text-sm text-gray-500">Only approved connections can see your profile</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'appearance' && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-gray-900">Appearance Settings</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">Theme</h3>
                      <div className="mt-2 space-x-4">
                        <button
                          onClick={() => setTheme('light')}
                          className={`inline-flex items-center px-4 py-2 rounded-md ${
                            theme === 'light'
                              ? 'bg-rose-600 text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          <Sun className="h-5 w-5 mr-2" />
                          Light
                        </button>
                        <button
                          onClick={() => setTheme('dark')}
                          className={`inline-flex items-center px-4 py-2 rounded-md ${
                            theme === 'dark'
                              ? 'bg-rose-600 text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          <Moon className="h-5 w-5 mr-2" />
                          Dark
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-6 flex justify-end space-x-4">
                <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                  Cancel
                </button>
                <button className="px-4 py-2 bg-rose-600 text-white rounded-md hover:bg-rose-700">
                  Save Changes
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default Settings;