import React, { useEffect, useState } from 'react';
import ProjectItemCard from './ProjectItemCard';
import { useSelector } from 'react-redux';

const categoryVariants = {
  python: 'python',
  WebApp: 'WebApp',
  WebPage: 'WebPage',
};


const ProjectContainer = () => {
  const { projects, selectedCategory } = useSelector((state) => state.projects);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [animationKey, setAnimationKey] = useState(Date.now());

  useEffect(() => {
    const filtered = projects.filter(
      (project) =>
        project.categories[0].title === selectedCategory ||
        selectedCategory === 'All'
    );
    setFilteredProjects(filtered);
    setAnimationKey(Date.now());
  }, [projects, selectedCategory]);

  return (
    <div
      key={animationKey}
      className="mt-10 gap-x-8 gap-y-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {filteredProjects.map((project) => (
        <ProjectItemCard
          key={project.id}
          title={project.title}
          imageUrl={project.imageUrl}
          description={project.description}
          githubLink={project.githubLink}
        />
      ))}
    </div>
  );
};

export default ProjectContainer;
