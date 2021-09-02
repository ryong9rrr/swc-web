import { useParams } from "react-router-dom";

//params.projectId 에 맞는 프로젝트 상세데이터를 api로 불러와야함
function Project() {
  const params = useParams();
  console.log(params);
  return <>project {params.projectId}</>;
}

export default Project;
