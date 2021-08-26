import styled from "styled-components";

const Container = styled.div`
  margin: 40px 0px;
  font-size: 1.5rem;
`;

function TopBox({ title }) {
  return <Container>{title}</Container>;
}

export default TopBox;
