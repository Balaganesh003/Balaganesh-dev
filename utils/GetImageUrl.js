import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: true,
});

const GenerateImageUrl = async (project) => {
  const imgUrl = builder.image(project.image);
  return imgUrl.url();
};

export default GenerateImageUrl;
