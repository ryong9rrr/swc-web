import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Avatar } from "../shared";

const Container = styled.div`
  width: 100%;
  position: relative;
`;

//props : size, url
const AvatarImg = styled(Avatar)`
  margin: 0 auto;
  display: block;
  &:hover {
    opacity: 0.8;
  }
`;

const HoverModal = styled.div`
  border: 2px solid gray;
  border-radius: 0px 10px 10px;
  background-color: white;
  padding: 5px;
  position: absolute;
  right: -10px;
  bottom: -5px;
  font-size: 12px;
`;

//hover시 간략한 유저정보가 뜨도록 할 예정(?)
//클릭하면 유저프로필?
function SideBarModal({ url, size, founderId, userId, username }) {
  const [modal, setModal] = useState(false);

  return (
    <Container>
      <Link to={`/user/${userId}`}>
        <AvatarImg
          onMouseOver={() => setModal(true)}
          onMouseOut={() => setModal(false)}
          size={size ? size : "60px"}
          url={url}
        />
      </Link>
      {modal && (
        <HoverModal>
          <span>
            {username}
            {founderId === userId && "(게시자)"}
          </span>
        </HoverModal>
      )}
    </Container>
  );
}

export default SideBarModal;
