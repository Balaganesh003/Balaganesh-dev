import AOS from 'aos';
import 'aos/dist/aos.css';
import Head from 'next/head';
import Navigation from '@/components/Navigation';
import Header from '@/components/Header';
import { useEffect } from 'react';
import AboutMe from '@/components/AboutMe';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import MailSideBar from '@/components/MailSideBar';
import SocialLinks from '@/components/SocialLinks';

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Head>
        <title>Balaganesh | Frontend Developer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <div className="grid grid-flow-col  bg-primary relative">
        {/* Social Links */}
        <SocialLinks />

        {/* Main */}
        <main className="bg-primary mx-auto my-auto px-5 md:px-32 pb-12 lg:px-32 w-screen md:w-auto text-white ">
          <div className="h-screen flex flex-col justify-center">
            <div className="fixed inset-x-0 top-0 ">
              <Navigation />
            </div>
            <Header />
          </div>
          <hr className="h-px mx-auto mb-10 md:mb-14 lg:mb-20 bg-gray-100 border-0 rounded  dark:bg-gray-700" />
          <AboutMe />
          <hr className="h-px mx-auto my-16 md:my-14 lg:mt-24 bg-gray-100 border-0 rounded  dark:bg-gray-700" />
          <Skills />
          <hr className="h-px mx-auto my-16 md:my-14 lg:mt-24 bg-gray-100 border-0 rounded  dark:bg-gray-700" />
          <Projects />

          <Footer />
        </main>
        {/* Mail  */}
        <MailSideBar />
      </div>
    </>
  );
}
