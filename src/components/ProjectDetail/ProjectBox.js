import styled from "styled-components";
import { TextToArray } from "../../utills";
import { Box, RoundButton, Skill } from "../shared";

const Container = styled(Box)`
  margin-bottom: 30px;
  div {
    margin-bottom: 50px;
  }
  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 2rem;
  }
  footer > button {
    display: block;
    margin-left: auto;
  }
`;

function ProjectBox({ projectTitle, requiredSkills, projectContent }) {
  return (
    <Container>
      <div>
        <h1>{projectTitle}</h1>
      </div>
      <div>
        {TextToArray(requiredSkills).map((skill, index) => (
          <Skill key={index}>{skill}</Skill>
        ))}
      </div>
      <div>
        <h2>소개</h2>
      </div>
      <div>{projectContent}</div>
      <footer>
        <RoundButton>참여 신청</RoundButton>
      </footer>
    </Container>
  );
}

export default ProjectBox;
