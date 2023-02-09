import React from 'react';

const DownloadPdfButton = ({ toggleNav }) => {
  return (
    <button
      onClick={toggleNav}
      type="button"
      className="active:scale-95 transition-all duration-200">
      <a
        href="./resume-balaganesh.pdf"
        download
        data-aos="fade-down"
        data-aos-duration="1250"
        data-aos-delay="200"
        className="px-5 tracking-wide text-base py-2 mx-6 mr-8 border-HeadingBlue border-2 rounded-md cursor-pointer hover:border-cyan-500  text-[1.1rem] hover:bg-cyan-300/5  inline-block">
        Resume
      </a>
    </button>
  );
};

export default DownloadPdfButton;
