import styled from "styled-components";

export const Content = styled.section`
  max-width: 100%;
  margin: 2rem 8rem;
  border: 2px solid ${(props) => props.theme.borderColor};
  border-radius: 10px;
`;

export const Separator = styled.div`
  display: inline-block;
  width: 1px;
  height: ${(props) => props.height || "20px"};
  background-color: ${(props) => props.theme.borderColor};
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

//"글쓰기"
export const AccentButton = styled.button`
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

export const SkillBtn = styled.button`
  all: unset;
  cursor: pointer;
  border: 2px solid ${(props) => props.theme.borderColor};
  border-radius: 5px;
  padding: 5px 10px;
  &: hover {
    border-color: ${(props) => props.theme.accent};
    color: ${(props) => props.theme.accent};
  }
  &: focus {
    border-color: ${(props) => props.theme.accent};
    color: ${(props) => props.theme.accent};
  }
`;
