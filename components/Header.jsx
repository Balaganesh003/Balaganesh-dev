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
    <div className="flex flex-col justify-center">
      <h1>Hi, My name is</h1>
      <h1 className="text-4xl font-bold ">Balaganesh K</h1>
      <p class="font-extrabold  text-transparent text-[4rem] bg-clip-text bg-gradient-to-r from-HeadingBlue to-headingPurple  leading-tight">
        I am a Frontend Developer
      </p>
      <div className="flex flex-row gap-3">
        {icons.map((Icon, index) => (
          <div
            key={index}
            className="h-16 w-16 flex items-center justify-center">
            <Icon className="text-3xl h-12 w-12    hover:text-textGreen transition-all duration-200 hover:scale-110 " />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
