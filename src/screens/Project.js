import { useParams } from "react-router-dom";
import styled from "styled-components";
import Footer from "../components/Footer/Footer";
import HelmetTitle from "../components/HelmetTitle";
import CommentBox from "../components/ProjectDetail/CommentBox";
import ProjectBox from "../components/ProjectDetail/ProjectBox";
import SideBar from "../components/ProjectDetail/SideBar";
import { Content } from "../components/shared";
import useAxios from "../hooks/useAxios";

const Main = styled(Content)`
  border: none;
  display: flex;
`;

const LeftBox = styled.div`
  width: 85%;
  padding-right: 30px;
`;

const RightBox = styled.div`
  width: 15%;
`;

function Project() {
  //params.projectId 에 맞는 프로젝트 상세데이터를 api로 불러와야함
  const { projectId } = useParams();
  const { loading, data, error } = useAxios(`projects/${projectId}`);

  if (error) {
    return <div>Not Found</div>;
  }

  if (!data || loading) {
    return <div>loading..</div>;
  }

  const { result } = data;

  return (
    <>
      <HelmetTitle title="프로젝트 상세" />
      <Main>
        <LeftBox>
          <ProjectBox
            projectTitle={result?.projectTitle}
            requiredSkills={result?.requiredSkills}
            projectContent={result?.projectContent}
          />
          <CommentBox />
        </LeftBox>
        <RightBox>
          <SideBar
            founderId={result?.founderId}
            founderEmail={result?.founderEmail}
            founderNickname={result?.founderNickname}
            participants={result?.participants}
          />
        </RightBox>
      </Main>
      <Footer />
    </>
  );
}

export default Project;
