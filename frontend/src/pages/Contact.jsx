import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';
import { Phone, Mail, MapPin, Clock, Users, Award, Target } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-[#f5f9fc] py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-[#3d6d91] border-[#cce0ed]">
              Contact Us
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Let's Discuss Your Project
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Ready to start your fabrication project? Our expert team is here to provide consultation, 
              detailed quotes, and professional guidance for all your industrial fabrication needs.
            </p>
          </div>

          {/* Quick Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4 p-0">
                <div className="bg-[#e6f0f7] w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <Phone className="text-[#3d6d91]" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Call Us</h3>
                <p className="text-gray-600">+91-8851013535</p>
                <p className="text-sm text-gray-500">Shubham Panchal</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4 p-0">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <Mail className="text-orange-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Email Us</h3>
                <p className="text-gray-600">sspfabricators@gmail.com</p>
                <p className="text-sm text-gray-500">Quick Response</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4 p-0">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <MapPin className="text-green-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Visit Us</h3>
                <p className="text-gray-600">Industrial Area</p>
                <p className="text-sm text-gray-500">Delhi NCR, India</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <ContactSection />

      {/* Additional Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Why Partner with SSP Fabricators?
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  With 17+ years of industry experience, we bring unmatched expertise and reliability 
                  to every fabrication project. Our commitment to quality, safety, and client satisfaction 
                  has made us the preferred choice for leading companies.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#e6f0f7] p-3 rounded-lg">
                    <Users className="text-[#3d6d91]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Team</h3>
                    <p className="text-gray-600">
                      Our skilled workforce brings decades of combined experience in fabrication and erection services.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Award className="text-orange-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Excellence</h3>
                    <p className="text-gray-600">
                      We maintain the highest quality standards with rigorous testing and quality assurance processes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Target className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Timely Delivery</h3>
                    <p className="text-gray-600">
                      Our efficient project management ensures on-time completion without compromising on quality.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="SSP Fabricators Workshop"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              
              {/* Overlay Stats */}
              <Card className="absolute -bottom-8 -left-8 bg-white shadow-xl">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-[#285075] mb-1">17+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;