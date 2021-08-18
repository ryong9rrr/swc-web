import styled from "styled-components";
import { routes } from "../../routes";
import { Link } from "react-router-dom";
import UserBar from "./UserBar";
import SearchBar from "./SearchBar";
import symbol from "../../img/symbol.png";

const HeaderContainer = styled.header`
  width: 100%;
  padding: 1rem 10rem;
`;

const Column = styled.div`
  width: 100%;
  &:first-child {
    width: 20%;
  }
  &:nth-child(2) {
    width: 50%;
  }
  &:last-child {
    width: 30%;
  }
`;

const Nav = styled.nav`
  display: flex;
  width: 100%;
  align-items: center;
`;

const Logo = styled.img`
  max-width: 7rem;
`;

const Signbtns = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Btn = styled.span`
  margin: 5px;
  margin-left: 10px;
  padding: 10px;
  border-radius: 3px;
  a {
    color: inherit;
    text-decoration: none;
  }
  &:hover {
    border: 0.5px solid ${(props) => props.theme.borderColor};
    font-weight: 600;
  }
`;

function Header({ isLoggedIn }) {
  return (
    <HeaderContainer>
      <Nav>
        <Column>
          <Link to={routes.home}>
            <Logo src={symbol} alt="home" />
          </Link>
        </Column>
        <Column>
          <SearchBar />
        </Column>
        <Column>
          {isLoggedIn ? (
            <UserBar />
          ) : (
            <Signbtns>
              <Btn>
                <Link to={routes.signUp}>회원가입</Link>
              </Btn>
              <Btn>
                <Link to={routes.signIn}>로그인</Link>
              </Btn>
            </Signbtns>
          )}
        </Column>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;

/*

<HeaderContainer>
      <Nav>
        <Column>
          <Link to={routes.home}>swc</Link>
        </Column>
        <Column>
          <Link to={routes.project}>프로젝트</Link>
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

*/
