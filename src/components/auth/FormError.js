import styled from "styled-components";

const Message = styled.span`
  font-size: 14px;
  color: tomato;
  margin-bottom: 10px;
`;

function FormError({ message }) {
  return message === "" || !message ? null : <Message>{message}</Message>;
}

export default FormError;
