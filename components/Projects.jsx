import React from 'react';
import ProjectItem from './ProjectItem';
import projectData from '@/projectData';

const Projects = () => {
  return (
    <div>
      <h1 className="text-xl uppercase text-center text-HeadingGray hover:text-white transition-all duration-200 cursor-pointer">
        Projects
      </h1>
      <div>
        {projectData.map((project) => (
          <ProjectItem project={project} key={project.id} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
