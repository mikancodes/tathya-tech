import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../data';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-text-primary mb-4">
              What Our Clients Say
            </h2>
            <div className="h-1 w-20 bg-accent mx-auto mb-6"></div>
            <p className="font-body text-gray-600 leading-relaxed">
              Hear from organizations that have transformed their operations with our solutions.
            </p>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-primary-50 rounded-xl p-8 md:p-12 shadow-md"
          >
            <div className="text-accent mb-6">
              <Quote size={40} />
            </div>
            <p className="font-body text-gray-700 text-lg italic mb-8 leading-relaxed">
              {testimonials[currentIndex].quote}
            </p>
            <div className="flex items-center">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].author}
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <h4 className="font-heading font-semibold text-text-primary">
                  {testimonials[currentIndex].author}
                </h4>
                <p className="font-body text-sm text-accent">
                  {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
                </p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={handlePrev}
              className="bg-white p-3 rounded-full shadow-md text-text-primary hover:text-accent transition-colors duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-accent' : 'bg-primary-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
            <button
              onClick={handleNext}
              className="bg-white p-3 rounded-full shadow-md text-text-primary hover:text-accent transition-colors duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;