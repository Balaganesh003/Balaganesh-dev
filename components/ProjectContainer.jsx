import React from 'react';
import { motion } from 'framer-motion';
import ProjectItemCard from './ProjectItemCard';
import { useSelector } from 'react-redux';

const ProjectContainer = () => {
  const { projects, selectedCategory } = useSelector((state) => state.projects);

  return (
    <motion.div className="mt-10 gap-x-8 gap-y-5 xl:gap-x-16 xl:gap-y-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {projects
        .filter(
          (project) =>
            project.category === selectedCategory || selectedCategory === 'All'
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
    </motion.div>
  );
};

export default ProjectContainer;
