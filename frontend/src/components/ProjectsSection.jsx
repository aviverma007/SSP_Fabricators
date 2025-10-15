import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { projects } from '../mock/data';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('Show All');

  const categories = [
    'Show All',
    'Steel plants',
    'Sugar Mill', 
    'Paper Mill',
    'Power House',
    'Structural fabrication',
    'Customized Fabrication'
  ];

  const filteredProjects = activeFilter === 'Show All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-[#3d6d91] border-[#cce0ed]">
            Work of Excellence
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Recent Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcase of our successful fabrication projects across various industrial sectors, 
            demonstrating our expertise and commitment to quality.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? "default" : "outline"}
              onClick={() => setActiveFilter(category)}
              className={activeFilter === category 
                ? "bg-[#285075] hover:bg-[#285075]" 
                : "border-gray-300 hover:border-[#3d6d91] hover:text-[#3d6d91]"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card key={project.id} className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden scroll-animate hover-lift`} style={{animationDelay: `${index * 0.1}s`}}>
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge className="mb-2 bg-white/20 text-white border-white/30">
                      {project.category}
                    </Badge>
                    <Button 
                      size="sm" 
                      className="bg-orange-500 hover:bg-orange-600 text-white w-full"
                      onClick={() => window.location.href = '/contact'}
                    >
                      Get Similar Quote
                    </Button>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-600">{project.type}</span>
                  <Badge variant="outline" className="text-[#3d6d91] border-[#cce0ed]">
                    {project.client}
                  </Badge>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Professional fabrication and installation services delivered with precision and quality standards.
                </p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full border-[#3d6d91] text-[#3d6d91] hover:bg-[#3d6d91] hover:text-white transform hover:scale-105 transition-all duration-200"
                  onClick={() => window.location.href = '/contact'}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-20 bg-[#285075] text-white rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-[#b8d4e6]">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-[#b8d4e6]">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-[#b8d4e6]">Expert Team</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 section-reveal">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Have a Project in Mind?</h3>
          <p className="text-gray-600 mb-8">
            Let's discuss your fabrication requirements and turn your vision into reality.
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
              onClick={() => window.location.href = '/contact'}
            >
              Start Your Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;