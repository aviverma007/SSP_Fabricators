import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              {/* Logo Images - First larger, second spread right */}
              <img 
                src="/hero-image-2.png" 
                alt="SSP Fabricators Logo" 
                className="h-28 w-auto object-contain"
              />
              <img 
                src="/hero-image-1.png" 
                alt="SSP Fabricators Text Logo" 
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-gray-300 leading-relaxed">
              <strong className="text-orange-500">YOU THINK, WE MAKE</strong><br />
              Leading fabrication company providing Steel Plants, Sugar Mills, Paper Mills, 
              Power Houses and customized fabrication services with excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-[#3d6d91] p-2 rounded-full hover:bg-[#2f5a75] transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" className="bg-[#5a8fb3] p-2 rounded-full hover:bg-[#f5f9fc]0 transition-colors">
                <Twitter size={16} />
              </a>
              <a href="#" className="bg-[#285075] p-2 rounded-full hover:bg-[#285075] transition-colors">
                <Linkedin size={16} />
              </a>
              <a href="#" className="bg-pink-600 p-2 rounded-full hover:bg-pink-700 transition-colors">
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Steel Plants</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Sugar Mill</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Paper Mill</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Power House</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Sheet Metal Fabrication</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Customized Fabrication</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Projects</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Get Quote</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="text-orange-500 flex-shrink-0 mt-1" size={16} />
                <div>
                  <p className="text-gray-300">+91-8851013535</p>
                  <p className="text-sm text-gray-400">Shubham Panchal</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="text-orange-500 flex-shrink-0 mt-1" size={16} />
                <p className="text-gray-300">sspfabricators@gmail.com</p>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="text-orange-500 flex-shrink-0 mt-1" size={16} />
                <p className="text-gray-300">Industrial Area,<br />Delhi NCR, India</p>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="text-orange-500 flex-shrink-0 mt-1" size={16} />
                <div>
                  <p className="text-gray-300">Mon-Sat: 9:00 AM - 6:00 PM</p>
                  <p className="text-sm text-gray-400">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Clients Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <h3 className="text-xl font-bold mb-6 text-center">Our Valued Clients</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <span className="text-sm font-medium">JMC Projects (INDIA) Ltd.</span>
            <span className="text-sm font-medium">B.E.C Ltd.</span>
            <span className="text-sm font-medium">SEC Pvt. Ltd.</span>
            <span className="text-sm font-medium">G.D.C.L</span>
            <span className="text-sm font-medium">C.E.C.C</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800 border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 SSP Fabricators. All rights reserved. | Proprietor: Shubham Panchal
            </p>
            <div className="flex items-center gap-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <div className="text-sm text-gray-400">
                <span className="text-orange-500 font-bold">Excellence</span> in Fabrication
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;