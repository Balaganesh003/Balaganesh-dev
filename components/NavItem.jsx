import React from 'react';

const NavItem = ({ text }) => {
  return (
    <div>
      <li
        className="flex space-x-2
         items-center h-12 px-1 py-2 cursor-pointer group ">
        <p className="font-extrabold text-transparent  text-2xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 opacity-0 group-hover:animate-giggleLeft group-hover:opacity-100 ">
          &lt;
        </p>
        <p className="text-[1.5rem]">{text}</p>
        <p className="font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r opacity-0 from-purple-400 to-pink-600 group-hover:animate-giggleRight group-hover:opacity-100">
          &gt;
        </p>
      </li>
    </div>
  );
};

export default NavItem;
