import { useParams } from "react-router-dom";

function Project() {
  const params = useParams();
  console.log(params);
  return <>project {params.projectId}</>;
}

export default Project;
