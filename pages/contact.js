import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import ContactSvg from '../public/contact-svg.svg';
import toast, { Toaster } from 'react-hot-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isStickyNav, setIsStickyNav] = useState(false);
  const form = useRef();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 96) {
        setIsStickyNav(true);
      } else {
        setIsStickyNav(false);
      }
    });
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();
    const loading = toast.loading('Sending message...');
    const response = await emailjs.sendForm(
      process.env.NEXT_PUBLIC_SERVICE_ID,
      process.env.NEXT_PUBLIC_TEMPLATE_ID,
      form.current,
      process.env.NEXT_PUBLIC_PUBLIC_KEY
    );

    if (response.status === 200) {
      toast.dismiss(loading);
      toast.success('Message sent successfully!');
      setName('');
      setEmail('');
      setMessage('');
    } else {
      toast.dismiss(loading);
      toast.error('Something went wrong, please try again later');
      console.log(response);
    }
  };

  return (
    <div
      className={`bg-primary pt-5 text-white  px-[1.5rem] md:px-[7rem] xl:px-[10rem] ${
        isStickyNav && 'md:mt-[6rem] mt-[5rem]'
      } `}>
      <h1 className="text-4xl md:text-5xl font-semibold text-center">
        How can I help?
      </h1>
      <p className="text-2xl text-center mt-5">
        Drop me a line and I&apos;ll get back to you shortly.
      </p>
      <div className="flex mt-10 gap-14 justify-center">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="py-5 bg-primary  flex flex-col gap-5 flex-1 w-full">
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Your Name"
            value={name}
            name="name"
            className="bg-primary w-full focus:border-secondary shadow-xl border  border-HeadingGray/50  text-lg focus:outline-none  px-4 rounded-lg py-4"
          />

          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            value={email}
            placeholder="Your Email"
            className="bg-primary w-full focus:border-secondary shadow-xl border  border-HeadingGray/50  text-lg focus:outline-none  px-4 rounded-lg py-4"
          />

          <textarea
            onChange={(e) => setMessage(e.target.value)}
            name="message"
            placeholder="Your Message"
            value={message}
            cols={30}
            rows={7}
            className="bg-primary w-full focus:border-secondary shadow-xl border  border-HeadingGray/50  text-lg focus:outline-none  px-4 rounded-lg py-4"
          />
          <button
            type="submit"
            value="Send"
            className="tracking-wide  shadow-lg w-full transition-all duration-200 active:scale-90 px-8 py-2 md:py-2 md:px-5  border-HeadingBlue border-2 rounded-md cursor-pointer hover:border-cyan-500 text-[1.35rem] hover:bg-cyan-300/5  ">
            Send
          </button>
          <Toaster />
        </form>
        <div className="md:flex hidden flex-1 items-center justify-center">
          <Image src={ContactSvg} alt="contactsvg" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
