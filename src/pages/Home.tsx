import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, Headphones, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';

const motivationalQuotes = [
  "Peace comes from within. Don't seek it without.",
  "Your mental health is a priority. Your happiness is essential.",
  "Healing is not linear, but progress is always possible.",
  "Every step forward is a step toward better mental health.",
  "You are stronger than you know, braver than you believe.",
];

const testimonials = [
  {
    name: "Sarah M.",
    role: "Client",
    content: "Savayas Heal has been transformative for my mental well-being. The professionals here are truly exceptional.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    name: "James R.",
    role: "Client",
    content: "The relationship counseling services helped save my marriage. Forever grateful for the guidance received.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    name: "Emily L.",
    role: "Client",
    content: "The listening sessions provided me with the support I needed during difficult times. Highly recommended!",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];

const Home = () => {
  const [quoteIndex, setQuoteIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % motivationalQuotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="sm:text-center lg:text-left"
              >
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Welcome to</span>
                  <span className="block text-rose-600">Savayas Heal</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Your journey to mental wellness begins here. Professional counseling and support, whenever you need it.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      to="/services"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700 md:py-4 md:text-lg md:px-10"
                    >
                      Get Started
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link
                      to="/about"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-rose-600 bg-rose-100 hover:bg-rose-200 md:py-4 md:text-lg md:px-10"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </motion.div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt="Mental wellness"
          />
        </div>
      </div>

      {/* Motivational Quote Strip */}
      <div className="bg-rose-600 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p
            key={quoteIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center text-lg font-medium italic"
          >
            {motivationalQuotes[quoteIndex]}
          </motion.p>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Services</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Link
              to="/counseling-booking"
              className="relative group"
            >
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <Heart className="h-12 w-12 text-rose-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Counseling Sessions</h3>
                  <p className="text-gray-600">
                    Book a one-on-one session with our experienced counselors for personalized guidance and support.
                  </p>
                </div>
              </motion.div>
            </Link>

            <Link
              to="/relationship-counseling"
              className="relative group"
            >
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <Users className="h-12 w-12 text-rose-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Relationship Counseling</h3>
                  <p className="text-gray-600">
                    Work through relationship challenges with expert guidance and practical solutions.
                  </p>
                </div>
              </motion.div>
            </Link>

            <Link
              to="/listening-session"
              className="relative group"
            >
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <Headphones className="h-12 w-12 text-rose-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Listening Sessions</h3>
                  <p className="text-gray-600">
                    Sometimes you just need someone to listen. Connect with our empathetic listeners.
                  </p>
                </div>
              </motion.div>
            </Link>
          </div>
        </AnimatedSection>
      </div>

      {/* Testimonials Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Our Clients Say</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-gray-50 p-6 rounded-lg shadow-md"
                >
                  <div className="flex items-center mb-4">
                    <img
                      className="h-12 w-12 rounded-full"
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">{testimonial.content}</p>
                  <div className="mt-4 flex text-rose-600">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Team</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* Abhinav */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  className="w-full h-64 object-cover"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=400&h=400&q=80"
                  alt="Abhinav"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">Abhinav</h3>
                  <p className="mt-2 text-gray-600">
                    Abhinav's passion for innovation and growth is the foundation of our platform, creating a space where change happens.
                  </p>
                </div>
              </motion.div>

              {/* Supriya */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  className="w-full h-64 object-cover"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=400&h=400&q=80"
                  alt="Supriya"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">Supriya</h3>
                  <p className="mt-2 text-gray-600">
                    Supriya's calming presence and practical wisdom help people navigate life's challenges with confidence and clarity.
                  </p>
                </div>
              </motion.div>

              {/* Anu */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  className="w-full h-64 object-cover"
                  src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=400&h=400&q=80"
                  alt="Anu"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">Anu</h3>
                  <p className="mt-2 text-gray-600">
                    Anu brings heart and understanding to every conversation, ensuring that every voice is heard and valued.
                  </p>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-rose-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to start your journey?</span>
            <span className="block text-rose-200">Join us today and transform your life.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-rose-600 bg-white hover:bg-rose-50"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;