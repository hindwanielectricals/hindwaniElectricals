import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="home" className="bg-gradient-to-r from-[#0052A5] to-blue-800 text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-['Inter']">
              Sri Hindwani Electricals - Authorized Finolex Dealer
            </h1>
            <p className="text-lg mb-8">
              Your trusted partner for premium electrical supplies and products with quality assurance in Bengaluru.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#products">
                <Button 
                  className="bg-[#FF6B00] hover:bg-orange-700 text-white font-medium py-3 px-6 rounded-md w-full sm:w-auto"
                >
                  Explore Products
                </Button>
              </a>
              <a href="#contact">
                <Button 
                  className="bg-white text-[#0052A5] hover:bg-gray-100 font-medium py-3 px-6 rounded-md w-full sm:w-auto"
                >
                  Contact Us
                </Button>
              </a>
            </div>
          </motion.div>
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img 
              src="https://images.jdmagicbox.com/v2/comp/bangalore/46/080p11446/catalogue/sri-hindwani-electricals-chickpete-bangalore-electrical-goods-dealers-99rvhmvf9m.jpg" 
              alt="Sri Hindwani Electricals Store" 
              className="rounded-lg shadow-xl object-cover" 
              width="600" 
              height="400"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
