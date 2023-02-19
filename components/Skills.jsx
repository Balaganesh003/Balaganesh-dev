import React from 'react';
import SkillItem from './SkillItem';

const SkillsData = [
  {
    skillName: 'HTML',
    skillStrength: 'before:w-[95%]',
    percentage: 95,
  },
  {
    skillName: 'CSS',
    percentage: 75,
    skillStrength: 'before:w-[75%]',
  },
  {
    skillName: 'Javascript',
    skillStrength: 'before:w-[75%]',
    percentage: 75,
  },
  {
    skillName: 'React Js',
    percentage: 65,
    skillStrength: 'before:w-[65%]',
  },
  {
    skillName: 'Next Js',
    percentage: 55,
    skillStrength: 'before:w-[55%]',
  },
  {
    skillName: 'Tailwind CSS',
    percentage: 60,
    skillStrength: 'before:w-[60%]',
  },
  {
    skillName: 'Bootstrap',
    percentage: 35,
    skillStrength: 'before:w-[35%]',
  },
  {
    skillName: 'Firebase',
    percentage: 40,
    skillStrength: 'before:w-[40%]',
  },
  {
    skillName: 'Sanity',
    percentage: 35,
    skillStrength: 'before:w-[35%]',
  },
  {
    skillName: 'Python',
    percentage: 65,
    skillStrength: 'before:w-[65%]',
  },
  {
    skillName: 'C',
    percentage: 60,
    skillStrength: 'before:w-[60%]',
  },
  {
    skillName: 'C++',
    percentage: 55,
    skillStrength: 'before:w-[55%]',
  },
];

const Skills = () => {
  return (
    <div id="skills-section" className="py-[8rem] ">
      <h1 className="uppercase text-HeadingGray text-xl text-center my-10  duration-200 transition-all cursor-pointer hover:text-gray-200  ">
        Skills
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-x-12 gap-y-8">
        {SkillsData.map((skill, index) => (
          <SkillItem
            key={index}
            skillName={skill.skillName}
            percentage={skill.percentage}
            skillStrength={skill.skillStrength}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
