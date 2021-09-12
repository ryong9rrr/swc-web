import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import Card from "./Card";

function ProjectsToSkill() {
  const { skillName } = useParams();

  const { loading, data, error } = useAxios(`projects/skill/${skillName}`);

  if (error) {
    return <div>Not Found</div>;
  }

  if (!data || loading) {
    return <div>loading...</div>;
  }

  const { httpStatus, result: projects } = data;

  return (
    <>
      {projects?.map((project, index) => (
        <Card
          key={index}
          size="300px"
          projectId={project.projectId}
          userId={project.founderId}
          title={project.title}
          username={project.founderNickName}
          skills={project.requiredSkills}
          likes={project.recommendedCount}
        />
      ))}
    </>
  );
}

export default ProjectsToSkill;
