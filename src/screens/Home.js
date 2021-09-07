import styled from "styled-components";
import Footer from "../components/Footer/Footer";
import HelmetTitle from "../components/HelmetTitle";
import SearchBar from "../components/Projects/SearchBar";
import { Content } from "../components/shared";
import ProjectsHeader from "../components/Projects/ProjectsHeader";
import SkillBox from "../components/Projects/SkillBox";
import useAxios from "../hooks/useAxios";

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
  const { loading, data, error } = useAxios("skills");

  if (!data || loading) {
    return <div>loading..</div>;
  }

  if (error) {
    return new Error(`error : ${error}`);
  }

  const { httpStatus, result } = data;

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
          <SkillBox data={httpStatus === "OK" && result} />
          {children}
        </Content>
      </main>
      <Footer />
    </>
  );
}

export default Home;
