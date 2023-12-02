import React, { useEffect, useState } from 'react';
import ProjectContainer from '@/components/ProjectContainer';
import { useSelector, useDispatch } from 'react-redux';
import { projectActions } from '@/store/project-slice';
import { fetchProjectsData } from '@/utils/FetchProjectData';
import Spinner from '@/components/Spinner';

const Projects = ({ projectsData }) => {
  const dispatch = useDispatch();
  const [isStickyNav, setIsStickyNav] = useState(false);
  const { projects, selectedCategory, isLoading } = useSelector(
    (state) => state.projects
  );

  useEffect(() => {
    if (!projects || projects.length === 0) {
      dispatch(projectActions.setLoadingStatus(true));
      dispatch(projectActions.setProjects(projectsData));
      dispatch(projectActions.setLoadingStatus(false));
    }
  }, [dispatch, projects, projectsData]);

  const handleCategory = (category) => {
    dispatch(projectActions.setCategory(category));
  };

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
      {isLoading ? (
        <Spinner />
      ) : (
        <div
          className={`bg-primary min-h-screen overflow-hidden px-[1.5rem] md:px-[7rem] xl:px-[10rem] text-white ${
            isStickyNav && 'md:mt-[6rem] mt-[5rem]'
          } `}>
          <h1 className="text-4xl uppercase text-center py-5 pb-10">
            My Works
          </h1>
          <div className="flex space-x-5 justify-start sm:justify-center overflow-scroll scrollbar-hide">
            <div
              onClick={() => handleCategory('All')}
              className={`inline-block flex-shrink-0  px-4 py-2 text-center uppercase  ${
                selectedCategory == 'All'
                  ? 'bg-gradient-to-tl from-blue-600 to-cyan-400   '
                  : 'border-2  border-cyan-400 hover:bg-cyan-400/5'
              } bg-transparent  rounded-lg cursor-pointer leading-pro ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85 hover:shadow-soft-xs cyan-400`}>
              All
            </div>

            <div
              onClick={() => handleCategory('WebApp')}
              className={`inline-block px-4 py-2 flex-shrink-0 text-center uppercase  ${
                selectedCategory == 'WebApp'
                  ? 'bg-gradient-to-tl from-blue-600 to-cyan-400   '
                  : 'border-2  border-cyan-400 hover:bg-cyan-400/5'
              } bg-transparent  rounded-lg cursor-pointer leading-pro ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85 hover:shadow-soft-xs cyan-400`}>
              Web App
            </div>

            <div
              onClick={() => handleCategory('WebPage')}
              className={`inline-block px-4 py-2 flex-shrink-0 text-center uppercase  ${
                selectedCategory == 'WebPage'
                  ? 'bg-gradient-to-tl from-blue-600 to-cyan-400  '
                  : 'border-2  border-cyan-400 hover:bg-cyan-400/5'
              } bg-transparent  rounded-lg cursor-pointer leading-pro ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85 hover:shadow-soft-xs cyan-400`}>
              web page
            </div>

            <div
              onClick={() => handleCategory('python')}
              className={` px-4 py-2 flex-shrink-0 text-center uppercase  ${
                selectedCategory == 'python'
                  ? 'bg-gradient-to-tl from-blue-600 to-cyan-400'
                  : 'border-2  border-cyan-400 hover:bg-cyan-400/5'
              } bg-transparent  rounded-lg cursor-pointer leading-pro ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85 hover:shadow-soft-xs cyan-400`}>
              python
            </div>
          </div>
          {isLoading ? <Spinner /> : <ProjectContainer />}
        </div>
      )}
    </>
  );
};

export async function getStaticProps() {
  const projectsData = await fetchProjectsData();

  return {
    props: { projectsData },
  };
}

export default Projects;
