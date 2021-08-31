import styled from "styled-components";

const Container = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #606060;
  text-align: center;
  margin-bottom: 50px;
`;

function TopBox({ title }) {
  return <Container>{title}</Container>;
}

export default TopBox;
