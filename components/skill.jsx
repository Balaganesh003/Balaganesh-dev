import React from 'react';

const Skill = ({ skillname, percentage }) => {
  return (
    <div className="flex flex-col group cursor-pointer">
      <div>{skillname}</div>
      <div className=" flex gap-2 items-center ">
        <div className="w-fit text-[0.65rem] text-HeadingGray">
          {percentage}%
        </div>
        <div
          className={`w-full h-2 rounded-lg before:bg-gradient-to-r from-primaryPink to-secondaryPink before:content-[' '] before:block before:hover:shadow-xl ${`before:w-[${percentage}%]`} before:h-full before:rounded-lg `}></div>
      </div>
    </div>
  );
};

export default Skill;
