import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { CheckCircle, Factory, Wrench, Shield, Clock, Award, Users } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const SteelPlantsService = () => {
  useScrollAnimation();

  const serviceFeatures = [
    "Heavy Steel Structure Fabrication",
    "Plant Equipment Manufacturing",
    "Installation & Commissioning",
    "Maintenance & Support Services",
    "Custom Steel Component Design",
    "Quality Testing & Certification"
  ];

  const processSteps = [
    {
      step: "01",
      title: "Site Survey & Planning",
      description: "Comprehensive site assessment and detailed project planning with engineering specifications."
    },
    {
      step: "02", 
      title: "Design & Engineering",
      description: "Advanced CAD design and structural engineering analysis for optimal performance."
    },
    {
      step: "03",
      title: "Manufacturing",
      description: "Precision fabrication in our state-of-the-art workshop using latest technology."
    },
    {
      step: "04",
      title: "Installation",
      description: "Professional on-site installation with adherence to safety and quality standards."
    },
    {
      step: "05",
      title: "Testing & Handover",
      description: "Comprehensive testing, quality assurance and successful project handover."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-[#f5f9fc] py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 section-reveal">
            <Badge variant="outline" className="mb-4 text-[#3d6d91] border-[#cce0ed]">
              Steel Plants Service
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Complete Steel Plant Fabrication Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              SSP Fabricators provides comprehensive fabrication and erection services for steel manufacturing plants 
              with precision engineering, advanced technology, and strict safety standards.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto section-reveal">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#285075] mb-2">50+</div>
              <div className="text-gray-600">Steel Plants Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#285075] mb-2">1000+</div>
              <div className="text-gray-600">Tons Steel Fabricated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#285075] mb-2">99%</div>
              <div className="text-gray-600">Quality Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#285075] mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 section-reveal">
              <div className="flex items-center gap-4">
                <div className="bg-[#e6f0f7] text-[#3d6d91] p-4 rounded-xl">
                  <Factory size={32} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Steel Plant Expertise</h2>
              </div>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Our steel plant fabrication services encompass complete structural solutions from initial design 
                to final installation. We specialize in heavy steel structures, plant equipment, and custom components 
                that meet the demanding requirements of modern steel manufacturing facilities.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {serviceFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 hover:scale-105 transition-transform duration-200">
                    <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg pulse-glow hover:scale-105 transform transition-all duration-200"
                onClick={() => window.location.href = '/contact'}
              >
                Get Steel Plant Quote
              </Button>
            </div>

            <div className="section-reveal">
              <img 
                src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Steel Plant Fabrication"
                className="w-full h-96 object-cover rounded-2xl shadow-xl hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 section-reveal">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Steel Plant Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to deliver world-class steel plant fabrication
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((process, index) => (
              <div key={index} className="text-center relative section-reveal" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="bg-[#285075] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg animate-bounce">
                  {process.step}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{process.title}</h4>
                <p className="text-sm text-gray-600">{process.description}</p>
                
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full border-t-2 border-dashed border-gray-300 -z-10"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 section-reveal">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our Steel Plant Services?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover-lift section-reveal">
              <CardContent className="space-y-4 p-0">
                <div className="bg-[#e6f0f7] w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                  <Award className="text-[#3d6d91]" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Quality Assurance</h3>
                <p className="text-gray-600">
                  ISO certified processes with rigorous quality control at every stage of fabrication.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 text-center hover-lift section-reveal">
              <CardContent className="space-y-4 p-0">
                <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                  <Clock className="text-orange-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Timely Delivery</h3>
                <p className="text-gray-600">
                  Advanced project management ensures on-time completion of steel plant projects.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 text-center hover-lift section-reveal">
              <CardContent className="space-y-4 p-0">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="text-green-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Safety First</h3>
                <p className="text-gray-600">
                  Comprehensive safety protocols and trained personnel ensure secure installations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#285075] text-white">
        <div className="container mx-auto px-4 text-center section-reveal">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Steel Plant Project?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact our steel plant experts today for a detailed consultation and competitive quotation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg pulse-glow hover:scale-105 transform transition-all duration-200"
              onClick={() => window.location.href = '/contact'}
            >
              Get Steel Plant Quote
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-[#285075] px-8 py-4 text-lg hover:scale-105 transform transition-all duration-200"
              onClick={() => window.open('tel:+918700849865')}
            >
              Call: +91-8700849865
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SteelPlantsService;