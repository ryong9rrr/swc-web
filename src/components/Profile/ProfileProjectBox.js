import styled from "styled-components";
import Card from "../Projects/Card";
import { Box } from "../shared";

const Container = styled(Box)`
  border: none;
  background-color: ${(props) => props.theme.bgColor};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

function ProfileProjectBox({ projects }) {
  return (
    <Container>
      {projects.map((project, index) => (
        <Card key={index} size="200px" projectId={project.joinProjectId} />
      ))}
    </Container>
  );
}

export default ProfileProjectBox;
