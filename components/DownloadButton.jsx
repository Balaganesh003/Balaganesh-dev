import React from 'react';

const DownloadPdfButton = ({ toggleNav }) => {
  return (
    <button
      onClick={toggleNav}
      type="button"
      className="active:scale-95 md:ml-5 transition-all duration-200">
      <a
        href="./Balaganesh-resume.pdf"
        target="_blank"
        download
        className=" tracking-wide text-base text-white px-8 py-2 md:py-2 md:px-5  border-HeadingBlue border-2 rounded-md cursor-pointer hover:border-cyan-500 text-[1.1rem] hover:bg-cyan-300/5  inline-block">
        Resume
      </a>
    </button>
  );
};

export default DownloadPdfButton;
