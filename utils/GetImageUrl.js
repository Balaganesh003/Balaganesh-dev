import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: true,
});

const GenerateImageUrl = (project) => {
  return builder.image(project.image).url();
};

export default GenerateImageUrl;
