import styled from "styled-components";

export const Content = styled.section`
  max-width: 100%;
  margin: 2rem 8rem;
  border: 2px solid ${(props) => props.theme.borderColor};
  border-radius: 10px;
`;

export const Box = styled.article`
  width: 100%;
  border-radius: 10px;
  background-color: #f1f1f1;
  padding: 30px;
  border: 2px solid #c4c4c4;
`;

export const Separator = styled.div`
  display: inline-block;
  width: 1px;
  height: ${(props) => props.height || "20px"};
  background-color: ${(props) => props.colors || props.theme.borderColor};
  margin: 0px ${(props) => props.interval || "10px"};
`;

export const Button = styled.span`
  border: 3px solid ${(props) => props.theme.bgColor};
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  &:hover {
    border-color: #b2bec3;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
`;

export const SquareButton = styled.button`
  padding: 5px 10px;
  font-size: 1.1rem;
  border: 0.5px solid ${(props) => props.theme.borderColor};
  cursor: pointer;
  border-radius: 5px;
  font-weight: 600;
  text-align: center;
  &:hover {
    background-color: gray;
  }
`;

export const RoundButton = styled.button`
  border: none;
  border-radius: 30px;
  padding: 5px 10px;
  font-size: 1.1rem;
  background-color: #c4c4c4;
  color: white;
  text-align: center;
  padding: 8px 0px;
  font-weight: 600;
  width: 120px;
  height: 60px;
  cursor: pointer;
  &:hover {
    background-color: gray;
  }
`;

export const Input = styled.input`
  height: 60px;
  width: 500px;
  border-radius: 10px;
  padding: 0 20px;
  background-color: #fafafa;
  border: 0.5px solid ${(props) => props.theme.borderColor};
  margin-bottom: 20px;
  box-sizing: border-box;
  &::placeholder {
    font-size: 18px;
  }
  &:focus {
    outline: none;
    border-color: rgb(38, 38, 38);
  }
`;
