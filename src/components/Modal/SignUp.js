import { CloseBtn, ModalContents, ModalOverlay } from "./ModalStyles";

function SignUp({ openCloseSignUp }) {
  return (
    <ModalOverlay onClick={openCloseSignUp}>
      <ModalContents onClick={(e) => e.stopPropagation()}>
        <CloseBtn onClick={openCloseSignUp}>X</CloseBtn>
        <span>회원가입</span>
      </ModalContents>
    </ModalOverlay>
  );
}

export default SignUp;
