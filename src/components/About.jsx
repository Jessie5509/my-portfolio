import React from "react";

export const About = () => {
  return (
    <div className="flex flip-card">
      <div class="flip-card-inner">
        <section className="text-3xl text-white">About me</section>
        <section class="flip-card-front">
          <div className="max-w-[25rem]">
            <p className="text-base text-white max-w-2xl">
              Welcome, thank you for passing by! I enjoy finding solutions to
              unforeseen issues and I maintain a well-structured approach to my
              work. One of my most fulfilling experiences was being part of a
              group effort that significantly improved our workflow. I want to
              help making a better world for everyone and I would love to use
              this career to do so. After completing the Analyst Programmer's
              degree, I began my career working on projects for small companies
              and later moving on to a big and international company as The
              Sandbox.
            </p>
          </div>
          <div className="flex flex-wrap content-center h-[43vh]">
            <section className="bg-[url('./assets/img/avatar5.png')] bg-cover rounded-full w-64 h-64 avatar"></section>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
