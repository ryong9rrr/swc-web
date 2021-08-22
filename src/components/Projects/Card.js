import styled from "styled-components";

const Container = styled.article`
  margin: 30px auto;
  width: 300px;
  height: 300px;
  border-radius: 20px;
  background-color: gray;
  color: white;
  font-size: 3rem;
`;

function Card({ id, title }) {
  return <Container key={id}>{title}</Container>;
}

export default Card;