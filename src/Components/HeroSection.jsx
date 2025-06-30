import React, { useEffect } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub, FaDownload } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import AOS from "aos";
import "aos/dist/aos.css";



const HeroSection = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div id="home" className=" min-h-[calc(100vh-100px)] bg-[#1c1f26] text-white flex items-center justify-center pt-32 px-4">
      <div className=" container xl:w-8/12 mx-auto flex flex-col-reverse md:flex-row justify-between gap-10 items-center px-6">

        {/* Left Content */}
        <div className="" data-aos="fade-right">
          <p className="text-sm md:text-xl tracking-widest text-gray-400 uppercase mb-4">
            Welcome to my world
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 leading-tight">
            Hi, I’m <span className="text-pink-600">IQBAL HASAN</span>


            <span className="text-white text-2xl md:text-4xl lg:text-5xl xl:text-6xl flex gap-3">

              a <Typewriter
                options={{
                  strings: ["Creative Thinker", "Web Developer", "React Learner","Learning UI/UX"],
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
            I’m a passionate and dedicated web developer and designer who loves to build creative, user-friendly experiences using modern web technologies. I always strive to learn and improve with every project I take on.
          </p>

          <button
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/resume.pdf";
              link.download = "IQBAL_HASAN_Resume.pdf";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            className="uppercase text-[18px] mt-10 border border-pink-600 bg-[#24272e] px-6 py-4 rounded-xl shadow-lg hover:bg-pink-600 hover:scale-105 transition flex items-center gap-2"
          >
            Resume
            <FaDownload className="text-white" />
          </button>

          {/* Social + Skills */}
          <div className="mt-10 flex flex-col md:flex-row gap-10  md:items-start">

            {/* Socials */}
            <div data-aos="fade-up" data-aos-delay="300">
              <p className="text-sm tracking-widest text-gray-400 uppercase mb-3">Find with me</p>
              <div className="flex gap-4 justify-start">
                <div className="bg-[#24272e] p-4 rounded-xl shadow-lg hover:bg-pink-600 hover:scale-105 transition">
                  <a href="https://github.com/iqbalxrr" target="_blank"> <FaGithub className="text-xl text-white" /> </a>
                </div>
                <div className="bg-[#24272e] p-4 rounded-xl shadow-lg hover:bg-pink-600 hover:scale-105 transition">
                  <a href="https://www.linkedin.com/in/iqbal-hasan-91a1a5365" target="_blank"> <FaLinkedinIn className="text-xl text-white" /> </a>
                </div>

                <div className="bg-[#24272e] p-4 rounded-xl shadow-lg hover:bg-pink-600 hover:scale-105 transition">
                  <a href="https://x.com/WebdevIqbal" target="_blank"> <FaTwitter className="text-xl text-white" /> </a>
                </div>

                <div className="bg-[#24272e] p-4 rounded-xl shadow-lg hover:bg-pink-600 hover:scale-105 transition">
                  <a href="https://www.facebook.com/tasnim.hasan.iqbal" target="_blank"> <FaFacebookF className="text-xl text-white" /> </a>
                </div>

              </div>
            </div>

            {/* Skills */}


          </div>
        </div>

        {/* Right Content */}
        <div data-aos="zoom-in" className="relative z-10 rounded-2xl h-[350px] w-[280px] md:h-[450px] md:w-[400px] bg-[#24272e] shadow-xl ">
          <img
            src="/heroimg2.png"
            alt="Jone Lee"
            className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
