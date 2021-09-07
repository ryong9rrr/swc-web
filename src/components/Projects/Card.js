import { Link } from "react-router-dom";
import styled from "styled-components";
import { routes } from "../../routes";

const Container = styled.article`
  margin: 30px auto;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border-radius: 20px;
  background-color: gray;
  color: white;
  font-size: 3rem;
`;

function Card({ size, projectId, userId, title, username, skills, likes }) {
  return (
    <Container key={projectId} size={size}>
      <span>projectId : {projectId}</span>
      {title}
      <Link to={`${routes.projects}/${projectId}`}>
        <button>자세히보기</button>
      </Link>
    </Container>
  );
}

export default Card;
