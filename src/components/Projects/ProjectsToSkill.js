import { useParams, useRouteMatch } from "react-router-dom";

function ProjectsToSkill() {
  const params = useParams();
  const match = useRouteMatch();

  console.log(params, match);

  return <div>{params.skillName}</div>;
}

export default ProjectsToSkill;
