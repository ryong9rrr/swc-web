import styled from "styled-components";
import { Content } from "../shared";
import Project from "./Project";
import ProjectHeader from "./ProjectHeader";

const Container = styled(Content)``;

function Projects() {
  return (
    <Container>
      <ProjectHeader />
      <Project />
    </Container>
  );
}

export default Projects;
