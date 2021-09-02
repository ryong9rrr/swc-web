import React from "react";
import styled from "styled-components";
import Avatar from "../Avatar";

const Container = styled.article`
  padding: 30px 0px;
  border-radius: 10px;
  background-color: #c4c4c4;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  h1 {
    font-weight: 600;
  }
`;

const Finder = styled.div`
  width: 100%;
  margin-bottom: 30px;
  div {
    margin-top: 20px;
  }
`;

const Partner = styled.div`
  width: 100%;
  div {
    margin-top: 20px;
  }
`;

function SideBar({ founderId, founderEmail, founderNickname, participants }) {
  return (
    <Container>
      <Finder>
        <h1>게시자</h1>
        <Avatar
          userId={founderId}
          username={founderNickname}
          userEmail={founderEmail}
        />
      </Finder>
      <Partner>
        <h1>참여자</h1>
        {participants.map((user, index) => (
          <React.StrictMode key={index}>
            <Avatar
              founderId={founderId}
              userId={user.userId}
              username={user.nickname}
            />
          </React.StrictMode>
        ))}
      </Partner>
    </Container>
  );
}

export default SideBar;
