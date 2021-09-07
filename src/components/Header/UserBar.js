import { Link } from "react-router-dom";
import styled from "styled-components";
import { routes } from "../../routes";
import { Avatar } from "../shared";

const Username = styled.span`
  margin-bottom: 10px;
`;

const Btn = styled.span`
  padding: 5px;
  cursor: pointer;
  font-weight: 600;
  border: 0.5px solid ${(props) => props.theme.borderColor};
  border-radius: 3px;
  &:hover {
    opacity: 0.7;
  }
  a {
    color: inherit;
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

const Btns = styled.div``;

function UserBar({ userData, logout }) {
  console.log(userData);
  const { nickname, userId } = userData;
  return (
    <Container>
      <Avatar size="60px" url={userData.img} />
      <UserBox>
        <Username>{nickname}님 환영해요!</Username>
        <Btns>
          <Btn>
            <Link to={`${routes.user}/${userId}`}>마이페이지</Link>
          </Btn>
          <Btn onClick={logout}>로그아웃</Btn>
        </Btns>
      </UserBox>
    </Container>
  );
}

export default UserBar;
