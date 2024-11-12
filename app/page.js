"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar/page";
import Hero from "./Components/Hero/page";
import BookingEngine from "./Components/BookingEngine/page";

const images = [
  "/HeroPic.jpg",
  "/HeroPic2.jpg",
  "/HeroPic3.jpg"
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen bg-black">
      {/* Background animation */}
      <motion.div
        key={currentImage}
        className="absolute inset-0 bg-center bg-cover"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.8 }}
        style={{
          backgroundImage: `url(${images[currentImage]})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </motion.div>

      {/* Fixed content (Navbar, Hero, and BookingEngine) */}
      <Navbar />
      <Hero />

      {/* BookingEngine placed outside the Hero component */}
      <div className="absolute top-1/2 right-64 transform -translate-y-1/2 z-10">
        <BookingEngine />
      </div>
    </div>
  );
}
