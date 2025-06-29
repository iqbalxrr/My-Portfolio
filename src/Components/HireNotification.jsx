import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";

const HireNotification = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show after 1 second on page load
    const timer = setTimeout(() => {
      setVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-gradient-to-r from-purple-800 via-pink-600 to-black text-white p-5 rounded-xl shadow-xl flex items-center gap-5 relative w-[350px] md:w-[420px] animate-slideUp">
        {/* Close Button */}
        <button
          onClick={() => setVisible(false)}
          className="absolute top-2 right-2 text-pink-300 hover:text-white"
        >
          <IoMdClose size={20} />
        </button>

        {/* Profile Image */}
        <img
          src="https://i.ibb.co/JR9CtjF/avatar.png" // Replace with your image
          alt="profile"
          className="w-14 h-14 rounded-full border-2 border-white"
        />

        {/* Text Content */}
        <div className="flex-1">
          <h3 className="text-sm md:text-base font-bold leading-snug">
            I'm Iqbal Hasan — available for hire
          </h3>
          <p className="text-xs text-gray-300 mt-1">
            Availability: Maximum 2 Hours
          </p>
        </div>

        {/* CTA Button */}
        <a
          href="#contact"
          className="bg-[#2e2e3a] text-white text-sm px-4 py-2 rounded-md hover:bg-pink-600 transition"
        >
          Hire me
        </a>
      </div>
    </div>
  );
};

export default HireNotification;
