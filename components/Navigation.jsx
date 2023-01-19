import React, { useState } from 'react';
import NavItem from './NavItem';
import Image from 'next/image';
import { MdSegment, MdClear } from 'react-icons/md';

const navItems = ['About Me', 'Skills', 'Projects', 'Contact'];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="hidden md:flex items-center justify-between py-5 bg-primary">
        {/* Desktop */}
        <div className="cursor-pointer mt-1">
          <Image src="/logo.svg" alt="My Logo" width={24} height={24} />
        </div>
        <ul className="flex flex-row justify-center">
          {navItems.map((item, index) => (
            <NavItem key={index} text={item} />
          ))}
        </ul>
      </div>
      {/* Mobile */}
      <div className="md:hidden w-[60%] absolute  inset-y-0 right-0 transition-all ease-in-out ab h-screen backdrop:blur-xl bg-slate-500">
        {/* Logo */}
        <div className="relative">
          <div className=" flex mx-5 my-6 justify-between">
            <div className="cursor-pointer">
              <Image src="/logo.svg" alt="My Logo" width={24} height={24} />
            </div>
            <button className="cursor-pointer">
              {isOpen ? (
                <MdClear
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-white text-3xl"
                />
              ) : (
                <MdSegment
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-white text-3xl"
                />
              )}
            </button>
          </div>
        </div>
        {/* Nav Items */}
        <div>
          <ul className="flex flex-col items-center gap-5 justify-center">
            {navItems.map((item, index) => (
              <NavItem key={index} text={item} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
