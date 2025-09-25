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
              <div className="flex items-center space-x-3">
                {/* Logo Icon */}
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg flex items-center justify-center shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-300">
                    <div className="text-white font-bold text-lg">S</div>
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-400 rounded-md flex items-center justify-center shadow-md transform -rotate-12 hover:rotate-0 transition-transform duration-300">
                    <div className="text-white font-bold text-xs">P</div>
                  </div>
                </div>
                
                {/* Company Name */}
                <div className="text-2xl font-bold text-blue-900">
                  SSP <span className="text-orange-500">Fabricators</span>
                </div>
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