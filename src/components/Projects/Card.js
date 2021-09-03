import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.article`
  margin: 30px auto;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border-radius: 20px;
  background-color: gray;
  color: white;
  font-size: 3rem;
`;

function Card({
  size,
  projectId,
  title,
  founderId,
  founderNickName,
  requiredSkills,
  recommendedCount,
  updatedAt,
}) {
  return (
    <Container key={projectId} size={size}>
      {title}
      <Link to={`/projects/${projectId}`}>
        <button>자세히보기</button>
      </Link>
    </Container>
  );
}

export default Card;
