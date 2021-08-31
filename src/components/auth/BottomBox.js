import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  margin: 40px 0px;
  color: #606060;
`;

const LinkBtn = styled.span`
  margin-left: 10px;
  color: ${(props) => props.theme.accent};
  font-weight: 600;
`;

function BottomBox({ cta, link, linkText }) {
  return (
    <Container>
      <span>{cta}</span>
      <Link to={link}>
        <LinkBtn>{linkText}</LinkBtn>
      </Link>
    </Container>
  );
}

export default BottomBox;
