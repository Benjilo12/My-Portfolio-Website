import ProjectCard from "./ProjectCard";

function ProjectList({ data }) {
  return (
    <>
      {data?.map((item, index) => (
        <ProjectCard item={item} key={index} />
      ))}
    </>
  );
}

export default ProjectList;
