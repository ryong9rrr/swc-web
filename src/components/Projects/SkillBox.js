import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.ul`
  display: block;
  padding: 30px;
  width: 100%;
  li {
    display: inline-block;
  }
  .active {
    border-color: ${(props) => props.theme.accent};
    color: ${(props) => props.theme.accent};
  }
`;

const Btn = styled(NavLink)`
  color: inherit;
  box-sizing: border-box;
  display: inline;
  margin-right: 15px;
  padding: 5px 10px;
  border: 2px solid ${(props) => props.theme.borderColor};
  border-radius: 5px;
  &:hover {
    border-color: ${(props) => props.theme.accent};
    color: ${(props) => props.theme.accent};
  }
`;

function SkillBox({ data }) {
  return (
    <Container>
      <li>
        <Btn to="/" exact>
          전체
        </Btn>
      </li>
      {data?.map((skill, index) => (
        <li key={index}>
          <Btn to={`/projects/skill/${skill.skillName}`}>{skill.skillName}</Btn>
        </li>
      ))}
    </Container>
  );
}

export default SkillBox;
