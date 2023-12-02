import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const ProjectItemCard = ({ title, imageUrl, description, githubLink }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="rounded-lg ">
      <Link target="_blank" href={githubLink}>
        <div className="max-w-[25rem] md:hover:scale-105  transition-all duration-300 m-auto border border-gray-700 shadow-2xl px-4 py-6 md:border-none md:shadow-none md:px-0 md:py-3 rounded-lg">
          <div className=" object-cover w-full rounded-lg">
            {imageUrl && (
              <Image
                src={imageUrl}
                alt="grocery-app"
                className="object-cover  w-full max-h-[13rem] aspect-video rounded-lg"
                width={500}
                height={400}
              />
            )}
          </div>
          <h1 className="text-2xl font-bold text-center py-2">{title}</h1>
          <p className="text-center text-HeadingGray">{description}</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectItemCard;
