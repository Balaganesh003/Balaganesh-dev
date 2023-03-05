import React, { useState, useEffect, useRef } from 'react';
import NavItem from './NavItem';
import Image from 'next/image';
import { MdSegment, MdClear } from 'react-icons/md';
import DownloadPdfButton from './DownloadButton';
import navItems from '@/navItems';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from '@/store/ui-slice';

const Navigation = () => {
  const dispatch = useDispatch();
  const [isSticky, setIsSticky] = useState(false);

  const { isNavOpen } = useSelector((state) => state.ui);

  const handleNavToggle = () => {
    dispatch(uiActions.toggleNav());
  };

  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 96) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    });
  }, []);

  return (
    <div className="bg-primary w-full text-white">
      <div
        className={`hidden md:flex items-center justify-between h-[6rem] bg-primary transition-transform duration-200 md:px-[3.5rem]   ${
          isSticky && 'shadow-2xl fixed inset-x-0 top-0  z-50 '
        }`}>
        {/* Desktop */}
        <div className="cursor-pointer">
          <Link onClick={ScrollToTop} href="/" className="cursor-pointer">
            <Image src="/logo.svg" alt="My Logo" width={28} height={28} />
          </Link>
        </div>
        <ul className="flex flex-row  items-center justify-center">
          {navItems.map(({ text, link }, index) => (
            <NavItem
              key={index}
              text={text}
              link={link}
              delay={50 * (index + 1)}
            />
          ))}
          <span
            data-aos="fade-down"
            data-aos-duration="1250"
            data-aos-delay="200">
            <DownloadPdfButton />
          </span>
        </ul>
      </div>
      {/* Mobile */}
      <div className={`md:hidden  bg-primary relative`}>
        <div className="relative">
          <div
            className={`w-full ${
              isSticky && 'shadow-2xl fixed inset-x-0 top-0'
            } bg-primary flex justify-between h-[5rem] px-[1.5rem]`}>
            <div
              className="cursor-pointer flex items-center justify-center"
              onClick={ScrollToTop}>
              <Link href="/">
                <Image src="/logo.svg" alt="My Logo" width={28} height={28} />
              </Link>
            </div>
            {/* Toggle Button */}

            <button className="cursor-pointer ">
              <MdSegment
                onClick={handleNavToggle}
                className="text-white text-4xl z-50 active:rotate-90 transition-all duration-100"
              />
            </button>
          </div>

          <div
            className={` right-0 top-0 z-[2] transition-transform duration-200 delay-100 ${
              isNavOpen ? 'translate-x-0' : 'translate-x-[100%]'
            } fixed h-screen min-h-fit overflow-y-scroll w-[60%]   bg-bgNavy scrollbar-hide`}>
            <div className="px-[1.5rem] w-full py-6 text-right">
              <button>
                <MdClear
                  onClick={handleNavToggle}
                  className="text-white text-4xl active:rotate-90 transition-all duration-100"
                />
              </button>
            </div>
            <ul className="flex  flex-col space-y-5 items-center justify-center w-full">
              {navItems.map(({ text, link }, index) => (
                <NavItem
                  toggleNav={handleNavToggle}
                  key={index}
                  text={text}
                  link={link}
                  delay={50 * (index + 1)}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
