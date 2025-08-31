import React from "react";
import { Plane, Ship, Truck, Package } from "lucide-react"; // icons

const services = [
  {
    title: "الشحن الجوي",
    desc: "سرعة فائقة لنقل شحناتك لأي مكان في العالم ✈️",
    icon: <Plane className="w-12 h-12 text-blue-500" />,
  },
  {
    title: "الشحن البحري",
    desc: "حلول اقتصادية وآمنة للشحنات الكبيرة 🚢",
    icon: <Ship className="w-12 h-12 text-blue-500" />,
  },
  {
    title: "الشحن البري",
    desc: "نقل سريع وموثوق داخل وخارج مصر 🚚",
    icon: <Truck className="w-12 h-12 text-blue-500" />,
  },
  {
    title: "خدمات الإكسبرس",
    desc: "توصيل سريع وآمن للطرود والوثائق 📦",
    icon: <Package className="w-12 h-12 text-blue-500" />,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-12">
          خدماتنا
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition"
            >
              <div className="flex justify-center mb-6">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 text-lg">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* Call Us Button */}
        <a
          href="#contact"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-lg md:text-xl font-semibold py-4 px-10 rounded-xl shadow-lg transition"
        >
          اتصل بنا الآن
        </a>
      </div>
    </section>
  );
};

export default Services;
