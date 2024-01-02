import React from 'react';
import ProjectItemCard from './ProjectItemCard';
import { useSelector } from 'react-redux';

const categoryVariants = {
  python: 'python',
  WebApp: 'WebApp',
  WebPage: 'WebPage',
};

const ProjectContainer = () => {
  const { projects, selectedCategory } = useSelector((state) => state.projects);

  return (
    <div className="mt-10 gap-x-8 gap-y-5 xl:gap-x-16 xl:gap-y-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {projects?.length !== 0 &&
        projects &&
        projects
          .filter(
            (project) =>
              project.categories[0].title ===
                categoryVariants[selectedCategory] || selectedCategory === 'All'
          )
          .map(({ title, imageUrl, description, githubLink }, i) => (
            <ProjectItemCard
              key={i * 99}
              title={title}
              imageUrl={imageUrl}
              description={description}
              githubLink={githubLink}
            />
          ))}
    </div>
  );
};

export default ProjectContainer;
