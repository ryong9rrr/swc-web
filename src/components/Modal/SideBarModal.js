import styled from "styled-components";

const Container = styled.div`
  border: 2px solid gray;
  border-radius: 0px 10px 10px;
  background-color: white;
  padding: 5px;
  position: absolute;
  right: -10px;
  bottom: -5px;
  font-size: 12px;
`;

function SideBarModal({ founderId, userId, username }) {
  return (
    <Container>
      <span>
        {username}
        {founderId === userId && "(게시자)"}
      </span>
    </Container>
  );
}

export default SideBarModal;
