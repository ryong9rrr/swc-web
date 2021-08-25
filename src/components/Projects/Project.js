import styled from "styled-components";
import React from "react";
import Card from "./Card";
import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import "./Project.scss";
import { SkillBtn } from "../shared";
import { dataType1 } from "../../sampleData";

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
  const { projects: data } = dataType1;

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
          All
        </Btn>
        <Btn
          eventKey="link-1"
          onClick={() => {
            setAnimationSwitch(false);
            setSkills(1);
          }}
        >
          React
        </Btn>
        <Btn
          eventKey="link-2"
          onClick={() => {
            setAnimationSwitch(false);
            setSkills(2);
          }}
        >
          Django
        </Btn>
        <Btn
          eventKey="link-3"
          onClick={() => {
            setAnimationSwitch(false);
            setSkills(3);
          }}
        >
          Spring
        </Btn>
        <Btn
          eventKey="link-4"
          onClick={() => {
            setAnimationSwitch(false);
            setSkills(4);
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
        {props.data.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </>
    );
  }
  if (props.skills === 1) {
    return (
      <>
        {props.data
          .filter((data) => data.skill === "react")
          .map((card) => (
            <Card key={card.id} {...card} />
          ))}
      </>
    );
  }
  if (props.skills === 2) {
    return (
      <>
        {props.data
          .filter((data) => data.skill === "django")
          .map((card) => (
            <Card key={card.id} {...card} />
          ))}
      </>
    );
  }
  if (props.skills === 3) {
    return (
      <>
        {props.data
          .filter((data) => data.skill === "spring")
          .map((card) => (
            <Card key={card.id} {...card} />
          ))}
      </>
    );
  }
  if (props.skills === 4) {
    return (
      <>
        {props.data
          .filter((data) => data.skill === "vue")
          .map((card) => (
            <Card key={card.id} {...card} />
          ))}
      </>
    );
  }
}

export default Project;
