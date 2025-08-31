import React from "react";
import { Phone, Mail, MapPin } from "lucide-react"; // nice icons

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-12">
          تواصل معنا
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <p className="text-lg text-gray-600">
              نحن دائمًا جاهزون للرد على استفساراتك ومساعدتك في شحناتك.
            </p>

            <div className="flex items-center space-x-4 space-x-reverse">
              <Phone className="w-6 h-6 text-blue-600" />
              <a href="tel:+201111458668" className="text-lg text-gray-700 hover:text-blue-600 transition">
                01111458668
              </a>
            </div>

                        <div className="flex items-center space-x-4 space-x-reverse">
              <Phone className="w-6 h-6 text-blue-600" />
              <a href="tel:+201223536536" className="text-lg text-gray-700 hover:text-blue-600 transition">
                01223536536
              </a>
            </div>

            <div className="flex items-center space-x-4 space-x-reverse">
              <Phone className="w-6 h-6 text-blue-600" />
              <a href="tel:+201021521243" className="text-lg text-gray-700 hover:text-blue-600 transition">
                01021521243
              </a>
            </div>

            <div className="flex items-center space-x-4 space-x-reverse">
              <Phone className="w-6 h-6 text-blue-600" />
              <a href="tel:+201103031902" className="text-lg text-gray-700 hover:text-blue-600 transition">
                01103031902
              </a>
            </div>

            <div className="flex items-center space-x-4 space-x-reverse">
              <Phone className="w-6 h-6 text-blue-600" />
              <a href="tel:+201274075000" className="text-lg text-gray-700 hover:text-blue-600 transition">
                01274075000
              </a>
            </div>

            <div className="flex items-center space-x-4 space-x-reverse">
              <Phone className="w-6 h-6 text-blue-600" />
              <a href="tel:+201111458668" className="text-lg text-gray-700 hover:text-blue-600 transition">
                01111458668
              </a>
            </div>

            <div className="flex items-center space-x-4 space-x-reverse">
              <Phone className="w-6 h-6 text-blue-600" />
              <a href="tel:+201226891891" className="text-lg text-gray-700 hover:text-blue-600 transition">
                01226891891
              </a>
            </div>



            

            <div className="flex items-center space-x-4 space-x-reverse">
              <Mail className="w-6 h-6 text-blue-600" />
              <a href="mailto:info@memphisexpress.com" className="text-lg text-gray-700 hover:text-blue-600 transition">
                info@memphisexpress.com
              </a>
            </div>

            <div className="flex items-center space-x-4 space-x-reverse">
              <MapPin className="w-6 h-6 text-blue-600" />
              <p className="text-lg text-gray-700">
                المعادي، القاهرة
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-white shadow-lg rounded-2xl p-8 space-y-6">
            <input
              type="text"
              placeholder="الاسم"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
            <input
              type="email"
              placeholder="البريد الإلكتروني"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
            <textarea
              placeholder="رسالتك"
              rows="4"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition"
            >
              إرسال
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
