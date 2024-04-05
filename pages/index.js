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
import DaysICode from '@/components/DaysICode';

export async function getStaticProps() {
  const projectsData = await fetchProjectsData();

  return {
    props: { projectsData },
  };
}

export default function Home({ projectsData }) {
  const dispatch = useDispatch();
  const [isStickyNav, setIsStickyNav] = useState(false);
  const { isLoading, projects } = useSelector((state) => state.projects);

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
        <title>Balaganesh - Frontend Developer</title>
        <meta
          name="description"
          content="Balaganesh is a proficient frontend web developer with a passion for creating innovative and user-friendly web applications. Explore my portfolio to see my work."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Balaganesh - Frontend Developer" />
        <meta
          property="og:description"
          content="Discover the innovative and user-centric web development projects by Balaganesh. Dive into my portfolio now."
        />
        <meta property="og:image" content="../public/balaganesh-dev-1.webp" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://balaganesh-dev.vercel.app/" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'http://schema.org',
            '@type': 'Person',
            name: 'Balaganesh',
            url: 'https://balaganesh-dev.vercel.app/',
            image: '../public/balaganesh-dev-1.webp',
            sameAs: [
              'https://twitter.com/balaganesh_003', // Replace with your Twitter profile
              'https://www.linkedin.com/in/balaganesh-k/', // Replace with your LinkedIn profile
            ],
          })}
        </script>
      </Head>

      <main
        className={`bg-primary h-full max-w-screen overflow-y-hidden flex flex-col items-center justify-center relative text-white px-4 sm:px-[1.5rem] md:px-[3.5rem]`}>
        {isLoading ? (
          <Spinner />
        ) : (
          <div
            className={`md:px-[4.5rem] transition-all duration-300 ease-in-out w-full `}>
            <div
              className={`h-[calc(100dvh-5rem)] min-h-fit flex items-center xl:pb-[5rem] justify-center w-full ${
                isStickyNav && 'mt-[5rem]'
              }`}>
              <Header />
            </div>
            <hr className="h-px mx-auto my-[2rem] bg-gray-100 border-0 rounded dark:bg-gray-700" />
            <AboutMe />
            <hr className="h-px mx-auto mt-[7rem] bg-gray-100 border-0 rounded dark:bg-gray-700" />
            <DaysICode />
            <hr className="h-px mx-auto mt-[7rem] bg-gray-100 border-0 rounded dark:bg-gray-700" />
            <Skills />
            <hr className="h-px mx-auto mt-[2rem] bg-gray-100 border-0 rounded dark:bg-gray-700" />
            <Projects />
            <hr className="h-px mx-auto mt-[9rem] mb-[5rem] bg-gray-100 border-0 rounded dark:bg-gray-700" />
            <ContactMe />
          </div>
        )}
      </main>
    </>
  );
}
