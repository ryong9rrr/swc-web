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
  const { httpStatus: projectsStatus, result: projects } = getAllProjects;

  return (
    <Container>
      <Route path="/" exact>
        {projectsStatus === "OK" &&
          projects.map((card) => <Card key={card.projectId} {...card} />)}
      </Route>
      <Route path="/projects/skill/:skillName/" exact>
        <ProjectsToSkill />
      </Route>
    </Container>
  );
}

export default Projects;
