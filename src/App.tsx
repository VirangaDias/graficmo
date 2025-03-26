import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Rocket, Target, ChevronRight, MessageSquare, BarChart, 
  Zap, Heart, Sparkles, DollarSign,  Globe2,
   GitBranch as Trophy,  
   Camera} from 'lucide-react';
import PackageSection from './Packages';
import { FaFacebook,  FaInstagram , FaLinkedin,FaTiktok, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ContactForm from './ContactUs';
import logo from "./Images/logo-without bg.png";

const heroImages = [
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200",
  "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200"
];

const services = [
  {
    icon: <Camera className="w-8 h-8" />,
    title: "Creating Promotional Videos",
    description: "Engaging and high-quality promotional videos to showcase your brand and captivate your audience.",
    stats: { value: 0, target: 89, label: "Success Rate" }
  },
  {
    icon: <BarChart className="w-8 h-8" />,
    title: "Analytics & SEO",
    description: "Data-driven optimization strategies for enhanced engagement and maximum online visibility across multiple digital platforms",
    stats: { value: 0, target: 95, label: "Growth Rate" }
  },
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: "Social Media Marketing",
    description: "Engaging and result-driven social media management with strategic growth techniques to boost brand awareness and audience engagement",
    stats: { value: 0, target: 92, label: "Engagement" }
  }
];

const features = [
  {
    icon: <Zap className="w-6 h-6 text-purple-600" />,
    title: "Fast Delivery",
    description: "Quick turnaround on all projects"
  },
  {
    icon: <Sparkles className="w-6 h-6 text-purple-600" />,
    title: "Best Service",
    description: "Premium quality service delivery"
  },
  {
    icon: <DollarSign className="w-6 h-6 text-purple-600" />,
    title: "Affordable Pricing",
    description: "Competitive rates for all services"
  },
  {
    icon: <Heart className="w-6 h-6 text-purple-600" />,
    title: "Customer Engagement",
    description: "Dedicated support and communication"
  }
];

const socialLinks = [
  { icon: <FaWhatsapp className="w-6 h-6" />, url: "https://wa.me/94766931773", label: "WhatsApp" },
  { icon: <FaFacebook className="w-6 h-6" />, url: "https://www.facebook.com/share/1CtmAPSPjm/", label: "Facebook" },
  { icon: <FaTiktok className="w-6 h-6" />, url: "https://www.tiktok.com/@graficmo?_t=ZS-8u3EXAU0HGC&_r=1", label: "TikTok" },
  { icon: <FaInstagram className="w-6 h-6" />, url: "https://www.instagram.com/graficmo?igsh=MWtoeGtmbXRpcG82Zw==", label: "Instagram" },
  { icon: <FaLinkedin className="w-6 h-6" />, url: "https://www.linkedin.com/company/105361871/admin/dashboard/", label: "LinkedIn" },
  { icon: <FaXTwitter  className="w-6 h-6" />, url: "https://x.com/graficmo25", label: "x" },
  { icon: <Globe2 className="w-6 h-6" />, url: "https://yourwebsite.com", label: "Website" },
  
];

function CircularProgress({ progress }: { progress: number }) {
  const circumference = 2 * Math.PI * 40;
  return (
    <div className="relative w-24 h-24">
      <svg className="transform -rotate-90 w-24 h-24">
        <circle
          className="text-gray-200"
          strokeWidth="8"
          stroke="currentColor"
          fill="transparent"
          r="40"
          cx="48"
          cy="48"
        />
        <circle
          className="text-purple-600"
          strokeWidth="8"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - (progress / 100) * circumference}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r="40"
          cx="48"
          cy="48"
        />
      </svg>
      <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold">
        {progress}%
      </span>
    </div>
  );
}

