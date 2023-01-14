import React from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const NavItem = ({ text }) => {
  return (
    <div>
      <li
        className="flex space-x-2
         items-center h-12 px-1 py-2 cursor-pointer group">
        <div className="text-xl text-white transition-all ease-in-out duration-400  opacity-0 group-hover:opacity-100 ">
          <MdKeyboardArrowLeft />
        </div>
        <p>{text}</p>
        <div className="text-xl transition-all ease-in-out duration-400  text-white opacity-0 group-hover:opacity-100  ">
          <MdKeyboardArrowRight />
        </div>
      </li>
    </div>
  );
};

export default NavItem;
