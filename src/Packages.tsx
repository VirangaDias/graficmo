import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft, Check } from 'lucide-react';

const PackageSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const packages = [
    {
      title: "Free Package",
      price: "Free",
      period: "One-time",
      description: "Perfect for small businesses just getting started",
      features: [
        "Designing Bussiness Logo",
        "Designing Facebook Cover Page",
        "Social Media Setup",
        "Designing First Post/Flyer",
        
      ],
      isPopular: false
    },
    {
      title: "Starter Package",
      price: "LKR 5,990",
      period: "monthly",
      description: "Ideal for businesses looking to expand their digital presence",
      features: [
        "Everything in Free Package",
        "Basic SEO Optimization",
        "Content Calendar Creation",
        "Designing 3 Posts",
        "One Social Media Platform Management"
      ],
      isPopular: false
    },
    {
      title: "Growth Package",
      price: "LKR 9,990",
      period: "monthly",
      description: "The Best Solutions to Establish Your Business in the Market!",
      features: [
        "Everything in Starter",
        "Designing 5 Posts",
        "1 short video",
        "Market Analyzing",
        "Imtermediate Level SEO Optimization",
        "2 Social Media Platforms Management",
      ],
      isPopular: true
    },
    {
      title: "Premium Package",
      price: "19,990",
      period: "monthly",
      description: "Tailored solutions for large businesses and corporations",
      features: [
        "Everything in Growth Package",
        "Designing 9 Posts",
        "Brand Identity Development",
        "3 Social Media Platforms Management",
        "Full Marketing Strategy",
        "Unlimited Revisions",
      ],
      isPopular: false
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === packages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? packages.length - 1 : prevIndex - 1
    );
  };

  // Calculate which cards to show (current + next 2 for desktop)
  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % packages.length;
      cards.push({...packages[index], index});
    }
    return cards;
  };

  const visibleCards = getVisibleCards();

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Our Marketing Packages</h2>
          <p className="text-xl text-purple-600 max-w-2xl mx-auto font-semibold">
            Choose the perfect package that suits your business needs and goals
          </p>
        </div>

        <div className="relative">
          {/* Left Arrow */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-0 z-20 bg-purple-600 p-3 rounded-full shadow-lg text-white hover:bg-purple-100 hover:text-purple-600 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          {/* Cards Container */}
          <div className="flex items-stretch justify-center gap-8 overflow-hidden pb-2">
            {visibleCards.map((pkg, idx) => (
              <motion.div
                key={`${pkg.title}-${pkg.index}`}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className={`bg-[#FFD700] bg-opacity-40 rounded-2xl shadow-2xl overflow-hidden min-w-64 w-full max-w-sm flex-grow relative ${idx === 1 ? 'md:scale-105 z-10' : ''}`}
              >
                {pkg.isPopular && (
                  <div className="absolute top-0 right-0 bg-purple-600 text-white text-sm py-1 px-3 rounded-bl-lg">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-2">{pkg.title}</h3>
                  <div className="flex items-end mb-6">
                    <span className="text-4xl font-bold text-purple-600">{pkg.price}</span>
                    <span className="text-gray-500 ml-2">/{pkg.period}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{pkg.description}</p>
                  <div className="border-t border-gray-200 pt-6 mb-6">
                    <ul className="space-y-3">
                      {pkg.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="bg-white p-1 rounded-full mt-0.5">
                            <Check className="w-4 h-4 text-purple-600" />
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                      pkg.isPopular 
                        ? 'bg-purple-600 text-white hover:bg-purple-700' 
                        : 'bg-purple-100 text-purple-600 hover:bg-purple-200'
                    }`}
                  >
                    Get Started
                  </motion.button> */}
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Right Arrow */}
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-0 z-20 bg-purple-600 p-3 rounded-full shadow-lg text-white hover:bg-purple-100 hover:text-purple-600 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        
        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {packages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition-colors ${
                idx === currentIndex ? 'bg-[#FFD700]' : 'bg-gray-400 hover:bg-gray-300'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
        <div className="flex justify-center my-4 text-lg ">
          <div className='text-purple-600 font-semibold'>📩 If you're interested in <strong> subscribing</strong> to our services or any questions,feel free to send us a message below or connect with us on social media</div>
        </div>
      </div>
    </section>
  );
};

export default PackageSection;