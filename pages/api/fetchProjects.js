import { groq } from 'next-sanity';
import { sanityClient } from '../../sanity';
import imageUrlBuilder from '@sanity/image-url';

// Function to build the image URL from the image asset reference
function urlFor(source) {
  return imageUrlBuilder(sanityClient).image(source).url();
}

const ProjectQuery = groq`
*[ _type == "project"]{
    _id,
    title,
    description,
    image,
    githubLink,
    liveLink,
    categories[]->{
        _id,
        title
    },
    techstack[]->{
        _id,
        name
    },
}
`;

export default async function handler(req, res) {
  const projects = await sanityClient.fetch(ProjectQuery);
  const projectsWithImageUrl = projects.map((project) => ({
    ...project,
    imageUrl: project.image ? urlFor(project.image) : null,
  }));
  res.status(200).json(projectsWithImageUrl);
}
