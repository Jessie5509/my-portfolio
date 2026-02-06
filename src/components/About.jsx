import React from "react";
import avatar from "../assets/img/avatar.png"

export const About = () => {
  return (
    // <main className="flex flip-card">
    //   <div class="flip-card-inner">
    //     <section className="text-3xl text-white">About me</section>
    //     <section class="flip-card-front">
    //       <div className="max-w-[25rem]">
    //         <p className="text-base text-white max-w-2xl">
    //           Welcome, thank you for passing by! I enjoy finding solutions to
    //           unforeseen issues and I maintain a well-structured approach to my
    //           work. One of my most fulfilling experiences was being part of a
    //           group effort that significantly improved our workflow. I want to
    //           help making a better world for everyone and I would love to use
    //           this career to do so. After completing the Analyst Programmer's
    //           degree, I began my career working on projects for small companies
    //           and later moving on to a big and international company as The
    //           Sandbox.
    //         </p>
    //       </div>
    //       <div className="flex flex-wrap content-center h-[43vh]">
    //         <section className="bg-[url('./assets/img/avatar5.png')] bg-cover rounded-full w-64 h-64 avatar"></section>
    //       </div>
    //     </section>
    //   </div>
    // </main>
    <main>
      <section id="about" className="min-h-screen text-white py-16 px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="w-full md:w-5/12 flex justify-center h-full md:justify-end">
          <img
            src={avatar}
            alt="About Me"
            class="w-72 h-94 md:w-80 lg:w-96 rounded-lg shadow-lg object-cover avatar"
          />
        </div>

        <div className="w-full md:w-7/12 text-center md:text-left relative">
          <div className="absolute left-[40%] -top-6 md:-left-16  lg:top-0 md:top-6 rotate-0 md:rotate-[-90deg] text-sm tracking-widest">
            <div className="flex items-center justify-center gap-2">
              <div className="w-16 h-[2px] bg-white"></div>
              <p>MORE ABOUT</p>
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4 pl-10">
            A Passionate Software Developer
          </h2>

          <p className="text-gray-300 mb-6 text-sm md:text-base leading-relaxed max-w-2xl mx-auto md:mx-0">
            I’m Jessica Nuñez, welcome, thank you for passing by! I enjoy
            finding solutions to unforeseen issues and I maintain a
            well-structured approach to my work. One of my most fulfilling
            experiences was being part of a group effort that significantly
            improved our workflow. I want to help making a better world for
            everyone and I would love to use this career to do so. After
            completing the Analyst Programmer's degree, I began my career
            working on projects for small companies and later moving on to a big
            and international company as The Sandbox.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#"
              className="bg-black text-white font-semibold py-2 px-4 rounded-lg hover:bg-tertiary/80 text-center"
            >
              See Projects
            </a>
            <a
              href="#"
              className="border border-tertiary text-white font-semibold py-2 px-4 rounded-lg hover:bg-tertiary/10 text-center"
            >
              More Details
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
