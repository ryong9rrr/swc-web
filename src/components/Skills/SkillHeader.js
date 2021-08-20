import styled from "styled-components";
import { Button, Separator } from "../shared";

const Container = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  padding-top: 10px;
  padding-bottom: 20px;
  display: flex;
  align-items: center;
`;

function SkillHeader() {
  return (
    <Container>
      <Button>Front-end</Button>
      <Separator height="20px" />
      <Button>Back-end</Button>
      <Separator height="20px" />
      <Button>iOS</Button>
      <Separator height="20px" />
      <Button>Android</Button>
    </Container>
  );
}

export default SkillHeader;
