import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../mock/data';

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-[#3d6d91] border-[#cce0ed]">
            Testimonials
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients about their experience 
            working with SSP Fabricators on their projects.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="relative bg-white hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
              {/* Quote Icon */}
              <div className="absolute -top-4 left-6">
                <div className="bg-[#285075] text-white p-3 rounded-full">
                  <Quote size={24} />
                </div>
              </div>

              <CardContent className="pt-12 p-8">
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <Star key={index} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-600 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author Info */}
                <div className="border-t pt-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#e6f0f7] rounded-full flex items-center justify-center">
                      <span className="font-bold text-[#285075]">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.designation}</p>
                      <p className="text-xs text-[#3d6d91] font-medium">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Testimonials Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-[#285075] text-white border-0">
            <CardContent className="p-8">
              <Quote className="text-blue-300 mb-4" size={32} />
              <p className="text-lg mb-6 italic">
                "SSP Fabricators has been our trusted partner for multiple projects. Their commitment 
                to quality and timely delivery makes them stand out in the industry."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#2f5a75] rounded-full flex items-center justify-center">
                  <span className="font-bold">M</span>
                </div>
                <div>
                  <h4 className="font-bold">Manoj Gupta</h4>
                  <p className="text-blue-200">Site Manager, G.D.C.L</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-orange-500 text-white border-0">
            <CardContent className="p-8">
              <Quote className="text-orange-200 mb-4" size={32} />
              <p className="text-lg mb-6 italic">
                "Exceptional service quality and professional approach. SSP Fabricators delivered 
                our project ahead of schedule with outstanding results."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center">
                  <span className="font-bold">S</span>
                </div>
                <div>
                  <h4 className="font-bold">Sunita Sharma</h4>
                  <p className="text-orange-100">Project Coordinator, C.E.C.C</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Join Our Happy Clients?</h3>
          <p className="text-gray-600 mb-8">
            Experience the SSP Fabricators difference in your next project. Contact us today for a consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Get Your Quote
            </button>
            <button className="border border-[#3d6d91] text-[#3d6d91] hover:bg-[#3d6d91] hover:text-white px-8 py-3 rounded-lg font-medium transition-colors">
              View All Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;