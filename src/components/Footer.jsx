import React from "react";
import { Facebook, Instagram, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        
        {/* Logo / About */}
        <div>
          <h3 className="text-2xl font-bold text-white">Egypt For Shipping</h3>
          <p className="mt-4 text-gray-400">
            أسرع و أأمن خدمات الشحن المحلي و الدولي ✈️📦
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-4">روابط سريعة</h4>
          <ul className="space-y-2">
            <li><a href="#hero" className="hover:text-blue-500">الرئيسية</a></li>
            <li><a href="#services" className="hover:text-blue-500">خدماتنا</a></li>
            <li><a href="#about" className="hover:text-blue-500">من نحن</a></li>
            <li><a href="#contact" className="hover:text-blue-500">تواصل معنا</a></li>
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-4">تواصل معنا</h4>
          <div className="space-y-2">
            <p className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-blue-500" />
              01111536999
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-blue-500" />
              info@egyptforshipping.com
            </p>
          </div>

          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-blue-500"><Facebook /></a>
            <a href="#" className="hover:text-blue-500"><Instagram /></a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Egypt For Shipping. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
};

export default Footer;
