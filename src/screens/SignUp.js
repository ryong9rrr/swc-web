import styled from "styled-components";
import BottomBox from "../components/auth/BottomBox";
import FormBox from "../components/auth/FormBox";
import Layout from "../components/auth/Layout";
import Footer from "../components/Footer/Footer";
import { RoundButton, Input } from "../components/shared";
import { routes } from "../routes";

const SubmitBtn = styled(RoundButton)`
  margin-top: 10px;
  margin-left: 380px;
  margin-bottom: ${(props) => props.bottom};
`;

function SignUp() {
  return (
    <>
      <Layout title="회원가입">
        <FormBox>
          <form>
            <Input type="text" placeholder="아이디" />
            <Input type="text" placeholder="닉네임" />
            <Input type="password" placeholder="비밀번호" />
            <Input type="password" placeholder="비밀번호 확인" />
            <SubmitBtn type="submit" bottom="10px">
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
      <Footer fix />
    </>
  );
}

export default SignUp;
