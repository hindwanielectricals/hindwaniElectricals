import { motion } from "framer-motion";

const AboutSection = () => {
  const features = [
    {
      icon: "fas fa-medal",
      title: "Quality Products",
      description: "We offer only the finest electrical supplies from trusted brands and manufacturers, ensuring safety and reliability."
    },
    {
      icon: "fas fa-star",
      title: "Authentic Finolex Products",
      description: "As an authorized dealer, we provide genuine Finolex wires and cables with manufacturer warranty."
    },
    {
      icon: "fas fa-store",
      title: "Competitive Pricing",
      description: "We offer the best market rates on all electrical products with discounts for bulk purchases."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-['Inter'] text-[#0052A5]">
            About Sri Hindwani Electricals
          </h2>
          <div className="w-20 h-1 bg-[#FF6B00] mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto">
            As an authorized Finolex dealer in Bengaluru, we are committed to providing the highest quality electrical products to homes and businesses across the region.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-[#F5F5F5] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              variants={itemVariants}
            >
              <div className="text-[#0052A5] text-4xl mb-4">
                <i className={feature.icon}></i>
              </div>
              <h3 className="text-xl font-bold mb-3 font-['Inter']">{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
