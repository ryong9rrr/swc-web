import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button, Separator, SquareButton } from "../shared";

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
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const SortBtns = styled.div`
  display: flex;
  align-items: center;
`;

const WriteBtn = styled(SquareButton)`
  margin-left: 15px;
  a {
    color: inherit;
  }
`;

function ProjectsHeader({ isLoggedIn }) {
  return (
    <Container>
      <Title>Toy Projects</Title>
      <Btns>
        <SortBtns>
          <Button>최신순</Button>
          <Separator interval="3px" />
          <Button>인기순</Button>
        </SortBtns>
        <WriteBtn disabled={!isLoggedIn}>
          {isLoggedIn ? (
            <Link to="/projects/new-project/">글쓰기</Link>
          ) : (
            "글쓰기"
          )}
        </WriteBtn>
      </Btns>
    </Container>
  );
}

export default ProjectsHeader;
