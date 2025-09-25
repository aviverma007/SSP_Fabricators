import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">
                17 Years Fabrication Excellence
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                We Fabricate Your Industry with 
                <span className="text-blue-900 block">Solid Transformation</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                <strong className="text-orange-500">YOU THINK, WE MAKE</strong><br/>
                SSP Fabricators - Your trusted partner for Steel Plants, Sugar Mills, Paper Mills, Power Houses and all types of customized fabrication & site works.
              </p>
            </div>

            {/* Key Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                <span className="text-gray-700">Skilled & Experienced Workforce</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                <span className="text-gray-700">Quality Workmanship</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                <span className="text-gray-700">Safety-Oriented Approach</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                <span className="text-gray-700">Timely Execution</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg"
              >
                Contact Now
                <ArrowRight size={20} className="ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white px-8 py-4 text-lg"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl p-8">
              <img
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Steel Fabrication Work"
                className="w-full h-96 object-cover rounded-lg"
              />
              
              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-blue-900 text-white p-6 rounded-lg shadow-xl">
                <div className="text-3xl font-bold">17+</div>
                <div className="text-sm">Years Experience</div>
              </div>
              
              {/* Floating Quality Badge */}
              <div className="absolute -top-6 -right-6 bg-orange-500 text-white p-4 rounded-full shadow-xl">
                <CheckCircle size={32} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;