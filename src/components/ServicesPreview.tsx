import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Server, Phone, Cloud, Code, Layers, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPreview: React.FC = () => {
  const previewServices = [
    {
      id: 1,
      title: 'Infrastructure Support',
      description: 'Complete server management, hosting solutions, and data center services',
      icon: Server,
    },
    {
      id: 2,
      title: 'Telephony Services',
      description: 'Advanced PBX systems and modern communication infrastructure',
      icon: Phone,
    },
    {
      id: 3,
      title: 'Cloud Solutions',
      description: 'Secure, scalable cloud infrastructure with optimization and management',
      icon: Cloud,
    },
    {
      id: 4,
      title: 'Website Development',
      description: 'Modern, responsive websites with cutting-edge technologies',
      icon: Code,
    },
    {
      id: 5,
      title: 'SaaS Development',
      description: 'Custom software-as-a-service solutions built to scale',
      icon: Layers,
    },
    {
      id: 6,
      title: 'AI Integration',
      description: 'Smart systems that enhance processes with automation',
      icon: Brain,
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-text-primary mb-4">
              Our Services
            </h2>
            <div className="h-1 w-20 bg-accent mx-auto mb-6"></div>
            <p className="font-body text-gray-600 leading-relaxed">
              We provide comprehensive software solutions designed to help your business thrive in the digital era.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {previewServices.map((service) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={item}
                className="bg-primary-50 rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:transform hover:scale-105 border border-primary-200"
              >
                <div className="bg-white p-4 rounded-full w-16 h-16 flex items-center justify-center shadow-sm mb-6">
                  <IconComponent className="text-accent" size={28} />
                </div>
                <h3 className="font-heading font-semibold text-xl text-text-primary mb-3">
                  {service.title}
                </h3>
                <p className="font-body text-gray-600">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <Link
            to="/services"
            className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white px-8 py-3 rounded-md font-heading font-medium transition-colors duration-200"
          >
            View All Services
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;