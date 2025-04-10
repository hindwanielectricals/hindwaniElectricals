const Footer = () => {
  return (
    <footer className="bg-[#333333] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 font-['Inter']">Sri Hindwani Electricals</h3>
            <p className="mb-4">Authorized Finolex dealer providing quality electrical wires and cables in Bengaluru since 2005.</p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/hindwanielectrical/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-[#FF6B00] transition-colors"
                aria-label="Facebook Page"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a 
                href="https://www.justdial.com/jdmart/Bangalore/Sri-Hindwani-Electricals-Near-Hotel-Vijay-Vihar-Chickpete/080P11446_BZDET/catalogue" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-[#FF6B00] transition-colors"
                aria-label="JustDial Page"
              >
                <i className="fas fa-search-location"></i>
              </a>
              <a 
                href="https://www.indiamart.com/sri-hindwani-electricals/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-[#FF6B00] transition-colors"
                aria-label="IndiaMart Page"
              >
                <i className="fas fa-shopping-bag"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 font-['Inter']">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-[#FF6B00] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#FF6B00] transition-colors">About Us</a></li>
              <li><a href="#products" className="hover:text-[#FF6B00] transition-colors">Products</a></li>
              <li><a href="#testimonials" className="hover:text-[#FF6B00] transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-[#FF6B00] transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 font-['Inter']">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-[#FF6B00]"></i>
                <span>234, SV Ln, near Hotel Vijay Vihar, Mamulpet<br/>Chickpet, Bengaluru, Karnataka 560053</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone-alt mr-3 text-[#FF6B00]"></i>
                <span>+91 9916065658</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-3 text-[#FF6B00]"></i>
                <span>hindwanielectrical@gmail.com</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-clock mr-3 text-[#FF6B00]"></i>
                <span>Mon-Sat: 10:30AM-8PM, Sun: Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Sri Hindwani Electricals - Authorized Finolex Dealer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
