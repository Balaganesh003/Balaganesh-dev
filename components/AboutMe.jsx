import React from 'react';
import { FaGithub } from 'react-icons/fa';

const AboutMe = () => {
  return (
    <>
      <h1 className="uppercase text-HeadingGray text-xl text-center mb-10  duration-200 transition-all cursor-pointer hover:text-gray-200  ">
        About Me
      </h1>
      <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
        <div className="flex-1 flex">
          <div className="lg:w-[25rem]  md:w-[20rem] w-[100%] max-w-lg p-4">
            <img
              src="/balaganesh-dev-1.jpeg"
              alt="My Logo"
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="flex-1 max-w-lg">
          <h1 className="text-transparent text-[2.4rem] lg:text-[3rem] bg-clip-text bg-gradient-to-r from-purple-300 to-secondaryPurple">
            I&rsquo;m Balaganesh
          </h1>
          <p className="text-[1rem] mt-3">
            In the realm of frontend development where the lines between art and
            science blur, I strive to strike a harmonious balance. I am a
            creator of visually stunning and functionally sound websites and
            applications.
          </p>

          <p className="text-[1rem] mt-2">
            As a seasoned professional, I am not only adept at utilizing these
            technologies to their fullest potential, but also deeply committed
            to staying physically and mentally fit through hobbies such as
            cycling and jogging
          </p>

          <p className="text-[1rem]  mt-2">
            I am always eager to expand my skillset and welcome new and
            challenging projects.
          </p>

          <button className="py-3 px-6 mt-8 border-HeadingBlue border-2 rounded-md cursor-pointer hover:border-cyan-500 transition-all duration-200 hover:bg-cyan-300/5 active:scale-95 ">
            <a
              href="https://github.com/Balaganesh003"
              target="_new"
              className="flex items-center justify-center gap-3">
              <FaGithub /> My github
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default AboutMe;