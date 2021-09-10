import styled from "styled-components";
import { TextToArray } from "../../utills";
import { Avatar, Box, Skill } from "../shared";

const Container = styled(Box)`
  border: none;
  width: 100%;
  display: flex;
`;

const UserImg = styled.div`
  padding: 0px 40px;
  margin-right: 30px;
`;

const Row = styled.div`
  margin-top: 30px;
`;

const Username = styled.div`
  display: flex;
  h1 {
    font-size: 2rem;
    margin-right: 30px;
  }
`;

const UserInfo = styled.div``;

const Edit = styled.button``;

function UserBox({ userId, nickname, skills, isLoggedIn }) {
  //임시코드
  const { userId: loggedUserId } =
    isLoggedIn && JSON.parse(localStorage.getItem("user"));
  return (
    <Container>
      <UserImg>
        <div>
          <Avatar size="150px" />
        </div>
      </UserImg>
      <UserInfo>
        <Username>
          <h1>{nickname}</h1>
          {isLoggedIn && userId === loggedUserId && <Edit>프로필수정</Edit>}
        </Username>
        <Row>
          {skills ? (
            TextToArray(skills).map((skill, index) => (
              <Skill key={index}>{skill}</Skill>
            ))
          ) : (
            <span>아직 등록된 스킬이 없어요.</span>
          )}
        </Row>
        <Row>
          <span>팔로워 : ...</span>
          <span>팔로잉 : ...</span>
        </Row>
        <Row>bio..</Row>
      </UserInfo>
    </Container>
  );
}

export default UserBox;
