import React from 'react';
import Skill from './Skill';

const skillList = [
  { skillname: 'HTML', percentage: 95 },
  { skillname: 'CSS', percentage: 75 },
  { skillname: 'Javascript', percentage: 75 },
  { skillname: 'React Js', percentage: 60 },
  { skillname: 'Next Js', percentage: 60 },
  { skillname: 'Tailwind', percentage: 55 },
  { skillname: 'Bootstrap', percentage: 35 },
  { skillname: 'Firebase', percentage: 35 },
  { skillname: 'Sanity', percentage: 35 },
  { skillname: 'Python', percentage: 60 },
];

const Skills = () => {
  return (
    <div>
      <h1 className="uppercase text-HeadingGray text-xl text-center my-10  duration-200 transition-all cursor-pointer hover:text-gray-200  ">
        Skills
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
        {skillList.map((skill, index) => (
          <Skill
            key={index}
            skillname={skill.skillname}
            percentage={skill.percentage}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
