import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.article`
  margin: 30px auto;
  max-width: 300px;
  height: 300px;
  border-radius: 20px;
  background-color: gray;
  color: white;
  font-size: 3rem;
`;

function Card({
  projectId,
  title,
  founderId,
  founderNickName,
  requiredSkills,
  recommendedCount,
  updatedAt,
}) {
  return (
    <Container key={projectId}>
      {title}
      <Link to={`/projects/${projectId}`}>
        <button>자세히보기</button>
      </Link>
    </Container>
  );
}

export default Card;
