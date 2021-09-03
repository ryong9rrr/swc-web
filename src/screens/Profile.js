import { useParams } from "react-router-dom";
import styled from "styled-components";
import Footer from "../components/Footer/Footer";
import ProjectBox from "../components/Profile/ProjectBox";
import UserBox from "../components/Profile/UserBox";
import { Box, Content, Skill } from "../components/shared";

const Main = styled(Content)`
  border: none;
`;

function Profile() {
  //userId를 이용해서 유저정보를 불러오는 API 호출
  const { userId } = useParams();
  const userData = {
    httpStatus: "OK",
    result: {
      userId: 1,
      email: "123@123",
      nickname: "용상윤",
      phoneNumber: "010-@@@@-####",
      skills: "react javascript",
      createdAt: "2021-09-01T16:15:51.758",
      updatedAt: "2021-09-01T16:15:51.758",
      joinedProjects: [
        {
          joinUserId: 1,
          joinProjectId: 1,
          updatedAt: "2021-09-01T16:17:30.31",
        },
        {
          joinUserId: 1,
          joinProjectId: 3,
          updatedAt: "2021-09-01T16:19:21.334",
        },
        {
          joinUserId: 1,
          joinProjectId: 2,
          updatedAt: "2021-09-01T16:19:28.875",
        },
      ],
    },
  };

  const { httpStatus, result: data } = userData;

  if (httpStatus !== "OK") {
    return;
  }

  return (
    <>
      <Main>
        <UserBox nickname={data?.nickname} skills={data?.skills} />
        <ProjectBox projects={data?.joinedProjects} />
      </Main>
      <Footer />
    </>
  );
}

export default Profile;
