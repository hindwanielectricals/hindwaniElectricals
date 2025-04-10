import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      icon: "fas fa-bolt",
      title: "Electrical Installation",
      description: "Professional installation of electrical systems for new construction and renovations.",
      features: [
        "Complete wiring systems",
        "Lighting installation",
        "Panel upgrades",
        "Smart home integrations"
      ]
    },
    {
      icon: "fas fa-tools",
      title: "Maintenance & Repairs",
      description: "Keep your electrical systems running safely and efficiently with our maintenance services.",
      features: [
        "Troubleshooting and repairs",
        "Preventative maintenance",
        "Circuit inspections",
        "Emergency services"
      ]
    },
    {
      icon: "fas fa-lightbulb",
      title: "Lighting Design",
      description: "Custom lighting solutions to enhance the beauty and functionality of your space.",
      features: [
        "Residential lighting design",
        "Commercial lighting solutions",
        "Energy-efficient upgrades",
        "Outdoor lighting systems"
      ]
    },
    {
      icon: "fas fa-shield-alt",
      title: "Safety Inspections",
      description: "Comprehensive safety inspections to identify and address potential hazards.",
      features: [
        "Code compliance checks",
        "Safety certifications",
        "Insurance inspections",
        "Surge protection systems"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-['Inter'] text-[#0052A5]">
            Our Services
          </h2>
          <div className="w-20 h-1 bg-[#FF6B00] mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto">
            Our team of certified electricians offers comprehensive electrical services for both residential and commercial clients.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="flex"
              variants={itemVariants}
            >
              <div className="mr-6">
                <div className="bg-[#0052A5] text-white rounded-full w-14 h-14 flex items-center justify-center text-2xl">
                  <i className={service.icon}></i>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 font-['Inter']">{service.title}</h3>
                <p className="text-gray-600 mb-2">{service.description}</p>
                <ul className="list-disc list-inside text-gray-600 ml-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-12 bg-[#F5F5F5] p-8 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-6">
              <h3 className="text-2xl font-bold mb-2 font-['Inter']">Need Professional Electrical Services?</h3>
              <p className="text-gray-600">Our certified electricians are ready to help with your electrical projects.</p>
            </div>
            <a href="#contact">
              <Button 
                className="bg-[#FF6B00] hover:bg-orange-700 text-white font-medium py-3 px-8 rounded-md whitespace-nowrap"
              >
                Request a Quote
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
