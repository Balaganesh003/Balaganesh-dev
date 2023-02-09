import React, { useState, useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import NavItem from './NavItem';
import Image from 'next/image';
import { MdSegment, MdClear } from 'react-icons/md';
import DownloadPdfButton from './DownloadButton';

const navItems = [
  {
    id: 1,
    text: 'About Me',
    link: '#about-section',
  },
  {
    id: 2,
    text: 'Skills',
    link: '#skills-section',
  },
  {
    id: 3,
    text: 'Projects',
    link: '#project-section',
  },
];

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
          {navItems.map(({ text, link }, index) => (
            <NavItem
              key={index}
              text={text}
              link={link}
              delay={50 * (index + 1)}
            />
          ))}
          <DownloadPdfButton />
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
                {navItems.map(({ text, link }, index) => (
                  <NavItem
                    isOpen={isOpen}
                    key={index}
                    text={text}
                    link={link}
                    toggleNav={handleNavToggle}
                  />
                ))}

                <DownloadPdfButton toggleNav={handleNavToggle} />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
