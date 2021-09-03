import { Route } from "react-router-dom";
import styled from "styled-components";
import { getAllProjects } from "../../sampleData";
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
  //getAllProjects 는 "api로 모든 프로젝트를 받아왔다"고 가정
  const { httpStatus, result: projects } = getAllProjects;

  return (
    <Container>
      <Route path="/" exact>
        {httpStatus === "OK" &&
          projects.map((project) => (
            <Card key={project.projectId} size="300px" {...project} />
          ))}
      </Route>
      <Route path="/projects/skill/:skillName/" exact>
        <ProjectsToSkill />
      </Route>
    </Container>
  );
}

export default Projects;
