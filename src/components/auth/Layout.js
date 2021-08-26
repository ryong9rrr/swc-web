import styled from "styled-components";
import HelmetTitle from "../HelmetTitle";
import BottomBox from "./BottomBox";
import TopBox from "./Topbox";

const Container = styled.div`
  width: 50%;
  margin: 0 auto;
  padding: 30px 10px;
  border: 2px solid ${(props) => props.theme.borderColor};
  border-radius: 10px;
  margin-bottom: 15px;
`;

const AuthBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function Layout({ children, title }) {
  return (
    <Container>
      <HelmetTitle title={title} />
      <AuthBox>
        <TopBox title={title} />
        {children}
      </AuthBox>
    </Container>
  );
}

export default Layout;
