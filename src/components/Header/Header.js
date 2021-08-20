import styled from "styled-components";
import { routes } from "../../routes";
import { Link } from "react-router-dom";
import UserBar from "./UserBar";
import SearchBar from "./SearchBar";
import symbol from "../../img/symbol.png";
import { Button } from "../shared";

const HeaderContainer = styled.header`
  max-width: 100%;
  padding: 1rem 8rem;
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
  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Btn = styled(Button)`
  margin: 5px;
  margin-left: 10px;
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
              <Link to={routes.signUp}>
                <Btn>회원가입</Btn>
              </Link>
              <Link to={routes.signIn}>
                <Btn>로그인</Btn>
              </Link>
            </Signbtns>
          )}
        </Column>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;
