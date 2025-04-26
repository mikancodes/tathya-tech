import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    'Innovative SaaS Solutions',
    'Enterprise-Grade Security',
    'Scalable Cloud Infrastructure',
    'Expert Technical Support',
    'Agile Development Process',
    'Continuous Integration & Deployment',
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2"
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-text-primary mb-4">
              About Tathya Technologies
            </h2>
            <div className="h-1 w-20 bg-accent mb-6"></div>
            <p className="font-body text-gray-600 leading-relaxed mb-6">
              Founded in 2020, Tathya Technologies is a forward-thinking SaaS company dedicated to helping businesses leverage the power of technology to achieve their goals.
            </p>
            <p className="font-body text-gray-600 leading-relaxed mb-8">
              Our team of experienced developers, designers, and strategists works collaboratively to deliver tailored solutions that address our clients' unique challenges and drive measurable results.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle2 className="text-accent mt-1 mr-2 flex-shrink-0" size={18} />
                  <span className="font-body text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2"
          >
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://images.pexels.com/photos/3182811/pexels-photo-3182811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Our Team"
                  className="rounded-xl shadow-xl"
                />
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-primary-300 rounded-xl transform -translate-x-4 translate-y-4 -z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;