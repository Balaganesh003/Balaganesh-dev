import React, { useEffect, useState } from 'react';
import ProjectContainer from '@/components/ProjectContainer';
import { useSelector, useDispatch } from 'react-redux';
import { projectActions } from '@/store/project-slice';

const Projects = () => {
  const dispatch = useDispatch();
  const [isStickyNav, setIsStickyNav] = useState(false);

  const { selectedCategory } = useSelector((state) => state.projects);

  useEffect(() => {}, [selectedCategory]);
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
    <div
      className={`bg-primary min-h-screen overflow-hidden px-[1.5rem] md:px-[7rem] xl:px-[10rem] text-white ${
        isStickyNav && 'md:mt-[6rem] mt-[5rem]'
      } `}>
      <h1 className="text-4xl uppercase text-center py-5 pb-10">My Works</h1>
      <div className="flex space-x-5 justify-center overflow-scroll scrollbar-hide">
        <div
          onClick={() => handleCategory('All')}
          className={`inline-block flex-shrink-0 ml-[8rem] md:ml-0 px-4 py-2 text-center uppercase  ${
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
      <ProjectContainer />
    </div>
  );
};

export default Projects;
