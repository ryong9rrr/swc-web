import styled from "styled-components";
import HelmetTitle from "../components/HelmetTitle";
import Projects from "../components/Projects/Projects";

const Banner = styled.div`
  width: 100%;
  height: 300px;
  background-color: pink;
  //img {}
`;

function Home() {
  return (
    <>
      <HelmetTitle title="Home" />
      <main id="main">
        <Banner>베너이미지..</Banner>
        <Projects />
      </main>
    </>
  );
}

export default Home;
