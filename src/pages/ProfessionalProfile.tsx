import React from 'react';
import { motion } from 'framer-motion';
import { Star, Calendar, Clock, Award, MessageSquare } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import ReviewForm from '../components/ReviewForm';
import ReviewList from '../components/ReviewList';
import Modal from '../components/Modal';
import Toast from '../components/Toast';

interface Review {
  id: number;
  rating: number;
  comment: string;
  userName: string;
  date: string;
  helpful: number;
  isAnonymous?: boolean;
}

const ProfessionalProfile = () => {
  const [showReviewForm, setShowReviewForm] = React.useState(false);
  const [toast, setToast] = React.useState<{ type: 'success' | 'error' | 'info', message: string } | null>(null);
  const [reviews, setReviews] = React.useState<Review[]>([
    {
      id: 1,
      rating: 5,
      comment: "Dr. Johnson is an exceptional counselor. Her approach is both professional and compassionate. I've seen significant improvement in my mental well-being since starting sessions with her.",
      userName: "Michael R.",
      date: "2024-03-15",
      helpful: 12
    },
    {
      id: 2,
      rating: 4,
      comment: "Very knowledgeable and understanding. Creates a safe space for discussion.",
      userName: "Anonymous User",
      date: "2024-03-10",
      helpful: 8,
      isAnonymous: true
    }
  ]);

  const professional = {
    name: "Dr. Sarah Johnson",
    title: "Clinical Psychologist",
    specialization: "Anxiety & Depression",
    experience: "15 years",
    rating: 4.8,
    totalReviews: 156,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    about: "Dr. Sarah Johnson is a licensed clinical psychologist with over 15 years of experience helping individuals overcome anxiety, depression, and relationship challenges. She employs evidence-based approaches tailored to each client's unique needs.",
    certifications: ["Licensed Clinical Psychologist", "CBT Certified", "Trauma-Informed Care Specialist"],
    languages: ["English", "Spanish"],
    availability: "Mon-Fri, 9:00 AM - 5:00 PM"
  };

  const handleReviewSubmit = (review: { rating: number; comment: string; anonymous: boolean }) => {
    const newReview: Review = {
      id: reviews.length + 1,
      rating: review.rating,
      comment: review.comment,
      userName: review.anonymous ? "Anonymous User" : "John Doe",
      date: new Date().toISOString().split('T')[0],
      helpful: 0,
      isAnonymous: review.anonymous
    };

    setReviews([newReview, ...reviews]);
    setShowReviewForm(false);
    setToast({ type: 'success', message: 'Thank you for your review!' });
  };

  const handleHelpful = (reviewId: number) => {
    setReviews(reviews.map(review =>
      review.id === reviewId
        ? { ...review, helpful: review.helpful + 1 }
        : review
    ));
  };

  const handleReport = () => {
    setToast({ type: 'info', message: 'Review reported. We will look into it.' });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img
                  className="h-48 w-full object-cover md:h-full md:w-48"
                  src={professional.image}
                  alt={professional.name}
                />
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">{professional.name}</h1>
                    <p className="mt-1 text-lg text-gray-500">{professional.title}</p>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="ml-1 text-xl font-bold text-gray-900">{professional.rating}</span>
                    <span className="ml-1 text-sm text-gray-500">({professional.totalReviews} reviews)</span>
                  </div>
                </div>

                <div className="mt-4">
                  <p className="text-gray-600">{professional.about}</p>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-rose-600" />
                    <span className="ml-2 text-sm text-gray-600">{professional.experience} experience</span>
                  </div>
                  <div className="flex items-center">
                    <MessageSquare className="h-5 w-5 text-rose-600" />
                    <span className="ml-2 text-sm text-gray-600">{professional.languages.join(", ")}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-rose-600" />
                    <span className="ml-2 text-sm text-gray-600">Available {professional.availability}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-rose-600" />
                    <span className="ml-2 text-sm text-gray-600">50-minute sessions</span>
                  </div>
                </div>

                <div className="mt-6 flex space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-4 py-2 bg-rose-600 text-white rounded-md hover:bg-rose-700"
                  >
                    Book Session
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setShowReviewForm(true)}
                    className="px-4 py-2 border border-rose-600 text-rose-600 rounded-md hover:bg-rose-50"
                  >
                    Write Review
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {professional.certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white p-4 rounded-lg shadow-md"
                >
                  <Award className="h-6 w-6 text-rose-600 mb-2" />
                  <p className="text-gray-900">{cert}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="mt-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Client Reviews</h2>
              <div className="flex items-center">
                <Star className="h-6 w-6 text-yellow-400 fill-current" />
                <span className="ml-2 text-2xl font-bold text-gray-900">{professional.rating}</span>
                <span className="ml-2 text-gray-500">({professional.totalReviews} reviews)</span>
              </div>
            </div>
            <ReviewList
              reviews={reviews}
              onHelpful={handleHelpful}
              onReport={handleReport}
            />
          </div>
        </AnimatedSection>

        <Modal
          isOpen={showReviewForm}
          onClose={() => setShowReviewForm(false)}
          title="Write a Review"
        >
          <ReviewForm
            onSubmit={handleReviewSubmit}
            onClose={() => setShowReviewForm(false)}
          />
        </Modal>

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

export default ProfessionalProfile;