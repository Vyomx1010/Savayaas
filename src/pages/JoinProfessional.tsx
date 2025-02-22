import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import { Briefcase, Clock, Heart, Star } from 'lucide-react';

const benefits = [
  {
    icon: <Clock className="h-6 w-6 text-rose-600" />,
    title: "Flexible Hours",
    description: "Set your own schedule and work when it suits you best"
  },
  {
    icon: <Heart className="h-6 w-6 text-rose-600" />,
    title: "Make a Difference",
    description: "Help people improve their mental well-being and relationships"
  },
  {
    icon: <Star className="h-6 w-6 text-rose-600" />,
    title: "Professional Growth",
    description: "Access to continuous learning and development opportunities"
  },
  {
    icon: <Briefcase className="h-6 w-6 text-rose-600" />,
    title: "Professional Platform",
    description: "Join a respected community of mental health professionals"
  }
];

const JoinProfessional = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Join Our Professional Network
          </h1>
          <p className="text-xl text-center text-gray-600 mb-12">
            Make a difference in people's lives while growing your practice
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Application Form</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                />
              </div>

              <div>
                <label htmlFor="specialization" className="block text-sm font-medium text-gray-700">
                  Specialization
                </label>
                <select
                  id="specialization"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                >
                  <option>Counseling</option>
                  <option>Relationship Therapy</option>
                  <option>Family Therapy</option>
                  <option>Listening Services</option>
                </select>
              </div>

              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
                  Years of Experience
                </label>
                <input
                  type="number"
                  id="experience"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                />
              </div>

              <div>
                <label htmlFor="resume" className="block text-sm font-medium text-gray-700">
                  Upload Resume/CV
                </label>
                <input
                  type="file"
                  id="resume"
                  className="mt-1 block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-md file:border-0
                    file:text-sm file:font-medium
                    file:bg-rose-50 file:text-rose-600
                    hover:file:bg-rose-100"
                />
              </div>

              <div>
                <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                  About You
                </label>
                <textarea
                  id="about"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                  placeholder="Tell us about your experience and approach..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
              >
                Submit Application
              </motion.button>
            </form>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default JoinProfessional;