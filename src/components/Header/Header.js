import styled from "styled-components";
import { routes } from "../../routes";
import LinkBtn from "./LinkBtn";
import SignIn from "../Modal/SignIn";
import { useState } from "react";
import SignUp from "../Modal/SignUp";

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
  //modal
  const [signUpModal, setSignUpModal] = useState(false);
  const [signInModal, setSignInModal] = useState(false);
  const openCloseSignUp = () => setSignUpModal((prev) => !prev);
  const openCloseSignIn = () => setSignInModal((prev) => !prev);

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
              <button onClick={openCloseSignUp}>회원가입</button>
              <button onClick={openCloseSignIn}>로그인</button>
              {signUpModal ? (
                <SignUp
                  signUpModal={signUpModal}
                  openCloseSignUp={openCloseSignUp}
                />
              ) : null}
              {signInModal ? (
                <SignIn
                  signInModal={signInModal}
                  openCloseSignIn={openCloseSignIn}
                />
              ) : null}
            </>
          )}
        </Column>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;
