import { useParams, useRouteMatch } from "react-router-dom";

// api로 "params.skillName에 맞는 프로젝트들을 받아와서 <Card>로 리턴해야함."
function ProjectsToSkill() {
  const params = useParams();
  const match = useRouteMatch();

  console.log(params, match);

  return <div>{params.skillName}</div>;
}

export default ProjectsToSkill;
