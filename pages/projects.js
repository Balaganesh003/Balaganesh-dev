import React, { useEffect, useState } from 'react';

const Projects = () => {
  const [isStickyNav, setIsStickyNav] = useState(false);

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
      className={`h-screen bg-primary px-[1.5rem] md:px-[7rem] xl:px-[10rem] text-white ${
        isStickyNav && 'mt-[6rem] mt-[5rem]'
      } `}>
      <h1 className="text-4xl uppercase text-center pt-10">My Works</h1>
    </div>
  );
};

export default Projects;
