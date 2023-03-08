export const fetchProjectsData = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/fetchProjects`
  );
  const data = await res.json();
  return data;
};
