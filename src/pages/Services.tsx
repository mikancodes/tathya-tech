import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Server, Phone, Cloud, Code, Layers, Brain, Shuffle } from 'lucide-react';
import { enhancedServices } from '../data/enhancedServices';

const iconComponents = {
  server: Server,
  phone: Phone,
  cloud: Cloud,
  code: Code,
  layers: Layers,
  brain: Brain,
  shuffle: Shuffle,
};

const Services: React.FC = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const toggleService = (serviceId: number) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary-700 to-primary-800">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Comprehensive Technology Solutions
            </h1>
            <p className="font-body text-xl text-primary-100 leading-relaxed mb-8">
              From infrastructure to AI integration, we provide end-to-end solutions that help your business stay competitive in the digital landscape.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#services-grid"
                className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-primary-700 px-8 py-3 rounded-md font-heading font-medium transition-colors duration-200"
              >
                Explore Services
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center bg-transparent hover:bg-primary-600 text-white border border-white px-8 py-3 rounded-md font-heading font-medium transition-colors duration-200"
              >
                Get Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services-grid" className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-text-primary mb-4">
                Our Service Portfolio
              </h2>
              <div className="h-1 w-20 bg-accent mx-auto mb-6"></div>
              <p className="font-body text-gray-600 leading-relaxed">
                Click on any service card to explore detailed offerings and capabilities. Our comprehensive approach ensures all your technology needs are met under one roof.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {enhancedServices.map((service, index) => {
              const IconComponent = iconComponents[service.icon as keyof typeof iconComponents];
              const isExpanded = expandedService === service.id;

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg border border-primary-100 overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  {/* Service Card Header */}
                  <div
                    className="p-8 cursor-pointer"
                    onClick={() => toggleService(service.id)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="bg-primary-100 p-4 rounded-full flex-shrink-0">
                          <IconComponent className="text-accent" size={32} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-heading font-semibold text-2xl text-text-primary mb-3">
                            {service.title}
                          </h3>
                          <p className="font-body text-gray-600 leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0 ml-4"
                      >
                        <ChevronDown className="text-accent" size={24} />
                      </motion.div>
                    </div>
                  </div>

                  {/* Expandable Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-primary-100"
                      >
                        <div className="p-8 bg-primary-50">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {service.categories.map((category, categoryIndex) => (
                              <div key={categoryIndex}>
                                <h4 className="font-heading font-semibold text-lg text-text-primary mb-4">
                                  {category.name}
                                </h4>
                                <ul className="space-y-3">
                                  {category.items.map((item, itemIndex) => (
                                    <li key={itemIndex} className="flex items-start">
                                      <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                      <span className="font-body text-gray-700 text-sm leading-relaxed">
                                        {item}
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                          
                          {service.benefits && (
                            <div className="mt-8 p-6 bg-white rounded-lg border border-primary-200">
                              <h4 className="font-heading font-semibold text-lg text-text-primary mb-4">
                                Key Benefits
                              </h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {service.benefits.map((benefit, benefitIndex) => (
                                  <div key={benefitIndex} className="flex items-center">
                                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                    <span className="font-body text-gray-700 text-sm">
                                      {benefit}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-primary-700">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-6">
              Why Choose Our Services?
            </h2>
            <p className="font-body text-primary-100 text-lg mb-8 leading-relaxed">
              Our comprehensive approach ensures that all your technology needs are met under one roof. From infrastructure setup to AI integration, we provide end-to-end solutions that help your business stay competitive in the digital landscape.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {[
                'Complete technology stack management',
                'Seamless integration across all services',
                '24/7 support and maintenance',
                'Scalable solutions that grow with your business',
                'Expert consultation and implementation',
                'Cost-effective bundled solutions'
              ].map((benefit, index) => (
                <div key={index} className="flex items-center text-left">
                  <div className="w-3 h-3 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                  <span className="font-body text-primary-100">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-primary-700 px-8 py-3 rounded-md font-heading font-medium transition-colors duration-200"
              >
                Get Free Consultation
              </a>
              <a
                href="/portfolio"
                className="inline-flex items-center justify-center bg-transparent hover:bg-primary-600 text-white border border-white px-8 py-3 rounded-md font-heading font-medium transition-colors duration-200"
              >
                View Our Work
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;