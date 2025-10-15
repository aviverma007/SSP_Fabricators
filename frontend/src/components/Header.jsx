import React, { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Phone size={14} />
              <span>+91-8851013535</span>
            </div>
            <div className="flex items-center gap-1">
              <Mail size={14} />
              <span>sspfabricators@gmail.com</span>
            </div>
          </div>
          <div className="text-sm">
            17 Years Fabrication Excellence
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center gap-3">
                {/* Logo Images - First larger, second spread right */}
                <img 
                  src="/hero-image-2.png" 
                  alt="SSP Fabricators Logo" 
                  className="h-32 w-auto object-contain hover:scale-105 transition-transform duration-300"
                />
                <img 
                  src="/hero-image-1.png" 
                  alt="SSP Fabricators Text Logo" 
                  className="h-20 w-auto object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="/" className="text-gray-700 hover:text-blue-900 transition-colors font-medium hover:scale-105 transform duration-200">
                Home
              </a>
              <a href="/about" className="text-gray-700 hover:text-blue-900 transition-colors font-medium hover:scale-105 transform duration-200">
                About Us
              </a>
              <a href="/services" className="text-gray-700 hover:text-blue-900 transition-colors font-medium hover:scale-105 transform duration-200">
                Services
              </a>
              <a href="/contact" className="text-gray-700 hover:text-blue-900 transition-colors font-medium hover:scale-105 transform duration-200">
                Contact
              </a>
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex">
              <Button 
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 pulse-glow hover:scale-105 transform transition-all duration-200"
                onClick={() => window.location.href = '/contact'}
              >
                Get Free Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="lg:hidden pb-4 border-t">
              <div className="flex flex-col space-y-4 pt-4">
                <a href="/" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">
                  Home
                </a>
                <a href="/about" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">
                  About Us
                </a>
                <a href="/services" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">
                  Services
                </a>
                <a href="/contact" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">
                  Contact
                </a>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white w-fit">
                  Get Free Quote
                </Button>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;