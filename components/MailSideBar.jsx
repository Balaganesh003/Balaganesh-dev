import React from 'react';

const MailSideBar = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1300"
      data-aos-delay="1600"
      className="hidden fixed pr-5 right-5 md:flex flex-col items-center text-white h-screen justify-end  space-y-[6.8rem]">
      <div className="rotate-90 mb-20 w-10 py-[2.9rem] ">
        <a
          href="mailto:k.balaganesh26@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="tracking-2 inline-block hover:-translate-x-1 transition-all  duration-200 cursor-pointer hover:text-secondary">
          k.balaganesh26@gmail.com
        </a>
      </div>
      <div className="w-px bg-white h-[5.5rem]"></div>
    </div>
  );
};

export default MailSideBar;
