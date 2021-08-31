import styled from "styled-components";
import Footer from "../components/Footer/Footer";
import HelmetTitle from "../components/HelmetTitle";
import AllProjects from "../components/AllProjects/AllProjects";

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
        <AllProjects />
      </main>
      <Footer />
    </>
  );
}

export default Home;
