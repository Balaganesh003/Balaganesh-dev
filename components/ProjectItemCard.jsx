import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const ProjectItemCard = ({ title, image, description, githubLink }) => {
  return (
    <Link target="_blank" href={githubLink}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="max-w-[25rem] m-auto border border-gray-700 shadow-2xl px-4 py-6 md:border-none md:shadow-none md:px-0 md:py-3 rounded-lg">
        <div>
          {image && (
            <Image
              src={image}
              alt="grocery-app"
              className="object-cover rounded-lg"
              width={400}
              height={300}
            />
          )}
        </div>
        <h1 className="text-2xl font-bold text-center py-2">{title}</h1>
        <p className="text-center text-HeadingGray">{description}</p>
      </motion.div>
    </Link>
  );
};

export default ProjectItemCard;
