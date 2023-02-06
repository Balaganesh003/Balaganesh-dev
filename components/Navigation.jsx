import React, { useState, useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import NavItem from './NavItem';
import Image from 'next/image';
import { MdSegment, MdClear } from 'react-icons/md';

const navItems = ['About Me', 'Skills', 'Projects', 'Contact'];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleNavToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 150) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    });
  }, []);

  return (
    <div>
      <div
        className={`hidden md:flex items-center justify-between py-7 bg-primary w-screen px-[3.5rem] ${
          isSticky && 'shadow-2xl'
        }`}>
        {/* Desktop */}
        <div className="cursor-pointer mt-1">
          <Image src="/logo.svg" alt="My Logo" width={28} height={28} />
        </div>
        <ul className="flex flex-row items-center justify-center">
          {navItems.map((item, index) => (
            <NavItem key={index} text={item} delay={50 * (index + 1)} />
          ))}

          <button
            type="button"
            className="active:scale-95 transition-all duration-200">
            <a
              data-aos="fade-down"
              data-aos-duration="1250"
              data-aos-delay="200"
              className="px-5 tracking-wide text-base py-2 mx-6 mr-8 border-HeadingBlue border-2 rounded-md cursor-pointer hover:border-cyan-500  text-[1.1rem] hover:bg-cyan-300/5  inline-block">
              Resume
            </a>
          </button>
        </ul>
      </div>
      {/* Mobile */}
      <div
        className={`md:hidden top-0 fixed  `}
        data-aos="fade-down"
        data-aos-duration="1250">
        <div className="relative ">
          {/* Nav Toggle */}
          <div
            className={`w-screen bg-primary flex px-5 py-6 justify-between ${
              isSticky && 'shadow-2xl'
            }`}>
            {/* Logo */}
            <div className="cursor-pointer flex items-center justify-center">
              <Image src="/logo.svg" alt="My Logo" width={28} height={28} />
            </div>
            {/* Toggle Button */}
            <button className="cursor-pointer  transition-all duration-300 z-30">
              {isOpen ? (
                <MdClear
                  onClick={handleNavToggle}
                  className="text-white text-4xl"
                />
              ) : (
                <MdSegment
                  onClick={handleNavToggle}
                  className="text-white text-4xl"
                />
              )}
            </button>
          </div>
          {/* Nav Items */}
          <div
            className={`w-[60%] h-screen bg-bgNavy  absolute inset-y-0  ${
              isOpen ? 'right-0' : '-right-[50rem]'
            }   transition-all duration-300 ease-in-out overflow-y-scroll scrollbar-hide`}>
            <div className="flex mt-24 justify-center ">
              <ul className="flex flex-col items-center gap-5 justify-center bg-bgNavy w-full pb-5 ">
                {navItems.map((item, index) => (
                  <NavItem
                    isOpen={isOpen}
                    key={index}
                    text={item}
                    toggleNav={handleNavToggle}
                  />
                ))}
                <button
                  onClick={handleNavToggle}
                  className="px-5 tracking-wide text-base py-2 mx-6 mr-8 border-HeadingBlue border-2 rounded-md cursor-pointer hover:border-cyan-500 transition-all duration-200 text-[1.1rem] hover:bg-cyan-300/5 active:scale-95">
                  Resume
                </button>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
