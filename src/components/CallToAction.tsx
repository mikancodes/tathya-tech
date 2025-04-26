import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 bg-primary-700">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-6">
            Ready to Transform Your Business with Innovative Solutions?
          </h2>
          <p className="font-body text-primary-100 text-lg mb-8 leading-relaxed">
            Partner with us to leverage cutting-edge technology and expert guidance for your next project.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-primary-700 px-8 py-3 rounded-md font-heading font-medium transition-colors duration-200"
            >
              Get Started
              <ArrowRight size={16} className="ml-2" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center bg-transparent hover:bg-primary-600 text-white border border-white px-8 py-3 rounded-md font-heading font-medium transition-colors duration-200"
            >
              Learn More
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;