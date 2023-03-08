import { groq } from 'next-sanity';
import { sanityClient } from '../../sanity';

const ProjectQuery = groq`
*[_type == "Project"]{
    _id,
    ...
} | order(_createdAt desc)
`;

export default async function handler(req, res) {
  const projects = await sanityClient.fetch(ProjectQuery);
  res.status(200).json(projects);
}
