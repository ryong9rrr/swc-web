import styled from "styled-components";
import HelmetTitle from "../components/HelmetTitle";

const Screen = styled.main`
  background-color: green;
  min-height: 100vh;
`;

function Home() {
  return (
    <>
      <HelmetTitle title="Home" />
      <Screen>main화면입니다.</Screen>
    </>
  );
}

export default Home;
