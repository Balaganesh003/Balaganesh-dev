import React from 'react';
import SkillItem from './SkillItem';
import SkillsData from '@/skillsData';

const Skills = () => {
  return (
    <div>
      <h1 className="uppercase text-HeadingGray text-xl text-center my-10  duration-200 transition-all cursor-pointer hover:text-gray-200  ">
        Skills
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
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
