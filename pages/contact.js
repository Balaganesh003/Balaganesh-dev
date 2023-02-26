/* eslint-disable react-hooks/rules-of-hooks */
import Image from 'next/image';
import React, { useState } from 'react';
import ContactSvg from '../public/contact-svg.svg';

const contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
  };

  return (
    <div className="bg-primary pt-5 text-white h-screen px-[1.5rem] md:px-[7rem] xl:px-[10rem] ">
      <h1 className="text-4xl md:text-5xl font-semibold text-center">
        How can I help?
      </h1>
      <p className="text-2xl text-center mt-5">
        Drop me a line and I&apos;ll get back to you shortly.
      </p>
      <div className="flex mt-10 gap-10 justify-center">
        <form className="flex-1 flex flex-col gap-8 " onSubmit={handleSubmit}>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="bg-primary focus:border-secondary shadow-xl border  border-HeadingGray/50  text-lg focus:outline-none  px-4 rounded-lg py-4"
            placeholder="Your name"
            value={name}
          />

          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Your e-mail"
            className="bg-primary shadow-xl border focus:border-secondary  border-HeadingGray/50  text-lg focus:outline-none  px-4 rounded-lg py-4"
            value={email}
          />

          <textarea
            onChange={(e) => setMessage(e.target.value)}
            name="Your message"
            id=""
            cols="30"
            rows="7"
            value={message}
            placeholder="Your message"
            className="bg-primary shadow-xl border focus:border-secondary border-HeadingGray/50  text-lg focus:outline-none  px-4 rounded-lg py-4"
          />

          <button className="tracking-wide shadow-lg px-8 py-2 md:py-2 md:px-5  border-HeadingBlue border-2 rounded-md cursor-pointer hover:border-cyan-500 text-[1.35rem] hover:bg-cyan-300/5  ">
            Send
          </button>
        </form>
        <div className="md:flex hidden flex-1 items-center justify-center">
          <Image src={ContactSvg} alt="contactsvg" />
        </div>
      </div>
    </div>
  );
};

export default contact;
