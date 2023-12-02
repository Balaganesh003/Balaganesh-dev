import AOS from 'aos';
import 'aos/dist/aos.css';
import Head from 'next/head';
import Header from '@/components/Header';
import { useEffect, useState } from 'react';
import AboutMe from '@/components/AboutMe';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import ContactMe from '@/components/ContactMe';
import { fetchProjectsData } from '@/utils/FetchProjectData';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from '@/components/Spinner';
import { projectActions } from '@/store/project-slice';

export async function getStaticProps() {
  const projectsData = await fetchProjectsData();

  return {
    props: { projectsData },
  };
}

export default function Home({ projectsData }) {
  const dispatch = useDispatch();
  const [isStickyNav, setIsStickyNav] = useState(false);
  const { isLoading } = useSelector((state) => state.projects);

  useEffect(() => {
    dispatch(projectActions.setProjects(projectsData));
    dispatch(projectActions.setLoadingStatus(false));
  }, [dispatch, projectsData]);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 96) {
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
        className={`bg-primary h-full  flex flex-col  items-center  relative text-white px-[1.5rem] w-auto  md:px-[3.5rem]`}>
        {isLoading ? (
          <Spinner />
        ) : (
          <div className={`md:px-[4.5rem]`}>
            <div
              className={`md:h-[calc(100vh-6rem)] h-[calc(100vh-5rem)]  min-h-[30rem] pb-[8rem] md:pb-0 xl:pb-[6rem]  items-center flex ${
                isStickyNav && 'md:mt-[6rem] mt-[5rem]'
              }`}>
              <Header />
            </div>

            <hr className="h-px mx-auto my-[2rem] bg-gray-100 border-0 rounded  dark:bg-gray-700" />

            <AboutMe />

            <hr className="h-px mx-auto mt-[7rem]  bg-gray-100 border-0 rounded  dark:bg-gray-700" />
            <Skills />
            <hr className="h-px mx-auto mt-[2rem]  bg-gray-100 border-0 rounded  dark:bg-gray-700" />
            <Projects />
            <hr className="h-px mx-auto mt-[9rem] mb-[5rem]  bg-gray-100 border-0 rounded  dark:bg-gray-700" />
            <ContactMe />
          </div>
        )}
      </main>
    </>
  );
}
