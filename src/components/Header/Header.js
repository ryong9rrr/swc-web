import styled from "styled-components";
import { routes } from "../../routes";
import LinkBtn from "./LinkBtn";
import { Link } from "react-router-dom";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
`;

const Nav = styled.nav`
  width: 100%;
  display: flex;
`;

const Column = styled.div`
  width: 33%;
  &:first-child {
    width: 100%;
  }
  &:nth-child(2) {
    width: 100%;
  }
  &:last-child {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
`;

function Header({ isLoggedIn }) {
  return (
    <HeaderContainer>
      <Nav>
        <Column>
          <LinkBtn name="SWC" link={routes.home} />
        </Column>
        <Column>
          <LinkBtn name="프로젝트" link={routes.project} />
        </Column>
        <Column>
          {isLoggedIn ? (
            <span>OOO님 반가워요!</span>
          ) : (
            <>
              <Link to={routes.signUp}>회원가입</Link>
              <Link to={routes.signIn}>로그인</Link>
            </>
          )}
        </Column>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;
