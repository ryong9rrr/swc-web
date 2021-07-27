import styled from "styled-components";

const Nav = styled.nav``;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Column = styled.div`
  width: 33%;
  text-align: center;
`;

function Navigation() {
  return (
    <Nav>
      <Wrapper>
        <Column>SWC</Column>
        <Column>project</Column>
        <Column>가입 / 로그인</Column>
      </Wrapper>
    </Nav>
  );
}

export default Navigation;
