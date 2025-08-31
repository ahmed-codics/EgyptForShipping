import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Floating Buttons Component
import { Phone, MessageCircle } from "lucide-react";

function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      {/* Call Button */}
      <a
        href="tel:+201111458668" // <-- Replace with your number
        className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition transform hover:scale-110"
      >
        <Phone className="w-6 h-6" />
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/201021521243" // <-- Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition transform hover:scale-110"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}

export default function App() {
  return (
    <div className="app">
      <>
        <Navbar />
        <Hero />
        <Services />
        <About />
        <Contact />
        <Footer />

        {/* Floating buttons appear on every page */}
        <FloatingButtons />
      </>
    </div>
  );
}
