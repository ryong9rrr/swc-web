import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { routes } from "../../routes";

const SkillButton = styled(NavLink)`
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

function SkillsBtn({ skillName }) {
  return (
    <li>
      {skillName ? (
        <SkillButton
          to={`/projects/skill/${skillName}`}
          activeClassName="selected"
          exact
        >
          {skillName}
        </SkillButton>
      ) : (
        <SkillButton to={routes.home} exact>
          전체
        </SkillButton>
      )}
    </li>
  );
}

export default SkillsBtn;
