import React from 'react';

const SkillItem = ({ skillName, percentage, skillStrength }) => {
  return (
    <div className="flex flex-col group cursor-pointer  group border px-4 border-HeadingGray/50 rounded-xl py-2 hover:scale-105 hover:shadow-black hover:shadow-sm transition-all duration-200">
      <div className="text-lg captilize ">{skillName}</div>
      <div className=" flex gap-2 items-center ">
        <div className="w-fit text-[0.65rem] text-HeadingGray">
          {percentage}%
        </div>
        <div
          className={`w-full before:shadow-black before:shadow-lg  h-2 rounded-2xl before:bg-gradient-to-r from-primaryPink to-secondaryPink before:content-[' '] before:block  before:h-full ${skillStrength}  before:rounded-lg`}></div>
      </div>
    </div>
  );
};

export default SkillItem;
