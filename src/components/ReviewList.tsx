import React from 'react';
import { motion } from 'framer-motion';
import { Star, ThumbsUp, Flag } from 'lucide-react';

interface Review {
  id: number;
  rating: number;
  comment: string;
  userName: string;
  date: string;
  helpful: number;
  isAnonymous?: boolean;
}

interface ReviewListProps {
  reviews: Review[];
  onHelpful: (reviewId: number) => void;
  onReport: (reviewId: number) => void;
}

const ReviewList: React.FC<ReviewListProps> = ({ reviews, onHelpful, onReport }) => {
  return (
    <div className="space-y-6">
      {reviews.map((review) => (
        <motion.div
          key={review.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    className={`h-5 w-5 ${
                      index < review.rating
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-600">
                {review.rating}/5
              </span>
            </div>
            <span className="text-sm text-gray-500">{review.date}</span>
          </div>

          <p className="text-gray-700 mb-4">{review.comment}</p>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium text-gray-900">
                {review.isAnonymous ? 'Anonymous User' : review.userName}
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => onHelpful(review.id)}
                className="flex items-center text-sm text-gray-500 hover:text-gray-700"
              >
                <ThumbsUp className="h-4 w-4 mr-1" />
                <span>Helpful ({review.helpful})</span>
              </button>
              <button
                onClick={() => onReport(review.id)}
                className="flex items-center text-sm text-gray-500 hover:text-red-600"
              >
                <Flag className="h-4 w-4 mr-1" />
                <span>Report</span>
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ReviewList;