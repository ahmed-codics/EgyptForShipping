import React, { useState, useEffect } from "react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    // Add the Google Fonts stylesheet for Borel
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Borel&display=swap';
    document.head.appendChild(link);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
      style={{ marginTop: '-80px', paddingTop: '80px' }} // This compensates for fixed navbar
    >
      {/* Background with parallax effect */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <img
          src="/airplane2.jpg"
          alt="Express Delivery"
          className="absolute top-0 left-0 w-full h-full object-cover" // Removed scale-110
          style={{ objectPosition: 'center center' }}
        />
        
        {/* Animated overlay gradient */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/70 via-blue-800/40 to-blue-900/60"></div>
        
        {/* Subtle animated elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-overlay filter blur-xl animate-pulse"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl">
        {/* Main heading with Borel font */}
        <h1 className={`text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} mb-4`}>
          <span className="block text-yellow-300 drop-shadow-md font-borel">
            Egypt
          </span>
          <span className="block mt-2 text-yellow-400 drop-shadow-md font-borel">
            For Shipping
          </span>
        </h1>

        {/* Subheading */}
        <p className="mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium drop-shadow-md transition-all duration-1000 delay-300 text-white">
          نوصّل شحنتك بسرعة وأمان لأي مكان 🌍
        </p>
        
        {/* CTA Button with improved styling */}
        <div className="mt-8 sm:mt-10 transition-all duration-1000 delay-500">
          <a
            href="tel:+201111458668"
            className="inline-flex items-center bg-gradient-to-r from-yellow-500 to-yellow-700 hover:from-yellow-600 hover:to-yellow-800 text-white text-base sm:text-lg md:text-xl font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group"
          >
            <span>اتصل بنا الآن</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 group-hover:animate-pulse" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
          </a>
        </div>
        
        {/* Additional info badges */}
        <div className="mt-10 flex flex-wrap justify-center gap-4 transition-all duration-1000 delay-700">
          <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-300 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium text-white">تسليم سريع</span>
          </div>
          <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-300 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium text-white">تتبع الشحنات</span>
          </div>
          <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-300 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium text-white">خدمة آمنة</span>
          </div>
        </div>
      </div>

      {/* Add Borel font styling */}
      <style jsx>{`
        .font-borel {
          font-family: 'Borel', cursive;
        }
        #hero {
          margin-top: -80px;
          padding-top: 80px;
        }
      `}</style>
    </section>
  );
};

export default Hero;