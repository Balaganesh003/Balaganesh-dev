import React from 'react';

const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex-1 flex">
        <div className="bg-gradient-to-r from-headingPurple/5 to-headingPurple/50  rounded-lg h-[25rem] flex">
          <img src="/My-img.png" alt="My Logo" className="mb-5" />
        </div>
      </div>
      <div className="flex-1 max-w-lg">
        <h1 className="text-3xl font-bold ">About Me</h1>
        <h1 class=" text-transparent text-[3rem] bg-clip-text bg-gradient-to-r from-HeadingBlue to-headingPurple">
          I&rsquo;m Balaganesh
        </h1>
        <p>
          In the realm of frontend development and python programming, where the
          lines between art and science blur, I strive to strike a harmonious
          balance. My name is Balaganesh, a master of HTML, CSS, JavaScript,
          React and Next.js, and a creator of visually stunning and functionally
          sound websites and applications.
        </p>
        <p>
          As a seasoned professional, I am not only adept at utilizing these
          technologies to their fullest potential, but also deeply committed to
          staying physically and mentally fit through hobbies such as cycling
          and jogging
        </p>
        <p>
          These activities not only keep me in a state of optimal physical
          health but also foster a clear and creative mindset, allowing me to
          approach my work with renewed energy and focus. This holistic approach
          to my professional and personal life has enabled me to consistently
          deliver exceptional results.
        </p>
        <p>
          I am always eager to expand my skillset and welcome new and
          challenging projects. Thank you for visiting my website, and I invite
          you to peruse my portfolio to gain a comprehensive understanding of my
          capabilities and experience.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
