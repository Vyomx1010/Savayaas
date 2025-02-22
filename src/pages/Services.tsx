import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, Headphones, Clock, Shield, Star } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  price: string;
  features: string[];
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, price, features, link }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white rounded-lg shadow-lg overflow-hidden"
  >
    <div className="p-6">
      <div className="flex items-center justify-center w-12 h-12 bg-rose-100 rounded-lg mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="text-2xl font-bold text-rose-600 mb-4">{price}</div>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <Star className="h-4 w-4 text-rose-600 mr-2" />
            {feature}
          </li>
        ))}
      </ul>
      <Link
        to={link}
        className="block w-full text-center px-6 py-3 bg-rose-600 text-white font-medium rounded-md hover:bg-rose-700 transition-colors duration-200"
      >
        Book Now
      </Link>
    </div>
  </motion.div>
);

const Services = () => {
  const services = [
    {
      icon: <Heart className="h-6 w-6 text-rose-600" />,
      title: "Counseling Sessions",
      description: "One-on-one sessions with experienced counselors for personalized guidance.",
      price: "$80/session",
      features: [
        "45-minute session",
        "Licensed professionals",
        "Personalized approach",
        "Secure video platform"
      ],
      link: "/counseling-booking"
    },
    {
      icon: <Users className="h-6 w-6 text-rose-600" />,
      title: "Relationship Counseling",
      description: "Expert guidance for couples and relationship challenges.",
      price: "$100/session",
      features: [
        "60-minute session",
        "Couples therapy experts",
        "Conflict resolution",
        "Communication tools"
      ],
      link: "/relationship-counseling"
    },
    {
      icon: <Headphones className="h-6 w-6 text-rose-600" />,
      title: "Listening Sessions",
      description: "Non-judgmental listening and emotional support.",
      price: "$40/session",
      features: [
        "30-minute session",
        "Trained listeners",
        "Safe space",
        "Immediate availability"
      ],
      link: "/listening-session"
    }
  ];

  const features = [
    {
      icon: <Clock className="h-6 w-6 text-rose-600" />,
      title: "Flexible Scheduling",
      description: "Book sessions at your convenience with our 24/7 online booking system."
    },
    {
      icon: <Shield className="h-6 w-6 text-rose-600" />,
      title: "100% Confidential",
      description: "Your privacy is our priority. All sessions are completely confidential."
    },
    {
      icon: <Star className="h-6 w-6 text-rose-600" />,
      title: "Expert Professionals",
      description: "Our team consists of licensed and experienced mental health professionals."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Our Services
          </h1>
          <p className="text-xl text-center text-gray-600 mb-12">
            Professional mental health support tailored to your needs
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
              Why Choose Savayas Heal?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center w-12 h-12 mx-auto bg-rose-100 rounded-lg mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.6}>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Need Help Choosing?
            </h2>
            <p className="text-gray-600 mb-6">
              Not sure which service is right for you? Contact us for a free consultation.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700 transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Services;