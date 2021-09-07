import { Route, Redirect } from "react-router-dom";
import styled from "styled-components";
import useAxios from "../../hooks/useAxios";
import { routes } from "../../routes";
import Card from "./Card";
import ProjectsToSkill from "./ProjectsToSkill";

const Container = styled.div`
  margin: 0px 30px 30px;
  border-top: 1px solid ${(props) => props.theme.borderColor};
  padding-top: 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

function Projects() {
  const { loading, data, error } = useAxios("projects");

  if (error) {
    return <div>Not Found</div>;
  }

  if (!data || loading) {
    return <div>loading..</div>;
  }

  const { httpStatus, result: projects } = data;

  return (
    <Container>
      <Route path={routes.home} exact>
        {httpStatus === "OK" &&
          projects.map((project) => (
            <Card
              key={project.projectId}
              size="300px"
              projectId={project.projectId}
              userId={project.founderId}
              title={project.title}
              username={project.founderNickName}
              skills={project.requiredSkills}
              likes={project.recommendedCount}
            />
          ))}
      </Route>
      <Route path={`${routes.skill}/:skillName/`} exact>
        <ProjectsToSkill />
      </Route>
      <Redirect to={routes.home} />
    </Container>
  );
}

export default Projects;
