import ProjectItemCard from '@/components/ProjectItemCard';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Projects = () => {
  const [isStickyNav, setIsStickyNav] = useState(false);

  const { projects } = useSelector((state) => state.projects);

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
      className={`bg-primary px-[1.5rem] md:px-[7rem] xl:px-[10rem] text-white ${
        isStickyNav && 'md:mt-[6rem] mt-[5rem]'
      } `}>
      <h1 className="text-4xl uppercase text-center py-5">My Works</h1>
      <div className="flex space-x-5 w-full justify-center overflow-x-scroll scrollbar-hide">
        <a className="inline-block px-4 py-2 text-center bg-gradient-to-tl from-blue-600 to-cyan-400 uppercase  transition-all rounded-lg cursor-pointer ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85 hover:shadow-soft-xs text-white">
          Website
        </a>

        <a className=" inline-block px-4 py-2 text-center uppercase transition-all bg-transparent border-2 rounded-lg cursor-pointer border-cyan-400 leading-pro ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85 hover:shadow-soft-xs cyan-400">
          Apps
        </a>

        <a className="inline-block px-4 py-2 text-center uppercase transition-all bg-transparent border-2 rounded-lg cursor-pointer border-cyan-400 leading-pro ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85 hover:shadow-soft-xs cyan-400">
          Utils
        </a>

        <a className="inline-block px-4 py-2 text-center uppercase transition-all bg-transparent border-2 rounded-lg cursor-pointer border-cyan-400 leading-pro ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85 hover:shadow-soft-xs cyan-400">
          Python
        </a>
      </div>

      <div className="mt-10 gap-x-8 gap-y-5 xl:gap-x-16 xl:gap-y-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map(({ title, image, description }, i) => (
          <ProjectItemCard
            key={i * 99}
            title={title}
            image={image}
            description={description}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
