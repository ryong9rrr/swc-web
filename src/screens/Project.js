import styled from "styled-components";
import HelmetTitle from "../components/HelmetTitle";

const Screen = styled.main`
  background-color: blue;
  min-height: 100vh;
`;

function Project() {
  return (
    <>
      <HelmetTitle title="project" />
      <Screen>프로젝트 화면입니다.</Screen>
    </>
  );
}

export default Project;
