import { useParams } from "react-router-dom";
import styled from "styled-components";
import Footer from "../components/Footer/Footer";
import CommentBox from "../components/ProjectDetail/CommentBox";
import ProjectBox from "../components/ProjectDetail/ProjectBox";
import SideBar from "../components/ProjectDetail/SideBar";
import { Content } from "../components/shared";

const Main = styled(Content)`
  border: none;
  display: flex;
`;

const LeftBox = styled.div`
  width: 90%;
  padding-right: 30px;
`;

const RightBox = styled.div`
  width: 10%;
`;

function Project() {
  //params.projectId 에 맞는 프로젝트 상세데이터를 api로 불러와야함
  const { projectId } = useParams();
  const API_sample = {
    httpStatus: "OK",
    result: {
      projectId: 2,
      projectTitle: "같이 프로젝트 해요~!",
      projectContent: "컨텐츠3",
      founderId: 1,
      founderEmail: "email12346",
      founderNickname: "용상윤",
      requiredSkills: "react javascript spring graphql",
      updatedAt: "2021-08-31T02:59:07.055",
      participants: [
        {
          userId: 1,
          email: "email12346",
          nickname: "용상윤",
          phoneNumber: "12312313212312",
          skills: "react javascript",
        },
        {
          userId: 2,
          email: "dsfsdf",
          nickname: "김성중",
          phoneNumber: "12335453",
          skills: "spring django",
        },
      ],
    },
  };

  const { httpStatus, result: data } = API_sample;

  if (httpStatus !== "OK") {
    return;
  }

  return (
    <>
      <Main>
        <LeftBox>
          <ProjectBox
            projectTitle={data?.projectTitle}
            requiredSkills={data?.requiredSkills}
            projectContent={data?.projectContent}
          />
          <CommentBox />
        </LeftBox>
        <RightBox>
          <SideBar
            founderId={data?.founderId}
            founderEmail={data?.founderEmail}
            founderNickname={data?.founderNickname}
            participants={data?.participants}
          />
        </RightBox>
      </Main>
      <Footer />
    </>
  );
}

export default Project;
