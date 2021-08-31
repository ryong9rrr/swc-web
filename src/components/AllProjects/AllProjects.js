import styled from "styled-components";
import SearchBar from "../SearchBar";
import { Content } from "../shared";
import AllProjectsHeader from "./AllProjectsHeader";
import { getAllProjects, getSkills } from "../../sampleData";
import Card from "./Card";
import SkillsBtn from "./SkillsBtn";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { routes } from "../../routes";
import SkillProjects from "./SkillProjects";

const CardContainer = styled.div`
  margin: 0px 30px 30px;
  border-top: 1px solid ${(props) => props.theme.borderColor};
  padding-top: 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const SkillsBtns = styled.ul`
  display: block;
  padding: 0px 30px 30px;
  width: 100%;
  li {
    display: inline-block;
  }
  .active {
    border-color: ${(props) => props.theme.accent};
    color: ${(props) => props.theme.accent};
  }
`;

const Search = styled(Content)`
  border: none;
  display: flex;
  justify-content: center;
`;

function AllProjects() {
  const { httpStatus: skillsStatus, result: skills } = getSkills;

  const { httpStatus: projectsStatus, result: projects } = getAllProjects;

  return (
    <>
      <Search>
        <SearchBar />
      </Search>
      <Content>
        <AllProjectsHeader />
        <Router>
          <SkillsBtns>
            <SkillsBtn />
            {skillsStatus === "OK" &&
              skills.map((skill, index) => (
                <SkillsBtn key={index} skillName={skill.skillName} />
              ))}
          </SkillsBtns>

          <Switch>
            <Route path={routes.home} exact>
              <CardContainer>
                {projectsStatus === "OK" &&
                  projects.map((card) => (
                    <Card key={card.projectId} {...card} />
                  ))}
              </CardContainer>
            </Route>
            <Route path="/projects/skill/:skillName/" exact>
              <SkillProjects />
            </Route>
          </Switch>
        </Router>
      </Content>
    </>
  );
}

export default AllProjects;
