import React from 'react';

const skillList = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Next.js',
  'Tailwind CSS',
  'Bootstrap',
  'Python',
  'Flask',
  'Git',
  'GitHub',
  'Firebase',
  'Figma',
  'Sanity',
];

const Skills = () => {
  return (
    <div>
      <h1 className="uppercase text-HeadingGray text-xl text-center my-10  duration-200 transition-all cursor-pointer hover:text-gray-200  ">
        Skills
      </h1>
      <div>
        {skillList.map((skill, index) => (
          <div key={index} className="flex items-center justify-center">
            <p className="text-[1.2rem] ml-2">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
