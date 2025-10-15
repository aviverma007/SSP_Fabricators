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
      image: "/project1.jpg",
      bg: "from-slate-50 to-[#f5f9fc]"
    },
    {
      title: "World Class Service",
      subtitle: "We Build Your Dreams",
      description: "Get Perfect Fabrication Industry - A Combination of Fast Blending Metal Fabrication with precision engineering and safety standards.",
      image: "/project2.jpg",
      bg: "from-[#f5f9fc] to-orange-50"
    },
    {
      title: "Meet Our Super Architect Team", 
      subtitle: "No One Better Than Us",
      description: "Get Complete Fabrication with Modern Shapes - 17+ years of excellence in heavy steel fabrication across multiple industries.",
      image: "/project3.jpg",
      bg: "from-orange-50 to-green-50"
    },
    {
      title: "Excellence in Heavy Fabrication",
      subtitle: "Building The Future",
      description: "Delivering superior quality steel fabrication solutions with cutting-edge technology and experienced workforce.",
      image: "/project4.jpg",
      bg: "from-green-50 to-purple-50"
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
        }, 1000);
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
        <div className="absolute top-20 left-20 w-32 h-32 bg-[#b8d4e6] rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-60 right-32 w-24 h-24 bg-orange-200 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute bottom-40 left-1/3 w-20 h-20 bg-green-200 rounded-full opacity-20 animate-ping"></div>
      </div>

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-[#5a8fb3] rounded-full opacity-30 animate-float-${i % 3 + 1}`}
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
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight min-h-[200px]">
                <span className="typing-text">
                  {displayedTitle}
                  {isTyping && !titleComplete && <span className="typing-cursor animate-pulse">|</span>}
                </span>
                <span className="text-[#285075] block">
                  {displayedSubtitle}
                  {isTyping && titleComplete && displayedSubtitle.length < currentHero.subtitle.length && <span className="typing-cursor animate-pulse">|</span>}
                  {isDeleting && displayedSubtitle.length > 0 && <span className="typing-cursor animate-pulse">|</span>}
                </span>
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
                className="border-[#285075] text-[#285075] hover:bg-[#285075] hover:text-white px-8 py-4 text-lg transform hover:scale-105 transition-all duration-200"
                onClick={scrollToAbout}
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in-right animation-delay-400">
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-500 overflow-hidden">
              {/* Image Container with overlay effects */}
              <div className="relative w-full h-96 rounded-lg overflow-hidden">
                {heroSlides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-1500 ease-in-out ${
                      index === currentSlide 
                        ? imageTransition 
                          ? 'opacity-0 scale-110' 
                          : 'opacity-100 scale-100'
                        : index === (currentSlide - 1 + heroSlides.length) % heroSlides.length
                        ? imageTransition
                          ? 'opacity-30 scale-105'
                          : 'opacity-0 scale-95'
                        : 'opacity-0 scale-95'
                    }`}
                    style={{
                      transform: index === currentSlide && !imageTransition 
                        ? 'scale(1) rotate(0deg)' 
                        : index === currentSlide && imageTransition
                        ? 'scale(1.1) rotate(0.5deg)'
                        : 'scale(0.95) rotate(-0.5deg)',
                      filter: index === currentSlide && !imageTransition 
                        ? 'blur(0px) brightness(1) saturate(1)' 
                        : imageTransition
                        ? 'blur(8px) brightness(0.6) saturate(1.2)'
                        : 'blur(4px) brightness(0.5) saturate(0.8)'
                    }}
                  >
                    <img
                      src={slide.image}
                      alt={`Steel Fabrication Work ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Overlay gradient for smooth transitions */}
                    <div 
                      className={`absolute inset-0 transition-opacity duration-1500 ${
                        index === currentSlide && imageTransition 
                          ? 'opacity-80' 
                          : index === currentSlide
                          ? 'opacity-0'
                          : 'opacity-60'
                      }`}
                      style={{
                        background: index === currentSlide 
                          ? 'linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(249, 115, 22, 0.1))'
                          : 'linear-gradient(45deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1))'
                      }}
                    ></div>
                    
                    {/* Shimmer effect during transitions */}
                    {imageTransition && index === currentSlide && (
                      <div className="absolute inset-0 shimmer opacity-20"></div>
                    )}
                  </div>
                ))}
                
                {/* Gradient overlay for smooth transitions */}
                <div className={`absolute inset-0 bg-gradient-to-r from-[#f5f9fc]0/10 to-orange-500/10 transition-opacity duration-1000 ${
                  imageTransition ? 'opacity-100' : 'opacity-0'
                }`}></div>
              </div>
              
              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-[#285075] text-white p-6 rounded-lg shadow-xl animate-float-1 z-10">
                <div className="text-3xl font-bold">17+</div>
                <div className="text-sm">Years Experience</div>
              </div>
              
              {/* Floating Quality Badge */}
              <div className="absolute -top-6 -right-6 bg-orange-500 text-white p-4 rounded-full shadow-xl animate-float-2 z-10">
                <CheckCircle size={32} />
              </div>
              
              {/* Animated particles overlay */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className={`absolute rounded-full transition-all duration-1500 ${
                      imageTransition 
                        ? 'animate-ping opacity-80' 
                        : 'opacity-20 animate-pulse'
                    }`}
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      width: imageTransition ? '6px' : '2px',
                      height: imageTransition ? '6px' : '2px',
                      backgroundColor: imageTransition 
                        ? `hsl(${Math.random() * 360}, 70%, 80%)` 
                        : 'rgba(255, 255, 255, 0.6)',
                      animationDelay: `${i * 0.15}s`,
                      animationDuration: imageTransition ? '0.8s' : '2s'
                    }}
                  ></div>
                ))}
                
                {/* Floating geometric shapes */}
                {imageTransition && [...Array(6)].map((_, i) => (
                  <div
                    key={`shape-${i}`}
                    className="absolute animate-float-1 opacity-30"
                    style={{
                      left: `${Math.random() * 90}%`,
                      top: `${Math.random() * 90}%`,
                      width: '8px',
                      height: '8px',
                      backgroundColor: i % 2 === 0 ? '#3B82F6' : '#F97316',
                      borderRadius: i % 3 === 0 ? '50%' : '0%',
                      animationDelay: `${i * 0.3}s`,
                      animationDuration: '2s'
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center mt-8">
          <div className="bg-gray-200 rounded-full h-2 w-80 overflow-hidden shadow-inner">
            <div 
              className="bg-gradient-to-r from-[#3d6d91] via-purple-600 to-orange-500 h-full rounded-full transition-all duration-500 relative"
              style={{
                width: `${((currentSlide + 1) / heroSlides.length) * 100}%`
              }}
            >
              <div className="absolute inset-0 bg-white opacity-20 animate-pulse rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;