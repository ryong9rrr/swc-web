import { useParams } from "react-router-dom";
import { Content } from "../components/shared";

function Profile() {
  const { userId } = useParams();
  return <Content>{userId} user</Content>;
}

export default Profile;
