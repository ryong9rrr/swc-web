import { Content, RoundButton } from "../components/shared";
import Select from "react-select";
import { useState } from "react";
import styled from "styled-components";
import HelmetTitle from "../components/HelmetTitle";
import Footer from "../components/Footer/Footer";

const Main = styled(Content)`
  padding: 30px;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.input`
  all: unset;
  margin-bottom: 20px;
  padding-bottom: 5px;
  display: block;
  width: 100%;
  font-size: 2.5rem;
  font-weight: 600;
`;

const Text = styled.textarea`
  all: unset;
  box-sizing: border-box;
  display: block;
  width: 100%;
  margin-top: 30px;
  padding: 10px;
  font-size: 16px;
  &::placeholder {
    font-style: italic;
  }
`;

const Btn = styled(RoundButton)`
  margin-top: 20px;
  margin-left: auto;
`;

const options = [
  { value: "react", label: "React" },
  { value: "spring", label: "Spring" },
  { value: "javascript", label: "JavaScript" },
  { value: "typescript", label: "TypeScript" },
  { value: "Vuejs", label: "VueJS" },
  { value: "php", label: "PHP" },
];

function NewProject({ userData }) {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <>
      <HelmetTitle title="새 글 작성" />
      <Main>
        <Form>
          <Title type="text" placeholder="제목을 입력하세요" />
          <Select
            options={options}
            isMulti
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            placeholder="기술을 선택하세요"
          />
          <Text placeholder="내용을 입력하세요" />
          <Btn type="submit">작성하기</Btn>
        </Form>
      </Main>
      <Footer fix />
    </>
  );
}

export default NewProject;
