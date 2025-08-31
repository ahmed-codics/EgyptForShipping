import React, { useState, useEffect } from "react";
import { Menu, X, Phone, Truck, Star, Users, Contact } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Logo + Company Name */}
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${scrolled ? 'bg-blue-100' : 'bg-white/20'}`}>
                <Truck className={`h-6 w-6 ${scrolled ? 'text-blue-600' : 'text-white'}`} />
              </div>
              <span className={`text-xl font-bold ${scrolled ? 'text-gray-800' : 'text-white'}`}>
                Egypt for Shipping
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              <ul className="flex gap-1 font-medium">
                <li>
                  <a 
                    href="#hero" 
                    className={`px-4 py-2 rounded-lg transition-all flex items-center gap-1 ${scrolled ? 'text-gray-700 hover:bg-blue-50 hover:text-blue-600' : 'text-white/90 hover:bg-white/20 hover:text-white'}`}
                  >
                    <span>الرئيسية</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="#services" 
                    className={`px-4 py-2 rounded-lg transition-all flex items-center gap-1 ${scrolled ? 'text-gray-700 hover:bg-blue-50 hover:text-blue-600' : 'text-white/90 hover:bg-white/20 hover:text-white'}`}
                  >
                    <span>الخدمات</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="#about" 
                    className={`px-4 py-2 rounded-lg transition-all flex items-center gap-1 ${scrolled ? 'text-gray-700 hover:bg-blue-50 hover:text-blue-600' : 'text-white/90 hover:bg-white/20 hover:text-white'}`}
                  >
                    <Users className="h-4 w-4" />
                    <span>من نحن</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="#ratings" 
                    className={`px-4 py-2 rounded-lg transition-all flex items-center gap-1 ${scrolled ? 'text-gray-700 hover:bg-blue-50 hover:text-blue-600' : 'text-white/90 hover:bg-white/20 hover:text-white'}`}
                  >
                    <Star className="h-4 w-4" />
                    <span>آراء العملاء</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="#contact" 
                    className={`px-4 py-2 rounded-lg transition-all flex items-center gap-1 ${scrolled ? 'text-gray-700 hover:bg-blue-50 hover:text-blue-600' : 'text-white/90 hover:bg-white/20 hover:text-white'}`}
                  >
                    <Contact className="h-4 w-4" />
                    <span>اتصل بنا</span>
                  </a>
                </li>
              </ul>
              
              <div className={`h-6 w-px mx-2 ${scrolled ? 'bg-gray-300' : 'bg-white/30'}`}></div>
              
              {/* Call to Action Button */}
              <a
                href="tel:+201111458668"
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all ${scrolled ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'}`}
              >
                <Phone className="h-4 w-4" />
                <span>اتصل بنا</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden p-2 rounded-lg ${scrolled ? 'text-gray-700 hover:bg-blue-50' : 'text-white hover:bg-white/20'}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className={`md:hidden ${scrolled ? 'bg-white' : 'bg-blue-900/95 backdrop-blur-md'} shadow-xl`}>
            <div className="px-4 pt-2 pb-4 space-y-1">
              <a
                href="#hero"
                className={`block px-4 py-3 rounded-lg text-right transition-all ${scrolled ? 'text-gray-700 hover:bg-blue-50' : 'text-white hover:bg-white/20'}`}
                onClick={() => setIsOpen(false)}
              >
                الرئيسية
              </a>
              <a
                href="#services"
                className={`block px-4 py-3 rounded-lg text-right transition-all ${scrolled ? 'text-gray-700 hover:bg-blue-50' : 'text-white hover:bg-white/20'}`}
                onClick={() => setIsOpen(false)}
              >
                الخدمات
              </a>
              <a
                href="#about"
                className={`block px-4 py-3 rounded-lg text-right transition-all ${scrolled ? 'text-gray-700 hover:bg-blue-50' : 'text-white hover:bg-white/20'}`}
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center justify-end gap-2">
                  <span>من نحن</span>
                  <Users className="h-4 w-4" />
                </div>
              </a>
              <a
                href="#ratings"
                className={`block px-4 py-3 rounded-lg text-right transition-all ${scrolled ? 'text-gray-700 hover:bg-blue-50' : 'text-white hover:bg-white/20'}`}
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center justify-end gap-2">
                  <span>آراء العملاء</span>
                  <Star className="h-4 w-4" />
                </div>
              </a>
              <a
                href="#contact"
                className={`block px-4 py-3 rounded-lg text-right transition-all ${scrolled ? 'text-gray-700 hover:bg-blue-50' : 'text-white hover:bg-white/20'}`}
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center justify-end gap-2">
                  <span>اتصل بنا</span>
                  <Contact className="h-4 w-4" />
                </div>
              </a>
              
              <div className="pt-2">
                <a
                  href="tel:+201111458668"
                  className={`flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg font-semibold transition-all ${scrolled ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-white/20 text-white hover:bg-white/30'}`}
                  onClick={() => setIsOpen(false)}
                >
                  <Phone className="h-4 w-4" />
                  <span>اتصل بنا الآن</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
      
      {/* Add spacing for fixed navbar */}
      <div className="h-20"></div>
    </>
  );
}