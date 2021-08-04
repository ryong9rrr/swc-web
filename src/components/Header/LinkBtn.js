import styled from "styled-components";
import { Link } from "react-router-dom";

const Btn = styled.span``;

function LinkBtn({ name, link }) {
  return (
    <Link to={link}>
      <Btn>{name}</Btn>
    </Link>
  );
}

export default LinkBtn;
