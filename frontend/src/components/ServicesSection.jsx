import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Factory, Settings, FileText, Zap, Layers, Wrench } from 'lucide-react';
import { services } from '../mock/data';

const ServicesSection = () => {
  const getIcon = (iconName) => {
    const icons = {
      Factory: <Factory size={24} />,
      Settings: <Settings size={24} />,
      FileText: <FileText size={24} />,
      Zap: <Zap size={24} />,
      Layers: <Layers size={24} />,
      Wrench: <Wrench size={24} />
    };
    return icons[iconName] || <Factory size={24} />;
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-[#3d6d91] border-[#cce0ed]">
            We Are Specialists In
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            What We Do
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive fabrication and erection services across multiple industrial sectors 
            with precision, quality, and safety as our core principles.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={service.id} className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg scroll-animate hover-lift`} style={{animationDelay: `${index * 0.1}s`}}>
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-[#285075]/20 group-hover:bg-[#285075]/40 transition-colors duration-300"></div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-[#e6f0f7] text-[#3d6d91] p-2 rounded-lg">
                    {getIcon(service.icon)}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <Button 
                  variant="outline" 
                  className="w-full border-[#3d6d91] text-[#3d6d91] hover:bg-[#3d6d91] hover:text-white transform hover:scale-105 transition-all duration-200"
                  onClick={() => {
                    if (service.title === 'Steel Plants') {
                      window.location.href = '/steel-plants';
                    } else {
                      window.location.href = '/services';
                    }
                  }}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Steps */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#e6f0f7] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="text-[#3d6d91]" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Structure Manufacturing</h3>
              <p className="text-gray-600">
                After the blueprint and design of the structure are finalized, all components are manufactured 
                in our advanced workshop using precision machinery.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="text-orange-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Installation</h3>
              <p className="text-gray-600">
                Our team ensures all fabricated components are safely delivered and installed at the client's 
                site according to specifications and structural safety standards.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Factory className="text-green-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Ongoing Support</h3>
              <p className="text-gray-600">
                We provide dedicated post-installation support, including maintenance advice and servicing 
                to ensure longevity and reliability of the fabricated structures.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 section-reveal">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Project?</h3>
          <p className="text-gray-600 mb-8">
            Contact our expert team to discuss your fabrication requirements and get a detailed quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 pulse-glow hover:scale-105 transform transition-all duration-200"
              onClick={() => window.location.href = '/quote'}
            >
              Get Free Quote
            </Button>
            <Button 
              variant="outline" 
              className="border-[#3d6d91] text-[#3d6d91] hover:bg-[#3d6d91] hover:text-white px-8 hover:scale-105 transform transition-all duration-200"
              onClick={() => window.open('tel:+918851013535')}
            >
              Call Us: +91-8851013535
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;