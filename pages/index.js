import AOS from 'aos';
import 'aos/dist/aos.css';
import Head from 'next/head';
import Navigation from '@/components/Navigation';
import Header from '@/components/Header';
import { useEffect, useState } from 'react';
import AboutMe from '@/components/AboutMe';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import MailSideBar from '@/components/MailSideBar';
import SocialLinks from '@/components/SocialLinks';

export default function Home() {
  const [isStickyNav, setIsStickyNav] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 95) {
        setIsStickyNav(true);
      } else {
        setIsStickyNav(false);
      }
    });
  }, []);

  return (
    <>
      <Head>
        <title>Balaganesh | Frontend Developer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <main className={`bg-primary h-full  relative text-white  px-[3.5rem]`}>
        <SocialLinks />
        <Navigation />
        <div
          className={`md:px-[4.5rem] flex flex-col items-center justify-center`}>
          <div
            className={`h-[calc(100vh-7rem)] min-h-[30rem] pb-4 flex items-center ${
              isStickyNav && 'mt-[7rem]'
            }`}>
            <Header />
          </div>
          <hr className="w-full border-[#2f2f2f] border-opacity-50" />
          <AboutMe />
          <hr className="w-full border-[#2f2f2f] border-opacity-50" />

          {/* <Skills /> */}
          <Projects />
          <Footer />
        </div>
        <MailSideBar />
      </main>
    </>
  );
}
