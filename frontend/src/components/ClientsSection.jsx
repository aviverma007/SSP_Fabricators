import React from 'react';
import { Badge } from './ui/badge';
import { clients } from '../mock/data';

const ClientsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-blue-600 border-blue-200">
            Happy Clients
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Trusted by Leading Companies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are proud to partner with industry leaders who trust us for their fabrication and erection needs. 
            Our clients success is our success.
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client) => (
            <div 
              key={client.id} 
              className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center h-24 group"
            >
              <img 
                src={client.logo} 
                alt={client.name}
                className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>

        {/* Client Stats */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-900 mb-2">200+</div>
              <div className="text-gray-600">Satisfied Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-900 mb-2">500+</div>
              <div className="text-gray-600">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-900 mb-2">98%</div>
              <div className="text-gray-600">Client Retention</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-900 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Choose SSP Fabricators?</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover what makes us the preferred choice for fabrication services across industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">One-Stop Solution</h4>
              <p className="text-gray-600">
                Complete fabrication & erection services under one roof for all your industrial needs.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">2</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Experienced Manpower</h4>
              <p className="text-gray-600">
                Skilled workforce with safety compliance and years of industry experience.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Cost-Effective Services</h4>
              <p className="text-gray-600">
                Competitive pricing with transparent communication and reliable project delivery.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">4</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Quality Assurance</h4>
              <p className="text-gray-600">
                Rigorous quality checks and adherence to industry standards in every project.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-pink-600">5</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Timely Delivery</h4>
              <p className="text-gray-600">
                Consistent on-time project completion with efficient project management.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-600">6</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Long-term Relationships</h4>
              <p className="text-gray-600">
                Focus on building lasting partnerships with transparent reporting and support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;