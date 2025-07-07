import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.05\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"1\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-accent/10 rounded-full blur-xl"
        animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl"
        animate={{ y: [0, 20, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mb-6"
            >
              <motion.div 
                className="inline-flex items-center px-4 py-2 bg-accent/10 backdrop-blur-sm rounded-full border border-accent/20 mb-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Sparkles className="text-accent mr-2" size={16} />
                <span className="text-accent font-body font-medium text-sm">Innovative Technology Solutions</span>
              </motion.div>
              
              <h1 className="font-heading font-bold text-display-large lg:text-6xl xl:text-7xl leading-tight text-white mb-8">
                Transform Your Business with 
                <motion.span 
                  className="block text-accent"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Innovative SaaS
                </motion.span>
                <span className="block">Solutions</span>
              </h1>
            </motion.div>
            
            <motion.p 
              className="font-body text-title-medium text-primary-200 mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              We build custom software solutions that drive efficiency, growth, and digital transformation for businesses of all sizes.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-2xl font-heading font-semibold transition-all duration-300 shadow-large group"
                >
                  Explore Services
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight size={20} />
                  </motion.div>
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-transparent hover:bg-white/10 text-white border-2 border-white/30 hover:border-white/50 px-8 py-4 rounded-2xl font-heading font-semibold transition-all duration-300 backdrop-blur-sm"
                >
                  Contact Us
                </Link>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Image */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative"
            >
              <motion.div
                className="relative z-10 rounded-3xl overflow-hidden shadow-large"
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Digital Transformation"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent"></div>
              </motion.div>
              
              {/* Floating Cards */}
              <motion.div
                className="absolute -top-6 -right-6 bg-surface-primary p-4 rounded-2xl shadow-large border border-primary-200/20 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20, rotate: -10 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                whileHover={{ scale: 1.05, rotate: 5 }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse-soft"></div>
                  <span className="font-body text-sm font-medium text-text-primary">99.9% Uptime</span>
                </div>
              </motion.div>
              
              <motion.div
                className="absolute -bottom-6 -left-6 bg-surface-primary p-4 rounded-2xl shadow-large border border-primary-200/20 backdrop-blur-sm"
                initial={{ opacity: 0, y: -20, rotate: 10 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                whileHover={{ scale: 1.05, rotate: -5 }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-accent rounded-full animate-pulse-soft"></div>
                  <span className="font-body text-sm font-medium text-text-primary">24/7 Support</span>
                </div>
              </motion.div>
              
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-accent/10 to-accent/5 rounded-3xl transform translate-x-8 translate-y-8 -z-10"></div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
  );
};

export default Hero;