"use client";

import Image from "next/image";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius adipiscing elit, nibh egestas a.",
    name: "John Doe",
    image: "/faisalabad.jpeg",
  },
  {
    id: 2,
    text: " Ut varius adipiscing elit, nibh egestas a.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    name: "John Snow",
    image: "/multan.jpeg",
  },
];

function Page() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <div className="flex flex-col items-center py-10 px-5 bg-gray-50">
        <h2 className="text-3xl font-semibold text-gray-800 mb-2">
          Testimonials
        </h2>
        <p className="text-gray-500 text-center max-w-md mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus
          nullam eu amet ipsum felis, faucibus ut libero.
        </p>

        <div className="relative flex items-center space-x-6">
          <button
            onClick={handlePrev}
            className="p-2 bg-white rounded-full border border-gray-300 hover:bg-gray-100 focus:outline-none"
          >
            &lt;
          </button>

          <div className="flex-shrink-0 w-80 p-6 bg-white rounded-lg shadow-lg text-center">
            <div className="text-orange-300 text-4xl mb-4">&ldquo;</div>
            <p className="text-gray-600 mb-4">
              {testimonials[currentIndex].text}
            </p>
            <div className="flex items-center justify-center space-x-2">
              <Image
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-10 h-10 rounded-full object-cover"
                width={100}
                height={100}
              />
              <p className="text-gray-800 font-semibold">
                {testimonials[currentIndex].name}
              </p>
            </div>
          </div>

          <button
            onClick={handleNext}
            className="p-2 bg-white rounded-full border border-gray-300 hover:bg-gray-100 focus:outline-none"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page;
