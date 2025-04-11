import { useState, useEffect } from 'react';
import { Link } from 'wouter';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Close menu when clicking on a link
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`bg-white sticky top-0 z-50 transition-shadow duration-300 ${scrolled ? 'shadow-md' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <div className="flex items-center">
            <div className="font-bold text-2xl md:text-3xl">
              <span className="text-[#FF6B00]">Sri Hindwani Electricals</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a 
              href="#home" 
              className="text-[#0052A5] font-medium hover:text-[#FF6B00] transition-colors"
              onClick={handleLinkClick}
            >
              Home
            </a>
            <a 
              href="#products" 
              className="text-[#333333] font-medium hover:text-[#FF6B00] transition-colors"
              onClick={handleLinkClick}
            >
              Products
            </a>

            <a 
              href="#testimonials" 
              className="text-[#333333] font-medium hover:text-[#FF6B00] transition-colors"
              onClick={handleLinkClick}
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              className="text-[#333333] font-medium hover:text-[#FF6B00] transition-colors"
              onClick={handleLinkClick}
            >
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              className="text-[#333333] focus:outline-none" 
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden pb-4 ${mobileMenuOpen ? 'block' : 'hidden'}`}>
          <a 
            href="#home" 
            className="block py-2 text-[#0052A5] font-medium"
            onClick={handleLinkClick}
          >
            Home
          </a>
          <a 
            href="#products" 
            className="block py-2 text-[#333333] font-medium"
            onClick={handleLinkClick}
          >
            Products
          </a>

          <a 
            href="#testimonials" 
            className="block py-2 text-[#333333] font-medium"
            onClick={handleLinkClick}
          >
            Testimonials
          </a>
          <a 
            href="#contact" 
            className="block py-2 text-[#333333] font-medium"
            onClick={handleLinkClick}
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
