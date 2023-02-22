import React from 'react';

const SkillItem = ({ skillName, percentage, skillStrength }) => {
  return (
    <div className=" hover:scale-105 hover:shadow-black hover:rounded-xl hover:shadow-sm transition-all   duration-200">
      <div
        data-aos="fade-up"
        data-aos-duration="1150"
        data-aos-once="true"
        data-aos-delay="200"
        className="flex flex-col group cursor-pointer  group border px-2 border-HeadingGray/50 rounded-xl  py-2 ">
        <div className="text-lg captilize ">{skillName}</div>
        <div className=" flex gap-2 items-center ">
          <div className="w-fit text-[0.65rem] text-HeadingGray">
            {percentage}%
          </div>
          <div
            className={`w-full before:shadow-black before:shadow-lg  h-2 rounded-2xl before:bg-gradient-to-r from-primaryPink to-secondaryPink before:content-[' '] before:block  before:h-full ${skillStrength}  before:rounded-lg`}></div>
        </div>
      </div>
    </div>
  );
};

export default SkillItem;
