import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-28 md:pt-40 pb-20 bg-gradient-to-b from-primary-100 to-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-tight text-text-primary mb-6">
                Transform Your Business with 
                <span className="text-accent"> Innovative SaaS</span> Solutions
              </h1>
              <p className="font-body text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
                We build custom software solutions that drive efficiency, growth, and digital transformation for businesses of all sizes.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="#services"
                  className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white px-8 py-3 rounded-md font-heading font-medium transition-colors duration-200"
                >
                  Explore Services
                  <ArrowRight size={16} className="ml-2" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-text-primary border border-primary-300 px-8 py-3 rounded-md font-heading font-medium transition-colors duration-200"
                >
                  Contact Us
                </a>
              </div>
            </motion.div>
          </div>
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Digital Transformation"
                  className="rounded-xl shadow-xl"
                />
              </div>
              <div className="absolute top-0 right-0 w-full h-full bg-primary-300 rounded-xl transform translate-x-4 translate-y-4 -z-10"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;