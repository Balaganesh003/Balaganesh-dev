import React from 'react';
import ProjectItem from './ProjectItem';
import projectData from '@/projectData';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';

const Projects = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1150"
      data-aos-once="true"
      data-aos-delay="200"
      id="project-section"
      className="pt-[7rem]">
      <h1 className="text-xl uppercase text-center text-HeadingGray hover:text-white transition-all duration-200 cursor-pointer">
        Projects
      </h1>
      <div className="flex items-center flex-col">
        {projectData.map((project) => (
          <ProjectItem project={project} key={project.id} />
        ))}
      </div>

      <a className="flex justify-center mt-24">
        <Link href="/projects">
          <span className="group text-xl text-HeadingGray hover:text-white transition-all duration-200 cursor-pointer">
            View All Projects
            <BsArrowRight className="text-xl ml-1 inline-block opacity-0 group-hover:animate-giggleRight group-hover:opacity-100 " />
          </span>
        </Link>
      </a>
    </div>
  );
};

export default Projects;
