import { Link } from "react-router-dom";
import styled from "styled-components";

const Img = styled.img`
  width: 60px;
  height: 60px;
  max-width: 100%;
  border-radius: 50%;
`;

const Username = styled.span`
  margin-bottom: 10px;
`;

const UserInfoBtn = styled.span`
  a {
    color: inherit;
  }
  padding: 5px;
  cursor: pointer;
  border: 0.5;
  &:hover {
    font-weight: 600;
    border: 0.5px solid ${(props) => props.theme.borderColor};
    border-radius: 3px;
  }
`;

const UserBox = styled.div`
  display: flex;
  flex-direction: column;
  span {
    font-size: 0.9rem;
    text-align: center;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${UserBox} {
    margin-left: 10px;
  }
`;

function UserBar() {
  return (
    <Container>
      <Img src="https://cdn.pixabay.com/photo/2021/08/13/14/23/animal-6543231_960_720.jpg" />
      <UserBox>
        <Username>OOO님 환영해요!</Username>
        <UserInfoBtn>
          <Link to="/">마이페이지</Link>
        </UserInfoBtn>
      </UserBox>
    </Container>
  );
}

export default UserBar;
