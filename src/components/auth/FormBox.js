import styled from "styled-components";

const Container = styled.div`
  width: 50%;
  margin: 0 auto;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;

function FormBox({ children }) {
  return <Container>{children}</Container>;
}

export default FormBox;
