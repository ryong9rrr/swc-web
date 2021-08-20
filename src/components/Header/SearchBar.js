import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  padding: 5px 10px;
  display: flex;
  align-items: center;
  border: 0.5px solid ${(props) => props.theme.borderColor};
  border-radius: 5px;
`;

const Icon = styled.span`
  margin-right: 10px;
  opacity: 0.5;
`;

const Search = styled.input`
  all: unset;
  width: 100%;
  height: 2rem;
`;

function SearchBar() {
  return (
    <Container>
      <Icon>
        <FontAwesomeIcon icon={faSearch} />
      </Icon>
      <Search type="search" placeholder="프로젝트를 찾아보세요!" />
    </Container>
  );
}

export default SearchBar;
