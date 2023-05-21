import { groq } from 'next-sanity';
import { sanityClient } from '../../sanity';

const ProjectQuery = groq`
*[ _type == "project"]{
    _id,
    ...
}
`;

export default async function handler(req, res) {
  const projects = await sanityClient.fetch(ProjectQuery);
  res.status(200).json(projects);
}
