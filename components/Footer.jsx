import React from 'react';
import { AiFillHeart } from 'react-icons/ai';
import SocialLinksData from '@/socialLinksData';

const Footer = () => {
  return (
    <div className="text-center  mt-24 md:mt-28">
      <div className=" md:hidden flex items-center justify-center  space-x-5 mb-10">
        {SocialLinksData.map((link, index) => (
          <a key={index} target="_new" href={link.link}>
            <link.Icon className="text-[1.8rem]  transition-all hover:text-secondary duration-200 hover:-translate-y-[2px] hover:scale-105 cursor-pointer" />
          </a>
        ))}
      </div>
      <p className="text-HeadingGray  hover:text-HeadingBlue  transition-all duration-300 cursor-pointer text-base">
        Made in <AiFillHeart className="inline mx-[0.15rem]" /> with Balaganesh
      </p>
    </div>
  );
};

export default Footer;
