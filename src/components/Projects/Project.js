import styled from "styled-components";
import React from "react";
import Card from "./Card";
import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import "./Project.scss";
import { SkillBtn } from "../shared";

const Btns = styled.div`
  padding: 0px 30px 30px;
`;

const Btn = styled(SkillBtn)`
  margin-right: 15px;
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
  const data = [
    {
      id: 1,
      title: "리액트할사람~",
      skill: "react",
    },
    {
      id: 2,
      title: "React할사람?",
      skill: "react",
    },
    {
      id: 3,
      title: "리액트공부 같이해요",
      skill: "react",
    },
    {
      id: 4,
      title: "리액트 프로젝트 같이해요~",
      skill: "react",
    },
    {
      id: 5,
      title: "장고할사람~",
      skill: "django",
    },
    {
      id: 6,
      title: "Django할사람?",
      skill: "django",
    },
    {
      id: 7,
      title: "장고 공부 같이해요",
      skill: "django",
    },
    {
      id: 8,
      title: "장고 프로젝트 같이해요~",
      skill: "django",
    },
    {
      id: 9,
      title: "스프링할사람~",
      skill: "spring",
    },
    {
      id: 10,
      title: "Spring할사람?",
      skill: "spring",
    },
    {
      id: 11,
      title: "스프링 공부 같이해요",
      skill: "spring",
    },
    {
      id: 12,
      title: "스프링 프로젝트 같이해요~",
      skill: "spring",
    },
    {
      id: 13,
      title: "Vue할사람~",
      skill: "vue",
    },
    {
      id: 14,
      title: "뷰 할사람~",
      skill: "vue",
    },
    {
      id: 15,
      title: "뷰 공부 같이해요",
      skill: "vue",
    },
    {
      id: 16,
      title: "뷰 프로젝트 같이해요~",
      skill: "vue",
    },
  ];

  let [skills, setSkills] = useState(0);
  let [animationSwitch, setAnimationSwitch] = useState(false);

  return (
    <>
      <Btns defaultActiveKey="link-0">
        <Btn
          eventKey="link-0"
          onClick={() => {
            setAnimationSwitch(false);
            setSkills(0);
          }}
        >
          React
        </Btn>
        <Btn
          eventKey="link-1"
          onClick={() => {
            setAnimationSwitch(false);
            setSkills(1);
          }}
        >
          Django
        </Btn>
        <Btn
          eventKey="link-2"
          onClick={() => {
            setAnimationSwitch(false);
            setSkills(2);
          }}
        >
          Spring
        </Btn>
        <Btn
          eventKey="link-3"
          onClick={() => {
            setAnimationSwitch(false);
            setSkills(3);
          }}
        >
          Vue
        </Btn>
      </Btns>

      <CSSTransition in={animationSwitch} classNames="animation" timeout={500}>
        <Project_Container>
          <SkillContents
            skills={skills}
            setAnimationSwitch={setAnimationSwitch}
            data={data}
          />
        </Project_Container>
      </CSSTransition>
    </>
  );
}

function SkillContents(props) {
  useEffect(() => {
    props.setAnimationSwitch(true);
  });

  if (props.skills === 0) {
    return (
      <>
        {props.data.filter(data => data.skill === 'react').map((card) => (
            <Card key={card.id} {...card} />
        ))}
      </>
    );
  }
  if (props.skills === 1) {
    return (
      <>
        {props.data.filter(data => data.skill === 'django').map((card) => (
            <Card key={card.id} {...card} />
        ))}
      </>
    );
  }
  if (props.skills === 2) {
    return (
      <>
        {props.data.filter(data => data.skill === 'spring').map((card) => (
            <Card key={card.id} {...card} />
        ))}
      </>
    );
  }
  if (props.skills === 3) {
    return (
      <>
        {props.data.filter(data => data.skill === 'vue').map((card) => (
            <Card key={card.id} {...card} />
        ))}
      </>
    );
  }
}

export default Project;
