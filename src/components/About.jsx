import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Image Side */}
        <div>
          <img
            src="/heroImg.png"
            alt="About Memphis Express"
            className="rounded-2xl shadow-lg object-cover w-full h-[400px]"
          />
        </div>

        {/* Text Side */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
            من نحن؟
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            نحن في <span className="font-semibold text-blue-600"> Egypt For Shipping </span> 
            نقدم حلول شحن متكاملة وسريعة تلبي احتياجات الأفراد والشركات.  
            خبرتنا الطويلة وشراكاتنا الواسعة تمكننا من توصيل شحناتك إلى أي مكان
            في العالم بسرعة، أمان، وأسعار منافسة.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            نسعى دائمًا لتقديم خدمة استثنائية مبنية على الثقة، الدقة، 
            ورضا العملاء، لنكون الخيار الأول في مجال الشحن داخل مصر وخارجها.
          </p>

          {/* Call to Action */}
          <a
            href="#contact"
            className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 text-white text-lg md:text-xl font-semibold py-4 px-10 rounded-xl shadow-lg transition"
          >
            تواصل معنا
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
