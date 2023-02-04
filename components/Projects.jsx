import React from 'react';

const Projects = () => {
  return (
    <div>
      <h1 className="text-xl uppercase text-center text-HeadingGray hover:text-white transition-all duration-200 cursor-pointer">
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-x-5 ">
        <div className=" max-w-md  ">
          <img
            className="rounded-lg mt-5"
            src="./grocery-app.gif"
            alt="grocery-app"
          />
        </div>
        <div className="max-w-lg">
          <h1 className="text-xl uppercase text-center my-4 md:mb-2">
            Grocery App
          </h1>
          <p className="text-HeadingGray">
            It is a cutting-edge grocery shopping application that offers an
            effortless and convenient shopping experience to its users. users
            can browse through an extensive range of grocery items, add them to
            their cart, and place an order.
          </p>
          <div className="flex  gap-x-10 gap-y-5 mt-4 flex-wrap">
            <p className="flex items-center text-lg ">
              <span className="mr-2 text-teal-500 font-bold text-xl">&gt;</span>
              React JS
            </p>
            <p className="flex items-center text-lg ">
              <span className="mr-2 text-teal-500 font-bold text-xl">&gt;</span>
              Redux
            </p>
            <p className="flex items-center text-lg ">
              <span className="mr-2 text-teal-500 font-bold text-xl">&gt;</span>
              Tailwind CSS
            </p>
            <p className="flex items-center text-lg ">
              <span className="mr-2 text-teal-500 font-bold text-xl">&gt;</span>
              Firebase
            </p>
            <p className="flex items-center text-lg ">
              <span className="mr-2 text-teal-500 font-bold text-xl">&gt;</span>
              Framer Motion
            </p>
          </div>
          <div className="flex gap-5 items-center justify-around">
            <button className="py-2 px-4 mt-10 w-[9rem]  border-HeadingBlue border-2 rounded-full cursor-pointer hover:border-cyan-500 transition-all duration-200 hover:bg-cyan-300/5 active:scale-95">
              GitHub
            </button>
            <button className="py-2 px-4 mt-10 w-[9rem] border-HeadingBlue border-2 rounded-full cursor-pointer hover:border-cyan-500 transition-all duration-200 hover:bg-cyan-300/5 active:scale-95">
              Live Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
