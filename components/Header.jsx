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
    <div className="flex flex-col  pt-[7rem]">
      <div>
        <h1 className="md:tracking-1 tracking-widest py-2 text-xs  text-HeadingGray uppercase">
          Hi, My name is
        </h1>
        <h1 className="md:text-4xl text-3xl font-bold ">Balaganesh K</h1>
        <p className="font-extrabold  text-transparent text-[2.8rem] lg:text-[4rem] bg-clip-text bg-gradient-to-r from-HeadingBlue to-headingPurple  leading-tight">
          I am a Frontend Developer
        </p>
      </div>
    </div>
  );
};

export default Header;
