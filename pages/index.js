import AOS from 'aos';
import 'aos/dist/aos.css';
import Head from 'next/head';
import Header from '@/components/Header';
import { useEffect, useState } from 'react';
import { fetchProjectsData } from '@/utils/FetchProjectData';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from '@/components/Spinner';
import { projectActions } from '@/store/project-slice';

import dynamic from 'next/dynamic';

const DynamicAboutMe = dynamic(() => import('@/components/AboutMe'));
const DynamicSkills = dynamic(() => import('@/components/Skills'));
const DynamicProjects = dynamic(() => import('@/components/Projects'));
const DynamicContactMe = dynamic(() => import('@/components/ContactMe'));
const DynamicDaysICode = dynamic(() => import('@/components/DaysICode'));

export async function getStaticProps() {
  const projectsData = await fetchProjectsData();
  return {
    props: { projectsData },
    revalidate: 3600, // Revalidate every hour
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
        <meta
          property="og:image"
          content="https://balaganesh-dev.vercel.app/balaganesh-dev-1.webp"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://balaganesh-dev.vercel.app/" />
        <link rel="canonical" href="https://balaganesh-dev.vercel.app/" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'http://schema.org',
            '@type': 'Person',
            name: 'Balaganesh',
            url: 'https://balaganesh-dev.vercel.app/',
            image: 'https://balaganesh-dev.vercel.app/balaganesh-dev-1.webp',
            sameAs: [
              'https://twitter.com/balaganesh_003',
              'https://www.linkedin.com/in/balaganesh-k/',
              'https://github.com/Balaganesh003',
            ],
            jobTitle: 'Frontend Developer',
            worksFor: {
              '@type': 'Organization',
              name: 'Freelance',
            },
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
            <DynamicAboutMe />
            <hr className="h-px mx-auto mt-[7rem] bg-gray-100 border-0 rounded dark:bg-gray-700" />
            <DynamicDaysICode />
            <hr className="h-px mx-auto mt-[7rem] bg-gray-100 border-0 rounded dark:bg-gray-700" />
            <DynamicSkills />
            <hr className="h-px mx-auto mt-[2rem] bg-gray-100 border-0 rounded dark:bg-gray-700" />
            <DynamicProjects />
            <hr className="h-px mx-auto mt-[9rem] mb-[5rem] bg-gray-100 border-0 rounded dark:bg-gray-700" />
            <DynamicContactMe />
          </div>
        )}
      </main>
    </>
  );
}
