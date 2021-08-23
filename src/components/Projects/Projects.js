import styled from "styled-components";
import SearchBar from "../SearchBar";
import { Content } from "../shared";
import Project from "./Project";
import ProjectHeader from "./ProjectHeader";

const Search = styled(Content)`
  border: none;
  display: flex;
  justify-content: center;
`;

function Projects() {
  return (
    <>
      <Search>
        <SearchBar />
      </Search>
      <Content>
        <ProjectHeader />
        <Project />
      </Content>
    </>
  );
}

export default Projects;
