
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const AboutPage = () => {

   useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="about" className=" py-32 md:py-40">
      <div className=" md:flex  gap-10">
        {/* Image or Illustration */}
        <div className="md:w-1/3 flex justify-center " data-aos="fade-up">
          <img
            src="/aboutimg.jpg" 
            alt="Iqbal Hasan"
            className="object-cover shadow-lg border-5 border-pink-600"
          />
        </div>

        {/* About Content */}
        <div className="md:w-2/3 mt-20 md:mt-0  lg:text-[18px]">
          <h1 className='text-pink-600 main-font text-[16px] mb-2 uppercase' data-aos="fade-right">Features</h1>
          <h2  className=" text-5xl lg:text-6xl xl:text-7xl text-[#C4CFDE] font-bold main-font mb-5 uppercase " data-aos="fade-right"
            data-aos-delay="100">About Me</h2>
          <div className="space-y-4 secondary-font">
            <p  className=" text-gray-400 mb-4 leading-relaxed" data-aos="fade-left" data-aos-delay="200">
            Hello! I'm <strong className="text-pink-600 uppercase">Iqbal Hasan</strong>, a passionate web developer. 
            My journey began with curiosity and grew into a love for building websites with React, Tailwind, and clean UI/UX design.
          </p>
          <p className=" text-gray-400 mb-4" data-aos="fade-left" data-aos-delay="300">
            I enjoy creating responsive, interactive web experiences. Whether it’s crafting pixel-perfect components or 
            adding subtle animations, I care about user experience.
          </p>
          <p className=" text-gray-400 mb-4" data-aos="fade-left" data-aos-delay="400">
            Outside of programming, I love music 🎵, watching tech videos 🎥, and spending time with family. 
            I’m thoughtful, creative, and always eager to learn something new every day.
          </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
