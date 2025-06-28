import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Typewriter from "typewriter-effect";

const HeroSection = () => {
  return (
    <div className=" min-h-[calc(100vh-100px)] bg-[#1c1f26] text-white flex items-center justify-center pt-32 px-4">
      <div className="container mx-auto flex flex-col-reverse md:flex-row justify-between gap-10 items-center px-6">
        
        {/* Left Content */}
        <div className="">
          <p className="text-sm md:text-xl tracking-widest text-gray-400 uppercase mb-4">
            Welcome to my world
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 leading-tight">
            Hi, I’m <span className="text-pink-600">IQBAL HASAN</span>
            
            
            <span className="text-white text-2xl md:text-4xl lg:text-5xl xl:text-6xl flex gap-3">
              
              a <Typewriter
                options={{
                  strings:  ["UI/UX Designer", "Web Developer", "Creative Thinker"],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                }}
              />
              <span className="text-pink-600">.</span>
              </span>
            
          </h1>
          <p className="text-gray-400 max-w-lg mx-auto md:mx-0">
            I use animation as a third dimension by which to simplify experiences and guide through
            each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that matter.
          </p>

          {/* Social + Skills */}
          <div className="mt-10 flex flex-col md:flex-row gap-10  md:items-start">
            
            {/* Socials */}
            <div>
              <p className="text-sm tracking-widest text-gray-400 uppercase mb-3">Find with me</p>
              <div className="flex gap-4 justify-start">
                <div className="bg-[#24272e] p-4 rounded-xl shadow-lg hover:scale-105 transition">
                  <FaFacebookF className="text-xl text-white" />
                </div>
                <div className="bg-[#24272e] p-4 rounded-xl shadow-lg hover:scale-105 transition">
                  <FaTwitter className="text-xl text-white" />
                </div>
                <div className="bg-[#24272e] p-4 rounded-xl shadow-lg hover:scale-105 transition">
                  <FaLinkedinIn className="text-xl text-white" />
                </div>
              </div>
            </div>

            {/* Skills */}
            

          </div>
        </div>

        {/* Right Content */}
        <div className="relative z-10 rounded-2xl h-[350px] w-[280px] md:h-[450px] md:w-[400px] bg-[#24272e] shadow-xl ">
          <img
            src="/heroimg2.png"
            alt="Jone Lee"
            className="absolute inset-0 w-full h-full object-cover transform  transition-transform duration-300 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
