import styled from "styled-components";
import Footer from "../components/Footer/Footer";
import HelmetTitle from "../components/HelmetTitle";
import SearchBar from "../components/Projects/SearchBar";
import { Content } from "../components/shared";
import ProjectsHeader from "../components/Projects/ProjectsHeader";
import { getSkills } from "../sampleData";
import SkillBox from "../components/Projects/SkillBox";

const Banner = styled.div`
  width: 100%;
  height: 300px;
  background-color: pink;
  //img {}
`;

const Search = styled(Content)`
  border: none;
  display: flex;
  justify-content: center;
`;

function Home({ children, isLoggedIn }) {
  // "api로 모든 스킬목록들을 받아왔다"고 가정
  const { httpStatus: skillsStatus, result: skills } = getSkills;
  return (
    <>
      <HelmetTitle title="Home" />
      <main id="main">
        <Banner>베너이미지..</Banner>
        <Content>
          <ProjectsHeader isLoggedIn={isLoggedIn} />
          <Search>
            <SearchBar />
          </Search>
          <SkillBox data={skillsStatus === "OK" && skills} />
          {children}
        </Content>
      </main>
      <Footer />
    </>
  );
}

export default Home;
