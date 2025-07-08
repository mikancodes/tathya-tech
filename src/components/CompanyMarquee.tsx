import React from 'react';
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';

const CompanyMarquee: React.FC = () => {
  const companies = [
    {
      name: 'TechCorp',
      logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&dpr=2',
    },
    {
      name: 'InnovateLab',
      logo: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&dpr=2',
    },
    {
      name: 'DataFlow',
      logo: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&dpr=2',
    },
    {
      name: 'CloudSync',
      logo: 'https://images.pexels.com/photos/7947541/pexels-photo-7947541.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&dpr=2',
    },
    {
      name: 'NextGen',
      logo: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&dpr=2',
    },
    {
      name: 'DigitalEdge',
      logo: 'https://images.pexels.com/photos/3182811/pexels-photo-3182811.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&dpr=2',
    },
  ];

  return (
    <section className="py-16 bg-surface-secondary border-y border-primary-200/30">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="font-heading font-semibold text-headline-medium text-text-secondary mb-4">
            Trusted by Leading Companies
          </h3>
          <div className="h-0.5 w-16 bg-accent mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Marquee
            gradient={true}
            gradientColor={[250, 250, 250]}
            gradientWidth={100}
            speed={40}
            pauseOnHover={true}
            className="py-4"
          >
            {companies.map((company, index) => (
              <motion.div
                key={index}
                className="mx-8 group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative w-32 h-16 bg-white rounded-xl shadow-soft border border-primary-200/50 flex items-center justify-center overflow-hidden group-hover:shadow-medium transition-all duration-300">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <motion.p
                  className="text-center mt-2 font-body text-sm text-text-secondary group-hover:text-text-primary transition-colors duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  {company.name}
                </motion.p>
              </motion.div>
            ))}
          </Marquee>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyMarquee;