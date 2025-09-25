import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { CheckCircle, Users, Award, Target, Shield } from 'lucide-react';

const AboutSection = () => {
  const strengths = [
    {
      icon: <Users className="text-blue-600" size={24} />,
      title: "Skilled & Experienced Workforce",
      description: "Our team brings decades of expertise in fabrication and erection services."
    },
    {
      icon: <Award className="text-orange-500" size={24} />,
      title: "Quality Workmanship", 
      description: "We maintain the highest standards of quality in every project we undertake."
    },
    {
      icon: <Shield className="text-green-500" size={24} />,
      title: "Safety-Oriented Approach",
      description: "Safety is our top priority with comprehensive safety protocols and training."
    },
    {
      icon: <Target className="text-purple-500" size={24} />,
      title: "Timely Execution",
      description: "We pride ourselves on delivering projects on time, every time."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-blue-600 border-blue-200">
            About Us
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Fast Delivery with Perfect Fabrication
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            SSP Fabricators emerged as one of the distinguished manufacturers in the fabrication sectors. 
            We are highly experienced suppliers, architects, welders, and builders in the fabrication field.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Heavy Steel Fabrication Company
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We are a growing company providing <strong>Fabrication & Erection services</strong> in the mechanical industry. 
                Our expertise covers Sugar Mill, Paper Mill, Power House, Steel Plants and all type of fabrication & erection.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With skilled manpower, proper tools, and a focus on safety, we ensure timely and reliable project execution. 
                Adding this with the latest technology of a brand, we provide you with detailed quality coating fabrication.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                <span className="text-sm text-gray-700">Excellence in Work</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                <span className="text-sm text-gray-700">Strong Partnerships</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                <span className="text-sm text-gray-700">Commitment Driven</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                <span className="text-sm text-gray-700">Professional Team</span>
              </div>
            </div>

            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              Request Quote
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Steel Fabrication Workshop"
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
            
            {/* Overlay Card */}
            <Card className="absolute -bottom-8 -left-8 bg-white shadow-xl">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-blue-900">17+</div>
                <div className="text-sm text-gray-600">Years of Excellence</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Our Strengths */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Strengths</h3>
            <p className="text-gray-600">What makes us the preferred choice for fabrication services</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {strengths.map((strength, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4 p-0">
                  <div className="flex justify-center">{strength.icon}</div>
                  <h4 className="font-semibold text-gray-900">{strength.title}</h4>
                  <p className="text-sm text-gray-600">{strength.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Work Process */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Work Approach</h3>
            <p className="text-gray-600">A systematic approach to deliver excellence in every project</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { step: "01", title: "Understanding Client Requirement", desc: "Thorough requirement analysis" },
              { step: "02", title: "Planning & Resource Allocation", desc: "Strategic planning and resource mapping" },
              { step: "03", title: "Fabrication / Site Preparation", desc: "Precision fabrication and site prep" },
              { step: "04", title: "Erection & Installation", desc: "Professional installation services" },
              { step: "05", title: "Testing & Handover", desc: "Quality testing and project handover" }
            ].map((process, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-blue-900 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  {process.step}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{process.title}</h4>
                <p className="text-sm text-gray-600">{process.desc}</p>
                
                {index < 4 && (
                  <div className="hidden md:block absolute top-8 left-full w-full border-t-2 border-dashed border-gray-300 -z-10"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;