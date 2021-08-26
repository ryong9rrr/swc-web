import styled from "styled-components";
import { Separator } from "../shared";

const Container = styled.footer`
  position: ${(props) => props.fix && "fixed"};
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.borderColor};
  padding: 30px;
`;

const Column = styled.div`
  display: flex;
  align-items: center;
`;

function Footer({ fix }) {
  return (
    <Container fix={fix}>
      <Column>
        <span>About us</span>
        <Separator colors={(props) => props.theme.fontColor} height="16px" />
        <span>오류제보</span>
      </Column>
      <Column>Shall we code &copy;</Column>
    </Container>
  );
}

export default Footer;
