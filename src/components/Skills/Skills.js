import styled from "styled-components";
import { Content } from "../shared";
import SkillBtns from "./SkillBtns";
import SkillHeader from "./SkillHeader";

const Container = styled(Content)`
  padding: 10px 30px;
`;

function Skills() {
  return (
    <Container>
      <SkillHeader />
      <SkillBtns />
    </Container>
  );
}

export default Skills;
