import styled from "styled-components";

const Container = styled.div`
  padding: 20px 0px 10px;
`;

const Btns = styled.div``;

const Btn = styled.button`
  all: unset;
  cursor: pointer;
  border: 2px solid ${(props) => props.theme.borderColor};
  border-radius: 5px;
  padding: 5px 10px;
  margin-right: 10px;
  &:hover {
    border-color: ${(props) => props.theme.accent};
    color: ${(props) => props.theme.accent};
  }
`;

function SkillBtns() {
  return (
    <Container>
      <Btns>
        <Btn>React</Btn>
        <Btn>Django</Btn>
        <Btn>Spring</Btn>
        <Btn>Vue</Btn>
      </Btns>
    </Container>
  );
}

export default SkillBtns;
