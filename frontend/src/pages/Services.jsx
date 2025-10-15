import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServicesSection from '../components/ServicesSection';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Factory, Settings, FileText, Zap, Layers, Wrench, CheckCircle } from 'lucide-react';

const Services = () => {
  const serviceDetails = [
    {
      id: 1,
      title: "Steel Plants",
      icon: <Factory size={32} />,
      description: "Complete fabrication and erection services for steel manufacturing plants with precision engineering and safety standards.",
      features: ["Heavy Steel Structures", "Plant Equipment Fabrication", "Installation & Commissioning", "Maintenance Services"],
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Sugar Mill",
      icon: <Settings size={32} />,
      description: "Specialized fabrication services for sugar processing mills including equipment manufacturing and installation.",
      features: ["Mill Equipment Fabrication", "Processing Line Setup", "Custom Components", "Technical Support"],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Paper Mill",
      icon: <FileText size={32} />,
      description: "Professional fabrication and installation services for paper manufacturing industries with modern technology.",
      features: ["Paper Mill Machinery", "Conveyor Systems", "Processing Equipment", "Quality Assurance"],
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Power House",
      icon: <Zap size={32} />,
      description: "Robust fabrication solutions for power generation facilities and electrical infrastructure projects.",
      features: ["Power Plant Structures", "Electrical Enclosures", "Control Room Setup", "Safety Systems"],
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Sheet Metal Component",
      icon: <Layers size={32} />,
      description: "Manufacturing and supplying high-quality sheet metal components for various engineering applications.",
      features: ["Precision Sheet Metal", "Custom Components", "Laser Cutting", "Forming & Bending"],
      image: "https://images.unsplash.com/photo-1565707057507-793e7237676f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "Customized Fabrication",
      icon: <Wrench size={32} />,
      description: "All types of customized fabrication and site works tailored to meet your specific project requirements.",
      features: ["Custom Design", "Site Installation", "Project Management", "Quality Control"],
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-[#f5f9fc] py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-[#3d6d91] border-[#cce0ed]">
              Our Services
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Fabrication Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              SSP Fabricators provides end-to-end fabrication services across multiple industrial sectors. 
              From Steel Plants to Power Houses, we deliver precision, quality, and reliability in every project.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {serviceDetails.map((service, index) => (
              <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center gap-4">
                    <div className="bg-[#e6f0f7] text-[#3d6d91] p-4 rounded-xl">
                      {service.icon}
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                  </div>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                    Get Quote for {service.title}
                  </Button>
                </div>

                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <Card className="overflow-hidden shadow-xl">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-96 object-cover"
                    />
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <ServicesSection />

      {/* Why Choose Our Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our Services?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the SSP Fabricators advantage in every project we undertake
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <CardContent className="space-y-4 p-0">
                <div className="bg-[#e6f0f7] w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-[#3d6d91]">✓</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Quality Assurance</h3>
                <p className="text-gray-600">
                  Rigorous quality control processes ensure every project meets international standards.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent className="space-y-4 p-0">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-orange-600">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Fast Delivery</h3>
                <p className="text-gray-600">
                  Efficient project management and skilled workforce ensure on-time delivery.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent className="space-y-4 p-0">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-green-600">🛡️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Safety First</h3>
                <p className="text-gray-600">
                  Comprehensive safety protocols protect our team and ensure secure installations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;