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
          <Badge variant="outline" className="mb-4 text-blue-600 border-blue-200">
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
                ? "bg-blue-900 hover:bg-blue-800" 
                : "border-gray-300 hover:border-blue-600 hover:text-blue-600"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
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
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-600">{project.type}</span>
                  <Badge variant="outline" className="text-blue-600 border-blue-200">
                    {project.client}
                  </Badge>
                </div>
                <p className="text-gray-600 text-sm">
                  Professional fabrication and installation services delivered with precision and quality standards.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-20 bg-blue-900 text-white rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">17+</div>
              <div className="text-blue-200">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-200">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-blue-200">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-200">Expert Team</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Have a Project in Mind?</h3>
          <p className="text-gray-600 mb-8">
            Let's discuss your fabrication requirements and turn your vision into reality.
          </p>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8">
            Start Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;