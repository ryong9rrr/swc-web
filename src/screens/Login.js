import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router";
import styled from "styled-components";
import BottomBox from "../components/auth/BottomBox";
import FormBox from "../components/auth/FormBox";
import FormError from "../components/auth/FormError";
import Layout from "../components/auth/Layout";
import LoginModal from "../components/auth/LoginModal";
import Footer from "../components/Footer/Footer";
import { RoundButton, Input } from "../components/shared";
import { routes } from "../routes";

const SubmitBtn = styled(RoundButton)`
  margin-top: 10px;
  margin-left: 380px;
  margin-bottom: ${(props) => props.bottom};
`;

function Login() {
  const history = useHistory();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(true);
  const [modal, setModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const closeModal = () => setModal(false);

  const { register, formState, clearErrors, handleSubmit } = useForm({
    mode: "onChange",
    defaultValues: {
      email: location?.state?.email || "",
      password: location?.state?.password || "",
    },
  });

  const completed = (res) => {
    const {
      status,
      data: { httpStatus, result },
      headers,
    } = res;
    if (status !== 200) {
      console.log("httpstatus is not 200, login completed error...");
      return;
    }
    if (httpStatus === "BAD_REQUEST") {
      //로그인실패
      setModalMessage(result);
      setSuccess(false);
      return setLoading(false);
    } else if (httpStatus === "OK") {
      setModal(false);
      localStorage.setItem("user", JSON.stringify(result));
      document.location.href = "/";
    }
  };

  const onSubmitValid = (values) => {
    const API =
      "http://ec2-3-34-212-96.ap-northeast-2.compute.amazonaws.com:8000/api";
    const { email, password } = values;
    setLoading(true);
    setModalMessage("잠시만 기다려주세요...");
    setModal(true);
    axios
      .post(`${API}/login`, {
        email,
        password,
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
      <Layout title="로그인">
        <FormBox>
          <form onSubmit={handleSubmit(onSubmitValid)}>
            <Input
              {...register("email", { required: "이메일을 입력해주세요." })}
              type="email"
              placeholder="이메일"
              hasError={Boolean(formState.errors?.email?.message)}
              onFocus={() => clearErrors()}
              required
            />
            <FormError message={formState.errors?.email?.message} />
            <Input
              {...register("password", {
                required: "비밀번호를 입력해주세요.",
              })}
              type="password"
              placeholder="비밀번호"
              hasError={Boolean(formState.errors?.password?.message)}
              onFocus={() => clearErrors()}
              required
            />
            <FormError message={formState.errors?.password?.message} />
            <SubmitBtn
              disabled={!formState.isValid || loading}
              type="submit"
              bottom="10px"
            >
              로그인 →
            </SubmitBtn>
          </form>
        </FormBox>
        <BottomBox
          cta="계정이 없으신가요?"
          link={routes.signUp}
          linkText="회원가입"
        />
      </Layout>
      <LoginModal
        modal={modal}
        loading={loading}
        message={modalMessage}
        closeModal={closeModal}
        success={success}
      />
      <Footer fix />
    </>
  );
}

export default Login;
