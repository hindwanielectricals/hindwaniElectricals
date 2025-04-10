import { motion } from "framer-motion";

const FeaturedProjectsSection = () => {
  const projects = [
    {
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Commercial Office Wiring",
      description: "Complete electrical system installation for a 10,000 sq ft office space.",
      category: "Commercial"
    },
    {
      image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Luxury Home Lighting",
      description: "Custom lighting design and installation for a modern luxury residence.",
      category: "Residential"
    },
    {
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Smart Office Integration",
      description: "Integrated smart lighting and power management system for improved efficiency.",
      category: "Commercial"
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
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-[#FF6B00] mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto">
            Take a look at some of our recent electrical installations and projects.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="bg-[#F5F5F5] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              variants={itemVariants}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2 font-['Inter']">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-[#0052A5] font-medium">{project.category}</span>
                  <a href="#" className="text-[#FF6B00] hover:underline">View Details</a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;
