import styled from "styled-components";
import { AccentButton, Button, Separator } from "../shared";

const Container = styled.div`
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.span`
  font-size: 2rem;
  font-weight: 600;
`;

const Btns = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SortBtns = styled.div`
  display: flex;
  align-items: center;
`;

function ProjectHeader() {
  return (
    <Container>
      <Title>Toy Projects</Title>
      <Btns>
        <SortBtns>
          <Button>최신순</Button>
          <Separator interval="3px" />
          <Button>인기순</Button>
        </SortBtns>
        <AccentButton>글쓰기</AccentButton>
      </Btns>
    </Container>
  );
}

export default ProjectHeader;
