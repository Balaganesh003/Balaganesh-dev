import Link from 'next/link';
import React from 'react';

const ContactMe = () => {
  return (
    <div className="flex flex-col items-center py-6">
      <h1 className="text-center text-[2.5rem] font-semibold md:font-normal md:text-[3.4rem] mb-5 md:mb-2">
        Get In Touch
      </h1>
      <p className="max-w-[40rem] text-[1rem] text-HeadingGray flex items-center mb-14 text-center">
        I&apos;m always open to new freelance opportunities. Whether you have a
        project in mind or just want to say hi, I would love to hear from you.
        Let&apos;s work together to make your vision a reality and create
        something extraordinary!
      </p>
      <Link href={'/contact'}>
        <button className="tracking-wide  text-base px-6 py-3 border-HeadingBlue border-2 rounded-md cursor-pointer hover:border-cyan-500  hover:bg-cyan-300/5">
          Say Hello
        </button>
      </Link>
    </div>
  );
};

// "I am actively seeking new freelancing opportunities and my inbox is always open. Whether you have a project in mind or just want to say hi, I would love to hear from you. Let's work together to bring your vision to life! I will do my best to respond to your message as soon as possible."

export default ContactMe;
