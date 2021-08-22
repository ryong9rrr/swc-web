import styled from "styled-components";
import HelmetTitle from "../components/HelmetTitle";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";

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
        <>
          {/*<Skills />*/}
          <Projects />
        </>
      </main>
    </>
  );
}

export default Home;
