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
    <div className="flex flex-col h-screen mt-[7rem]">
      <div>
        <h1 className="tracking-1 py-2">Hi, My name is</h1>
        <h1 className="text-4xl font-bold ">Balaganesh K</h1>
        <p class="font-extrabold  text-transparent text-[4rem] bg-clip-text bg-gradient-to-r from-HeadingBlue to-headingPurple  leading-tight">
          I am a Frontend Developer
        </p>
        <div className="flex flex-row gap-4 mt-2">
          {icons.map((Icon, index) => (
            <Icon
              key={index}
              className="text-3xl cursor-pointer hover:text-textGreen transition-all duration-200 hover:scale-[115%] active:scale-[100%]"
            />
          ))}
        </div>
      </div>
      <hr className="h-px mt-[10%] bg-gray-200 border-0 dark:bg-gray-700" />
    </div>
  );
};

export default Header;
