import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navItems } from '../data';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`font-heading text-base font-medium transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent hover:after:w-full after:transition-all after:duration-300 ${
                  scrolled ? 'text-text-primary' : 'text-text-primary'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Contact Button */}
          <a
            href="#contact"
            className="hidden md:inline-flex bg-accent hover:bg-accent-dark text-white px-6 py-2 rounded-md font-heading font-medium transition-colors duration-200"
          >
            Get Started
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-text-primary"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-primary-200"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="font-heading text-text-primary text-lg py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="bg-accent hover:bg-accent-dark text-white px-6 py-3 rounded-md font-heading font-medium transition-colors duration-200 text-center mt-2"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </a>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;