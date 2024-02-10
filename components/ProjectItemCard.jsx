import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Spinner from './Spinner'; // Import Spinner component

const ProjectItemCard = ({ title, imageUrl, description, githubLink }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 40, scale: 0.8 }}
      transition={{ duration: 0.75, ease: 'easeInOut' }}
      className="rounded-lg ">
      <Link target="_blank" href={githubLink}>

        <div className="max-w-[25rem] projectcard w-full h-full md:hover:scale-[102%]  transition-all duration-300 m-auto border border-gray-700 hover:border-secondary px-4 py-6    rounded-lg">
          <div className="object-cover w-full rounded-lg">
            <Image
              src={imageUrl}
              alt={title}
              className="object-cover w-full max-h-[13rem] aspect-video rounded-lg"
              width={500}
              height={400}
            />
          </div>
          <h1 className="text-2xl font-bold text-center py-2">{title}</h1>
          <p className="text-center text-HeadingGray">{description}</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectItemCard;
