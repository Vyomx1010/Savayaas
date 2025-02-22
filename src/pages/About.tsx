import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import { Heart, Users, Shield, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Heart className="h-6 w-6 text-rose-600" />,
      title: "Compassion",
      description: "We approach every individual with understanding and empathy."
    },
    {
      icon: <Users className="h-6 w-6 text-rose-600" />,
      title: "Community",
      description: "Building a supportive environment for healing and growth."
    },
    {
      icon: <Shield className="h-6 w-6 text-rose-600" />,
      title: "Trust",
      description: "Maintaining confidentiality and professional integrity."
    },
    {
      icon: <Award className="h-6 w-6 text-rose-600" />,
      title: "Excellence",
      description: "Committed to providing the highest quality of care."
    }
  ];

  const team = [
    {
      name: "Abhinav",
      role: "Founder",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      description: "Abhinav's passion for innovation and growth is the foundation of our platform, creating a space where change happens."
    },
    {
      name: "Supriya",
      role: "Lead Counselor",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      description: "Supriya's calming presence and practical wisdom help people navigate life's challenges with confidence and clarity."
    },
    {
      name: "Anu",
      role: "Relationship Expert",
      image: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      description: "Anu brings heart and understanding to every conversation, ensuring that every voice is heard and valued."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
            About Savayas Heal
          </h1>
          <p className="text-xl text-center text-gray-600 mb-12">
            Dedicated to making mental wellness accessible and stigma-free
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Savayas Heal was founded with a simple yet powerful vision: to make mental health support accessible to everyone. We believe that everyone deserves access to quality mental health care and support, delivered in a way that's convenient, confidential, and compassionate.
            </p>
            <p className="text-gray-600">
              Our platform brings together experienced professionals and individuals seeking support, creating a space where healing and growth can happen naturally and effectively.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {values.map((value, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <div className="flex items-center justify-center w-12 h-12 mx-auto bg-rose-100 rounded-lg mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.6}>
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {team.map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-rose-600 mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default About;