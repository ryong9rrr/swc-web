import styled from "styled-components";
import Card from "./Card";

const Container = styled.div`
  margin: 0px 30px 30px;
  border-top: 1px solid ${(props) => props.theme.borderColor};
  padding-top: 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

//data.map(card => <Card />)
function Project() {
  //sample data
  const data = [
    {
      id: 1,
      title: "리액트할사람~",
    },
    {
      id: 2,
      title: "스프링할사람~",
    },
    {
      id: 3,
      title: "js공부 같이해요",
    },
    {
      id: 4,
      title: "프로젝트 같이해요~",
    },
  ];

  return (
    <Container>
      {data?.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </Container>
  );
}

export default Project;
