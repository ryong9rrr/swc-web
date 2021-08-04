import { CloseBtn, ModalContents, ModalOverlay } from "./ModalStyles";

function SignIn({ openCloseSignIn }) {
  return (
    <ModalOverlay onClick={openCloseSignIn}>
      <ModalContents onClick={(e) => e.stopPropagation()}>
        <CloseBtn onClick={openCloseSignIn}>X</CloseBtn>
        <span>로그인</span>
      </ModalContents>
    </ModalOverlay>
  );
}

export default SignIn;
