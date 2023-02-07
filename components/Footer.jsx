import React from 'react';
import { AiFillHeart } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="text-center pt-10 mt-10">
      <p className="text-HeadingGray  hover:text-HeadingBlue  transition-all duration-200 cursor-pointer">
        Made in <AiFillHeart className="inline mx-1" /> with Balaganesh
      </p>
    </div>
  );
};

export default Footer;
