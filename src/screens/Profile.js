import { useParams } from "react-router-dom";
import styled from "styled-components";
import Footer from "../components/Footer/Footer";
import HelmetTitle from "../components/HelmetTitle";
import ProfileProjectBox from "../components/Profile/ProfileProjectBox";
import UserBox from "../components/Profile/UserBox";
import { Content } from "../components/shared";
import useAxios from "../hooks/useAxios";

const Main = styled(Content)`
  border: none;
`;

function Profile() {
  const { userId } = useParams();
  const { loading, data, error } = useAxios(`user/${userId}`);

  if (error) {
    return <div>Not Found</div>;
  }

  if (!data || loading) {
    return <div>loading..</div>;
  }

  const { result } = data;

  return (
    <>
      <HelmetTitle title={result?.nickname} />
      <Main>
        <UserBox nickname={result?.nickname} skills={result?.skills} />
        <ProfileProjectBox projects={result?.joinedProjects} />
      </Main>
      <Footer />
    </>
  );
}

export default Profile;
