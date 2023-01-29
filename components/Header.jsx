import React from 'react';
import Navigation from './Navigation';
import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaGithub,
} from 'react-icons/fa';

const icons = [FaWhatsapp, FaInstagram, FaLinkedin, FaTwitter, FaGithub];

const Header = () => {
  return (
    <div className="md:mx-6  lg:mt-6">
      <h1 className="md:tracking-1 tracking-widest py-2 text-[0.75rem] md:text-xs  text-HeadingGray uppercase">
        Hi, My name is
      </h1>
      <h1 className="xl:text-7xl mt-2 lg:6xl md:text-5xl text-3xl font-bold ">
        Balaganesh K
      </h1>
      <p className="font-extrabold  text-transparent text-[2.5rem] md:text-[3.5rem] lg:text[4.7rem] xl:text-[5rem] bg-clip-text bg-gradient-to-r from-HeadingBlue to-headingPurple  leading-tight">
        I am a Frontend Developer
      </p>
      <p className="text-base md:text-lg pr-1 lg:text-lg max-w-[33rem] text-HeadingGray font-medium mt-6">
        I am a Frontend Developer and Python Programmer. Constantly seeking new
        challenges and opportunities to enhance my skills. I am passionate about
        technology and always strive to stay updated with the latest industry
        trends.
      </p>
      <button className="py-3 px-6 mt-10  grow-1 shrink-0 border-HeadingBlue border-2 rounded-md cursor-pointer hover:border-cyan-500 transition-all duration-200 hover:bg-cyan-300/5 active:scale-95">
        Want to Work with me
      </button>
    </div>
  );
};

export default Header;
