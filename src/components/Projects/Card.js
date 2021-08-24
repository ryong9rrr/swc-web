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

function Card({ id, title, skill }) {
  return <Container key={id}>{title}{skill}</Container>;
}

export default Card;
