import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProjectItemCard = React.memo(
  ({ title, imageUrl, description, githubLink }) => {
    return (
      <Link href={githubLink} target="_blank" rel="noopener noreferrer">
        <div className="max-w-[25rem] w-full h-full transition-transform duration-300 m-auto border border-gray-700 hover:border-secondary px-4 py-6 rounded-lg hover:scale-[102%]">
          <div className="relative w-full h-48">
            <Image
              src={imageUrl}
              alt={title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
            />
          </div>
          <h2 className="text-2xl font-bold text-center py-2">{title}</h2>
          <p className="text-center text-HeadingGray">{description}</p>
        </div>
      </Link>
    );
  }
);

ProjectItemCard.displayName = 'ProjectItemCard';

export default ProjectItemCard;
