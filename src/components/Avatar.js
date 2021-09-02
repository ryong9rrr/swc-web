import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SideBarModal from "./Modal/SideBarModal";

const Container = styled.div`
  width: 100%;
  position: relative;
`;

const AvatarImg = styled.div`
  margin: 0 auto;
  display: block;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border-radius: 50%;
  min-height: 100%;
  background: ${(props) =>
      props.url ? `url("${props.url}")` : `url("/img/noneUser.png")`}
    bottom center;
  background-size: cover;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

//hover시 간략한 유저정보가 뜨도록 할 예정(?)
//클릭하면 유저프로필?
function Avatar({ url, size, founderId, userId, username }) {
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
        <SideBarModal
          founderId={founderId}
          userId={userId}
          username={username}
        />
      )}
    </Container>
  );
}

export default Avatar;
