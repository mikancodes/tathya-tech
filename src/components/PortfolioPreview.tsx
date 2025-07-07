import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { portfolioItems } from '../data';

const PortfolioPreview: React.FC = () => {
  const previewItems = portfolioItems.slice(0, 4);

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
    <section className="py-20 bg-primary-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-text-primary mb-4">
              Featured Projects
            </h2>
            <div className="h-1 w-20 bg-accent mx-auto mb-6"></div>
            <p className="font-body text-gray-600 leading-relaxed">
              Explore some of our innovative solutions that have helped businesses overcome challenges and drive growth.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          {previewItems.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              className="overflow-hidden rounded-xl bg-white shadow-md group hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-accent text-white text-sm rounded-full mb-2">
                      {project.category}
                    </span>
                    <h3 className="font-heading font-semibold text-xl text-white mb-2">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading font-semibold text-xl text-text-primary mb-3">
                  {project.title}
                </h3>
                <p className="font-body text-gray-600 mb-4">
                  {project.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center font-heading font-medium text-accent hover:text-accent-dark transition-colors duration-200"
                >
                  View Case Study
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <Link
            to="/portfolio"
            className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white px-8 py-3 rounded-md font-heading font-medium transition-colors duration-200"
          >
            View All Projects
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioPreview;