import styled from "styled-components";
import BottomBox from "../components/auth/BottomBox";
import FormBox from "../components/auth/FormBox";
import Layout from "../components/auth/Layout";
import Footer from "../components/Footer/Footer";
import { AccentButton, Input } from "../components/shared";
import { routes } from "../routes";

const SubmitBtn = styled(AccentButton)`
  border: none;
  border-radius: 30px;
  margin-top: 10px;
  margin-left: 380px;
  margin-bottom: ${(props) => props.bottom};
  background-color: #c4c4c4;
  color: white;
  text-align: center;
  padding: 8px 0px;
  font-weight: 600;
  width: 120px;
  height: 60px;
`;

function Login() {
  return (
    <>
      <Layout title="로그인">
        <FormBox>
          <form>
            <Input type="text" placeholder="아이디" />
            <Input type="password" placeholder="비밀번호" />
            <SubmitBtn type="submit" bottom="10px">
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
      <Footer fix />
    </>
  );
}

export default Login;
