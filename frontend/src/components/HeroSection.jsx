import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [displayedTitle, setDisplayedTitle] = useState('');
  const [displayedSubtitle, setDisplayedSubtitle] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const [titleComplete, setTitleComplete] = useState(false);
  const [imageTransition, setImageTransition] = useState(false);
  
  const heroSlides = [
    {
      title: "We Fabricate Your Industry with",
      subtitle: "Solid Transformation", 
      description: "SSP Fabricators - Your trusted partner for Steel Plants, Sugar Mills, Paper Mills, Power Houses and all types of customized fabrication & site works.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      bg: "from-slate-50 to-blue-50"
    },
    {
      title: "World Class Service",
      subtitle: "We Build Your Dreams",
      description: "Get Perfect Fabrication Industry - A Combination of Fast Blending Metal Fabrication with precision engineering and safety standards.",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      bg: "from-blue-50 to-orange-50"
    },
    {
      title: "Meet Our Super Architect Team", 
      subtitle: "No One Better Than Us",
      description: "Get Complete Fabrication with Modern Shapes - 17+ years of excellence in heavy steel fabrication across multiple industries.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      bg: "from-orange-50 to-green-50"
    }
  ];

  // Typing effect logic
  useEffect(() => {
    const currentHero = heroSlides[currentSlide];
    let timeoutId;

    if (isTyping && !isDeleting) {
      // Typing title
      if (displayedTitle.length < currentHero.title.length) {
        timeoutId = setTimeout(() => {
          setDisplayedTitle(currentHero.title.slice(0, displayedTitle.length + 1));
        }, 100);
      } else if (!titleComplete) {
        setTitleComplete(true);
        // Start typing subtitle after title is complete
        timeoutId = setTimeout(() => {
          if (displayedSubtitle.length < currentHero.subtitle.length) {
            setDisplayedSubtitle(currentHero.subtitle.slice(0, displayedSubtitle.length + 1));
          }
        }, 200);
      } else if (displayedSubtitle.length < currentHero.subtitle.length) {
        // Continue typing subtitle
        timeoutId = setTimeout(() => {
          setDisplayedSubtitle(currentHero.subtitle.slice(0, displayedSubtitle.length + 1));
        }, 100);
      } else {
        // Both title and subtitle complete, wait then start deleting
        timeoutId = setTimeout(() => {
          setIsDeleting(true);
          setIsTyping(false);
        }, 3000);
      }
    } else if (isDeleting) {
      // Deleting subtitle first
      if (displayedSubtitle.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayedSubtitle(displayedSubtitle.slice(0, -1));
        }, 50);
      } else if (displayedTitle.length > 0) {
        // Delete title after subtitle is deleted
        timeoutId = setTimeout(() => {
          setDisplayedTitle(displayedTitle.slice(0, -1));
        }, 50);
      } else {
        // Both deleted, move to next slide
        setIsDeleting(false);
        setIsTyping(true);
        setTitleComplete(false);
        setImageTransition(true);
        
        timeoutId = setTimeout(() => {
          setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
          setImageTransition(false);
        }, 500);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [displayedTitle, displayedSubtitle, isTyping, isDeleting, titleComplete, currentSlide]);

  const currentHero = heroSlides[currentSlide];

  const scrollToContact = () => {
    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={`relative min-h-screen bg-gradient-to-br ${currentHero.bg} flex items-center overflow-hidden transition-all duration-1000`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-60 right-32 w-24 h-24 bg-orange-200 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute bottom-40 left-1/3 w-20 h-20 bg-green-200 rounded-full opacity-20 animate-ping"></div>
      </div>

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-blue-400 rounded-full opacity-30 animate-float-${i % 3 + 1}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <div className="inline-block bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium animate-slide-in-left">
                17 Years Fabrication Excellence
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight animate-slide-in-left animation-delay-200">
                {currentHero.title} 
                <span className="text-blue-900 block animate-slide-in-right animation-delay-400">{currentHero.subtitle}</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed animate-fade-in animation-delay-600">
                <strong className="text-orange-500">YOU THINK, WE MAKE</strong><br/>
                {currentHero.description}
              </p>
            </div>

            {/* Key Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-in-up animation-delay-800">
              <div className="flex items-center gap-3 hover:transform hover:scale-105 transition-transform duration-200">
                <CheckCircle className="text-green-500 flex-shrink-0 animate-bounce" size={20} />
                <span className="text-gray-700">Skilled & Experienced Workforce</span>
              </div>
              <div className="flex items-center gap-3 hover:transform hover:scale-105 transition-transform duration-200">
                <CheckCircle className="text-green-500 flex-shrink-0 animate-bounce animation-delay-100" size={20} />
                <span className="text-gray-700">Quality Workmanship</span>
              </div>
              <div className="flex items-center gap-3 hover:transform hover:scale-105 transition-transform duration-200">
                <CheckCircle className="text-green-500 flex-shrink-0 animate-bounce animation-delay-200" size={20} />
                <span className="text-gray-700">Safety-Oriented Approach</span>
              </div>
              <div className="flex items-center gap-3 hover:transform hover:scale-105 transition-transform duration-200">
                <CheckCircle className="text-green-500 flex-shrink-0 animate-bounce animation-delay-300" size={20} />
                <span className="text-gray-700">Timely Execution</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-1000">
              <Button 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                onClick={scrollToContact}
              >
                Contact Now
                <ArrowRight size={20} className="ml-2 animate-pulse" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white px-8 py-4 text-lg transform hover:scale-105 transition-all duration-200"
                onClick={scrollToAbout}
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in-right animation-delay-400">
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-500">
              <img
                src={currentHero.image}
                alt="Steel Fabrication Work"
                className="w-full h-96 object-cover rounded-lg transition-all duration-1000"
              />
              
              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-blue-900 text-white p-6 rounded-lg shadow-xl animate-float-1">
                <div className="text-3xl font-bold">17+</div>
                <div className="text-sm">Years Experience</div>
              </div>
              
              {/* Floating Quality Badge */}
              <div className="absolute -top-6 -right-6 bg-orange-500 text-white p-4 rounded-full shadow-xl animate-float-2">
                <CheckCircle size={32} />
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-blue-900 w-8' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;