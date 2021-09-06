import styled from "styled-components";
import Footer from "../components/Footer/Footer";
import HelmetTitle from "../components/HelmetTitle";
import SearchBar from "../components/Projects/SearchBar";
import { Content } from "../components/shared";
import ProjectsHeader from "../components/Projects/ProjectsHeader";
import SkillBox from "../components/Projects/SkillBox";
import axios from "axios";
import { useEffect, useState } from "react";

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
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getSkills = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        setError(null);
        setData(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        const response = await axios.get(
          "http://ec2-3-34-212-96.ap-northeast-2.compute.amazonaws.com:8000/api/skills"
        );
        setData(response.data); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    getSkills();
  }, []);

  if (!data || loading) {
    return <div>loading..</div>;
  }

  if (error) {
    return new Error(`error : ${error}`);
  }

  const { httpStatus, result } = data;

  console.log(data);

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
