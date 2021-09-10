import { Content, RoundButton } from "../components/shared";
import Select from "react-select";
import { useState } from "react";
import styled from "styled-components";
import HelmetTitle from "../components/HelmetTitle";
import Footer from "../components/Footer/Footer";
import { useForm } from "react-hook-form";
import axios from "axios";
import NewProjectModal from "../components/Projects/NewProjectModal";

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
  const { userId } = userData;
  const [selectedOption, setSelectedOption] = useState(null);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const { register, formState, handleSubmit } = useForm({
    mode: "onChange",
  });

  const completed = (res) => {
    const {
      status,
      data: { httpStatus, result },
      headers,
    } = res;
    if (status !== 200) {
      console.log("httpstatus is not 200, new project completed error...");
      return;
    }
    if (httpStatus === "BAD_REQUEST") {
      //회원가입 실패
      setModalMessage(result);
      return setLoading(false);
    } else if (httpStatus === "OK") {
      setModalMessage("🎉 새로운 프로젝트를 등록했습니다! 🎉");
      return setLoading(false);
    }
  };

  const onSubmitValid = (data) => {
    const { title, content } = data;
    const skills = selectedOption.map((option) => option.value);
    const requiredSkills = skills.join(" ");
    setLoading(true);
    setModalMessage("잠시만 기다려주세요...");
    setModal(true);
    const API =
      "http://ec2-3-34-212-96.ap-northeast-2.compute.amazonaws.com:8000/api";
    axios
      .post(`${API}/projects/${userId}`, {
        title,
        requiredSkills,
        content,
      })
      .then(function (response) {
        completed(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <HelmetTitle title="새 글 작성" />
      <Main>
        <Form onSubmit={handleSubmit(onSubmitValid)}>
          <Title
            {...register("title", {
              required: true,
            })}
            type="text"
            placeholder="제목을 입력하세요"
          />
          <Select
            options={options}
            isMulti
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            placeholder="기술을 선택하세요"
          />
          <Text
            {...register("content", {
              required: true,
            })}
            placeholder="내용을 입력하세요"
          />
          <Btn disabled={!formState.isValid || loading} type="submit">
            작성하기
          </Btn>
        </Form>
      </Main>
      <NewProjectModal loading={loading} modal={modal} message={modalMessage} />
      <Footer fix />
    </>
  );
}

export default NewProject;