function App() {
  const [currentImage, setCurrentImage] = useState(0);
  const { scrollYProgress } = useScroll();
  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true });
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true });
  const [contactRef, contactInView] = useInView({ triggerOnce: true });

  const [serviceStats, setServiceStats] = useState(services.map(s => ({ ...s, stats: { ...s.stats, value: 0 } })));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (servicesInView) {
      const interval = setInterval(() => {
        setServiceStats(prev => 
          prev.map(service => ({
            ...service,
            stats: {
              ...service.stats,
              value: service.stats.value < service.stats.target ? service.stats.value + 1 : service.stats.value
            }
          }))
        );
      }, 30);
      return () => clearInterval(interval);
    }
  }, [servicesInView]);



  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="min-h-screen bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 text-white relative overflow-hidden"
      >
        <div className="container mx-auto px-2 py-16 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={heroInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              <div className="mb-8 ">
                <img src={logo} alt="logo" className="w-64 h-16" />
              </div>
              <motion.h1 
                className="text-4xl font-bold mb-6 text-[#FFD700]"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                Your One-stop solutions for all things digital !
              </motion.h1>
              <motion.p 
                className="text-xl mb-8 text-gray-200"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >We empower brands with innovative strategies,
               eye-catching designs, and compelling content to enhance online presence. Our tailored digital 
               solutions help you engage your audience,
               build trust, and drive business growth<br/><br/>
               <b>Upgrade Your Business with Graficmo!</b>
              </motion.p>
              {/* <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-900 px-8 py-4 rounded-full font-semibold flex items-center gap-2
                 hover:bg-purple-100 transition-colors"
                
              >
                Get Started <ArrowRight className="w-5 h-5" />
              </motion.button> */}
            </motion.div>

            {/* Hero Image Slider */}
            <div className="relative h-[500px] w-full">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImage}
                  src={heroImages[currentImage]}
                  alt="Digital Marketing"
                  className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-2xl"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                />
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        ref={aboutRef}
        className="py-24 bg-white "
        initial={{ opacity: 0 }}
        animate={aboutInView ? { opacity: 1 } : {}}
      >
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={aboutInView ? { x: 0, opacity: 1 } : {}}
              className="relative"
            >
              <motion.img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                initial={{ scale: 0 }}
                animate={aboutInView ? { scale: 1 } : {}}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Target className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Client Satisfaction</p>
                    <p className="text-2xl font-bold">98%</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={aboutInView ? { x: 0, opacity: 1 } : {}}
            >
              <h2 className="text-4xl font-bold mb-6">What is Graficmo ?</h2>
              <p className="text-gray-600 mb-8">
              We're a team of digital enthusiasts passionate about creating exceptional online experiences.
               As skilled content creators in digital marketing , 
              we help businesses thrive in the digital landscape.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-8">
                <motion.div 
                  className="flex items-center gap-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Sparkles className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold">Creative</p>
                    <p className="text-gray-600">Proactive Innovation</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Zap className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold">Fast Delivery</p>
                    <p className="text-gray-600">Quick Results</p>
                  </div>
                </motion.div>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <motion.div 
                  className="flex items-center gap-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Trophy className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold">Best Service</p>
                    <p className="text-gray-600">Premium Quality</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <DollarSign className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold">Affordable Pricing</p>
                    <p className="text-gray-600">Competitive Rates</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Heart className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold">Customer Engagement</p>
                    <p className="text-gray-600">Dedicated Support</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Target className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold">Results Driven</p>
                    <p className="text-gray-600">Proven Success</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        {/* Services Section */}
      <motion.section
        ref={servicesRef}
        className="py-12 px-8 bg-purple-900"
        initial={{ opacity: 0 }}
        animate={servicesInView ? { opacity: 1 } : {}}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#FFD700]">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {serviceStats.map((service, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={servicesInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-purple-100 p-4 rounded-xl w-fit mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="mb-6">
                  <CircularProgress progress={service.stats.value} />
                  <p className="mt-2 text-sm text-gray-600">{service.stats.label}</p>
                </div>
                {/* <motion.button
                  whileHover={{ gap: "0.75rem" }}
                  className="text-purple-600 font-semibold flex items-center gap-2 transition-all"
                >
                  Learn More <ChevronRight className="w-5 h-5" />
                </motion.button> */}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      {/* Packaging section */}
       < PackageSection/>
        {/* <FeedbackSection/> */}
      {/* Contact Section */}
      <motion.section
        ref={contactRef}
        className="py-8 bg-purple-900 text-white"
        initial={{ opacity: 0 }}
        animate={contactInView ? { opacity: 1 } : {}}
      >
      <section className='ContactUs'>
        <ContactForm contactInView={contactInView} />
      </section>        
      </motion.section>
      {/* Social Media Links */}
            <motion.div 
                initial={{ y: 50, opacity: 0 }}
                animate={aboutInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.6 }}
                className="flex justify-center gap-6 mt-16 pt-8 border-t border-gray-200"
              >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-100 p-4 rounded-full hover:bg-purple-200 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {React.cloneElement(link.icon, { className: "w-6 h-6 text-purple-600" })}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.section>
      
    </div>
  );
}

export default App;

function useRef(arg0: null) {
  throw new Error('Function not implemented.');
}

