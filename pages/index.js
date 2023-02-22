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

      <main
        className={`bg-primary h-full flex flex-col items-center  relative text-white px-[1.5rem] w-screen md:w-auto   md:px-[3.5rem]`}>
        <SocialLinks />
        <Navigation />
        <div className={`md:px-[4.5rem]`}>
          <div
            className={`h-[calc(100vh-7rem)] min-h-[30rem] xl:pb-10 items-center flex ${
              isStickyNav && 'md:mt-[7rem] mt-[5rem]'
            }`}>
            <Header />
          </div>

          <hr className="h-px mx-auto my-24 md:my-28 bg-gray-100 border-0 rounded  dark:bg-gray-700" />

          <AboutMe />

          <hr className="h-px mx-auto my-24 md:my-28 bg-gray-100 border-0 rounded  dark:bg-gray-700" />
          <Skills />
          <hr className="h-px mx-auto my-24 md:my-28 bg-gray-100 border-0 rounded  dark:bg-gray-700" />
          <Projects />

          <Footer />
        </div>
        <MailSideBar />
      </main>
    </>
  );
}
