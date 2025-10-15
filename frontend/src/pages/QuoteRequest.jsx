import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { CheckCircle, Upload, FileText, Clock } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import useScrollAnimation from '../hooks/useScrollAnimation';

const QuoteRequest = () => {
  const { toast } = useToast();
  useScrollAnimation();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceType: '',
    projectLocation: '',
    projectTimeline: '',
    projectBudget: '',
    projectDetails: '',
    requirements: '',
    drawings: null
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      drawings: e.target.files[0]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mock form submission
    toast({
      title: "Quote Request Submitted!",
      description: "We'll review your requirements and send a detailed quotation within 24 hours.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      serviceType: '',
      projectLocation: '',
      projectTimeline: '',
      projectBudget: '',
      projectDetails: '',
      requirements: '',
      drawings: null
    });
  };

  const serviceTypes = [
    "Steel Plants",
    "Sugar Mill", 
    "Paper Mill",
    "Power House",
    "Sheet Metal Component",
    "Customized Fabrication",
    "Multiple Services"
  ];

  const timelines = [
    "Immediate (1-2 weeks)",
    "Short term (1-3 months)",
    "Medium term (3-6 months)", 
    "Long term (6+ months)",
    "Flexible timeline"
  ];

  const budgetRanges = [
    "Under ₹5 Lakhs",
    "₹5-20 Lakhs",
    "₹20-50 Lakhs",
    "₹50 Lakhs - ₹1 Crore",
    "₹1-5 Crores",
    "Above ₹5 Crores"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-[#f5f9fc] py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 section-reveal">
            <Badge variant="outline" className="mb-4 text-[#3d6d91] border-[#cce0ed]">
              Get Quote
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Request Detailed Quotation
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Get a comprehensive quotation for your fabrication project. Our experts will analyze your requirements 
              and provide competitive pricing with detailed specifications.
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto section-reveal">
            <div className="text-center">
              <div className="bg-[#e6f0f7] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="text-[#3d6d91]" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Submit Requirements</h3>
              <p className="text-gray-600">Fill out detailed project requirements and specifications</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-orange-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Review</h3>
              <p className="text-gray-600">Our engineers analyze and evaluate your project needs</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-green-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Receive Quote</h3>
              <p className="text-gray-600">Get detailed quotation within 24-48 hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-2xl section-reveal">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Project Details Form</h2>
                
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-900 border-b pb-2">Contact Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          required
                          className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email"
                          required
                          className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+91 XXXXX XXXXX"
                          required
                          className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Company Name
                        </label>
                        <Input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Your company name"
                          className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Project Information */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-900 border-b pb-2">Project Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Service Type *
                        </label>
                        <Select onValueChange={(value) => handleSelectChange('serviceType', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select service type" />
                          </SelectTrigger>
                          <SelectContent>
                            {serviceTypes.map((service) => (
                              <SelectItem key={service} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Project Location *
                        </label>
                        <Input
                          type="text"
                          name="projectLocation"
                          value={formData.projectLocation}
                          onChange={handleInputChange}
                          placeholder="City, State"
                          required
                          className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Project Timeline
                        </label>
                        <Select onValueChange={(value) => handleSelectChange('projectTimeline', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select timeline" />
                          </SelectTrigger>
                          <SelectContent>
                            {timelines.map((timeline) => (
                              <SelectItem key={timeline} value={timeline}>
                                {timeline}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Estimated Budget
                        </label>
                        <Select onValueChange={(value) => handleSelectChange('projectBudget', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            {budgetRanges.map((budget) => (
                              <SelectItem key={budget} value={budget}>
                                {budget}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-900 border-b pb-2">Project Specifications</h3>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Project Description *
                      </label>
                      <Textarea
                        name="projectDetails"
                        value={formData.projectDetails}
                        onChange={handleInputChange}
                        placeholder="Describe your project in detail..."
                        rows={4}
                        required
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Specific Requirements
                      </label>
                      <Textarea
                        name="requirements"
                        value={formData.requirements}
                        onChange={handleInputChange}
                        placeholder="Any specific requirements, materials, standards, etc..."
                        rows={3}
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Upload Drawings/Documents
                      </label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors">
                        <Upload className="mx-auto text-gray-400 mb-4" size={48} />
                        <input
                          type="file"
                          onChange={handleFileChange}
                          accept=".pdf,.dwg,.jpg,.jpeg,.png"
                          className="hidden"
                          id="file-upload"
                        />
                        <label htmlFor="file-upload" className="cursor-pointer">
                          <span className="text-[#3d6d91] hover:text-[#2f5a75] font-medium">
                            Click to upload files
                          </span>
                          <p className="text-gray-500 text-sm mt-2">
                            PDF, DWG, JPG, PNG up to 10MB
                          </p>
                        </label>
                        {formData.drawings && (
                          <p className="text-green-600 mt-2">File selected: {formData.drawings.name}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 text-lg pulse-glow hover:scale-105 transform transition-all duration-200"
                  >
                    Submit Quote Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QuoteRequest;