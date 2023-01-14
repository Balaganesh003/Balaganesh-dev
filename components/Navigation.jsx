import React from 'react';
import NavItem from './NavItem';
import Image from 'next/image';

const navItems = ['About Me', 'Skills', 'Projects', 'Contact'];

const Navigation = () => {
  return (
    <div className="flex items-center justify-between py-5 bg-primary">
      <div className="cursor-pointer">
        <Image src="/logo.svg" alt="My Logo" width={24} height={24} />
      </div>
      <ul className="flex flex-row justify-center">
        {navItems.map((item, index) => (
          <NavItem key={index} text={item} />
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
