import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutSection from '../components/AboutSection';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';
import { CheckCircle, Users, Award, Target, Shield, Factory } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-[#f5f9fc] py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-[#3d6d91] border-[#cce0ed]">
              About SSP Fabricators
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Excellence in Fabrication
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              <strong className="text-orange-500">YOU THINK, WE MAKE</strong><br/>
              SSP Fabricators emerged as one of the distinguished manufacturers in the fabrication sectors. 
              We are highly experienced suppliers, architects, welders, and builders in the fabrication field.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#285075] mb-2">500+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#285075] mb-2">200+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#285075] mb-2">50+</div>
              <div className="text-gray-600">Expert Team</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <AboutSection />

      {/* Company Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Company Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide us in delivering exceptional fabrication services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8">
              <CardContent className="space-y-4 p-0">
                <div className="bg-[#e6f0f7] w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                  <Award className="text-[#3d6d91]" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Excellence</h3>
                <p className="text-gray-600">
                  We strive for excellence in every project, ensuring the highest quality standards 
                  and precision in our fabrication work.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8">
              <CardContent className="space-y-4 p-0">
                <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                  <Users className="text-orange-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Partnerships</h3>
                <p className="text-gray-600">
                  We build long-lasting partnerships with our clients, focusing on mutual growth 
                  and trust through transparent communication.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8">
              <CardContent className="space-y-4 p-0">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                  <Target className="text-green-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Commitment</h3>
                <p className="text-gray-600">
                  Our unwavering commitment to deadlines, quality, and client satisfaction 
                  drives everything we do.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Leadership</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the visionary leader behind SSP Fabricators' success
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <CardContent className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center p-0">
                <div className="text-center lg:text-left">
                  <div className="w-32 h-32 bg-[#285075] rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-4">
                    <span className="text-4xl font-bold text-white">SP</span>
                  </div>
                </div>
                
                <div className="lg:col-span-2 text-center lg:text-left">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Shubham Panchal</h3>
                  <p className="text-xl text-orange-500 font-medium mb-4">Proprietor & Founder</p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    With extensive experience in the fabrication industry, Shubham Panchal 
                    has built SSP Fabricators from the ground up, establishing it as a trusted name 
                    in heavy steel fabrication across Delhi NCR and beyond.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="text-green-500" size={16} />
                      <span className="text-sm text-gray-600">Industry Expert</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="text-green-500" size={16} />
                      <span className="text-sm text-gray-600">Safety Advocate</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="text-green-500" size={16} />
                      <span className="text-sm text-gray-600">Quality Focused</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;