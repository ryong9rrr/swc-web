import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import styled from "styled-components";
import BottomBox from "../components/auth/BottomBox";
import FormBox from "../components/auth/FormBox";
import FormError from "../components/auth/FormError";
import Layout from "../components/auth/Layout";
import SignModal from "../components/auth/SignModal";
import Footer from "../components/Footer/Footer";
import { RoundButton, Input } from "../components/shared";
import { routes } from "../routes";

const SubmitBtn = styled(RoundButton)`
  margin-top: 10px;
  margin-left: 380px;
  margin-bottom: ${(props) => props.bottom};
`;

function SignUp() {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const closeModal = () => setModal(false);
  const {
    register,
    handleSubmit,
    formState,
    setError,
    clearErrors,
    getValues,
  } = useForm({
    mode: "onChange",
  });
  //회원가입 성공시
  const goLogin = () => {
    const { email, password } = getValues();
    return history.push(routes.login, {
      email,
      password,
    });
  };

  const completed = (res) => {
    const {
      status,
      data: { httpStatus, result },
      headers,
    } = res;
    if (status !== 200) {
      console.log("httpstatus is not 200, sign completed error...");
      return;
    }
    //console.log(httpStatus, result);
    if (httpStatus === "BAD_REQUEST") {
      //회원가입 실패
      setModalMessage(result);
      return setLoading(false);
    } else if (httpStatus === "OK") {
      setModalMessage("🎉 회원가입에 성공했습니다! 🎉");
      setSuccess(true);
      return setLoading(false);
    }
  };

  const onSubmitValid = (values) => {
    const API =
      "http://ec2-3-34-212-96.ap-northeast-2.compute.amazonaws.com:8000/api";
    const { email, nickname, phoneNumber, password, passwordCheck } = values;
    //error처리, password check만 하고 일단 나머지는 생략.
    if (password !== passwordCheck) {
      return setError("result", {
        message: "비밀번호가 동일하지 않습니다.",
      });
    }
    setLoading(true);
    setModalMessage("잠시만 기다려주세요...");
    setModal(true);
    axios
      .post(`${API}/user`, {
        email,
        nickname,
        phoneNumber,
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
      <Layout title="회원가입">
        <FormBox>
          <form onSubmit={handleSubmit(onSubmitValid)}>
            <Input
              {...register("email", {
                required: "올바른 이메일을 입력해주세요.",
              })}
              type="email"
              placeholder="이메일"
              hasError={Boolean(formState.errors?.email?.message)}
              onFocus={() => clearErrors()}
              required
            />
            <FormError message={formState.errors?.email?.message} />
            <Input
              {...register("nickname", { required: "닉네임을 입력해주세요." })}
              type="text"
              placeholder="닉네임"
              hasError={Boolean(formState.errors?.nickname?.message)}
              onFocus={() => clearErrors()}
              required
            />
            <FormError message={formState.errors?.nickname?.message} />
            <Input
              {...register("phoneNumber", {
                required: "올바른 전화번호를 입력해주세요.",
              })}
              type="tel"
              pattern="[0-9]{11}"
              placeholder="전화번호 (형식: 01012345678)"
              hasError={Boolean(formState.errors?.phoneNumber?.message)}
              onFocus={() => clearErrors()}
              required
            />
            <FormError message={formState.errors?.phoneNumber?.message} />
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
            <Input
              {...register("passwordCheck", {
                required: "비밀번호를 다시 입력해주세요.",
              })}
              type="password"
              placeholder="비밀번호 확인"
              hasError={Boolean(formState.errors?.passwordCheck?.message)}
              onFocus={() => clearErrors()}
              required
            />
            <FormError
              message={
                formState.errors?.passwordCheck?.message ||
                formState.errors?.result?.message
              }
            />
            <SubmitBtn
              disabled={!formState.isValid || loading}
              type="submit"
              bottom="10px"
            >
              회원가입 →
            </SubmitBtn>
          </form>
        </FormBox>
        <BottomBox
          cta="이미 회원이신가요?"
          link={routes.login}
          linkText="로그인"
        />
      </Layout>
      <SignModal
        loading={loading}
        success={success}
        modal={modal}
        message={modalMessage}
        closeModal={success === false && closeModal}
        goLogin={success === true && goLogin}
      />
      <Footer fix />
    </>
  );
}

export default SignUp;
