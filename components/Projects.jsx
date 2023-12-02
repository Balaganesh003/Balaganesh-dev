import React from 'react';
import ProjectItem from './ProjectItem';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import { useSelector } from 'react-redux';

const mainProjects = [
  'bccf2959-3243-43c5-ac15-669f88de2293',
  '0168f832-b54e-4225-b5f5-4c3ebd1ad00b',
  'c225cf9d-985b-46e3-8718-d96bb11ee271',
];

const Projects = () => {
  const { projects } = useSelector((state) => state.projects);

  const filterProjects = projects.filter((pro) =>
    mainProjects.includes(pro._id)
  );

  return (
    <div id="project-section" className="pt-[7rem]">
      <div
        data-aos="fade-up"
        data-aos-duration="1150"
        data-aos-once="true"
        data-aos-delay="200">
        <h1 className="text-xl uppercase text-center text-HeadingGray hover:text-white transition-all duration-200 cursor-pointer">
          Projects
        </h1>

        <div className="flex items-center flex-col">
          {filterProjects &&
            filterProjects.map((project, index) => (
              <ProjectItem
                project={project}
                key={project._id}
                index={index + 1}
              />
            ))}
        </div>

        <a className="flex justify-center mt-16 md:mt-24 ">
          <Link href="/projects">
            <span className="group text-base md:text-xl border-[1.5px] hover:bg-textGreen/5 border-textGreen  px-6 pl-10 py-3 rounded-lg  text-white transition-all duration-200 cursor-pointer">
              View All Projects
              <BsArrowRight className="text-xl ml-1 inline-block opacity-0 group-hover:animate-giggleRight group-hover:opacity-100 " />
            </span>
          </Link>
        </a>
      </div>
    </div>
  );
};

export default Projects;
