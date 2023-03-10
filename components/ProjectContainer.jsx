import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectItemCard from './ProjectItemCard';
import { useSelector } from 'react-redux';

const categoryVariants = {
  python: '583a7826-c467-4de3-9083-fd406157b557',
  WebApp: '264a17e3-6587-4d87-b6dc-a7fe39fcacf0',
  WebPage: '854a6450-6537-40af-9d30-c6635fe2dd88',
};

const ProjectContainer = () => {
  const { projects, selectedCategory } = useSelector((state) => state.projects);

  return (
    <div className="mt-10 gap-x-8 gap-y-5 xl:gap-x-16 xl:gap-y-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {projects
        .filter(
          (project) =>
            project.categories[0]._ref === categoryVariants[selectedCategory] ||
            selectedCategory === 'All'
        )
        .map(({ title, image, description, githubLink }, i) => (
          <ProjectItemCard
            key={i * 99}
            title={title}
            image={image}
            description={description}
            githubLink={githubLink}
          />
        ))}
    </div>
  );
};

export default ProjectContainer;
