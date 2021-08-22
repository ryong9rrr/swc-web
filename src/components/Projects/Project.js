import styled from "styled-components";
import Card from "./Card";
import { useState, useEffect } from 'react';

import { CSSTransition } from "react-transition-group"
import './Project.scss'

const Btns = styled.div``;

const Btn = styled.button`
  all: unset;
  cursor: pointer;
  border: 2px solid ${(props) => props.theme.borderColor};
  border-radius: 5px;
  padding: 5px 10px;
  margin-left: 20px;
  margin-bottom: 20px;
  &:hover {
    border-color: ${(props) => props.theme.accent};
    color: ${(props) => props.theme.accent};
  }
`;

const Project_Container = styled.div`
  margin: 0px 30px 30px;
  border-top: 1px solid ${(props) => props.theme.borderColor};
  padding-top: 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

//data.map(card => <Card />)
function Project() {
  //sample data
  const data0 = [
    {
      id: 1,
      title: "리액트할사람~",
    },
    {
      id: 2,
      title: "React할사람?",
    },
    {
      id: 3,
      title: "리액트공부 같이해요",
    },
    {
      id: 4,
      title: "리액트 프로젝트 같이해요~",
    },
  ];
  const data1 = [
    {
      id: 1,
      title: "장고할사람~",
    },
    {
      id: 2,
      title: "Django할사람?",
    },
    {
      id: 3,
      title: "장고 공부 같이해요",
    },
    {
      id: 4,
      title: "장고 프로젝트 같이해요~",
    },
  ];
  const data2 = [
    {
      id: 1,
      title: "스프링할사람~",
    },
    {
      id: 2,
      title: "Spring할사람?",
    },
    {
      id: 3,
      title: "스프링 공부 같이해요",
    },
    {
      id: 4,
      title: "스프링 프로젝트 같이해요~",
    },
  ];
  const data3 = [
    {
      id: 1,
      title: "Vue할사람~",
    },
    {
      id: 2,
      title: "뷰 할사람~",
    },
    {
      id: 3,
      title: "뷰 공부 같이해요",
    },
    {
      id: 4,
      title: "뷰 프로젝트 같이해요~",
    },
  ];

  let [skills, setSkills] = useState(0);
  let [animationSwitch, setAnimationSwitch] = useState(false);

  return (
    <>
      <Btns defaultActiveKey="link-0">
        <Btn eventKey="link-0" onClick={()=>{ setAnimationSwitch(false); setSkills(0) }}>React</Btn>
        <Btn eventKey="link-1" onClick={()=>{ setAnimationSwitch(false); setSkills(1) }}>Django</Btn>
        <Btn eventKey="link-2" onClick={()=>{ setAnimationSwitch(false); setSkills(2) }}>Spring</Btn>
        <Btn eventKey="link-3" onClick={()=>{ setAnimationSwitch(false); setSkills(3) }}>Vue</Btn>
      </Btns>

      <CSSTransition in={animationSwitch} classNames="animation" timeout={500}>
        <Project_Container>
          <SkillContents skills={skills} setAnimationSwitch={setAnimationSwitch} data0={data0} data1={data1} data2={data2} data3={data3}/>
        </Project_Container>
      </CSSTransition>
    </>
  );
}

function SkillContents(props) {
  useEffect( ()=>{
    props.setAnimationSwitch(true);
  });

  if (props.skills === 0) {
    return (
      <>
        {props.data0?.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </>
    )
  }
  if (props.skills === 1) {
    return (
      <>
        {props.data1?.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </>
    )
  }
  if (props.skills === 2) {
    return (
      <>
        {props.data2?.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </>
    )
  }
  if (props.skills === 3) {
    return (
      <>
        {props.data3?.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </>
    )
  }
}

export default Project;
