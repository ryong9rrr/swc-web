import styled from "styled-components";

const ModalOverlay = styled.div`
  z-index: 999;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  outline: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalWrapper = styled.div`
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Message = styled.span`
  padding: 5px;
  width: 100%;
  height: 3rem;
  font-size: 1.1em;
  text-align: center;
  font-weight: 600;
`;

const Btn = styled.button`
  all: unset;
  border-top: 0.5px solid ${(props) => props.theme.borderColor};
  cursor: pointer;
  width: 100%;
  height: 3rem;
  font-size: 1.1em;
  text-align: center;
  &:hover {
    font-weight: 600;
  }
`;

const ModalContents = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 1em;
  width: 400px;
  background-color: ${(props) => props.theme.bgColor};
`;

function SignModal({ loading, success, modal, message, closeModal, goLogin }) {
  return (
    <>
      {modal ? (
        <ModalOverlay>
          <ModalWrapper tabIndex="-1">
            <ModalContents>
              <Message>{message}</Message>
              {!loading &&
                (success ? (
                  <Btn tabIndex="0" onClick={goLogin}>
                    로그인하러가기
                  </Btn>
                ) : (
                  <Btn tabIndex="0" onClick={closeModal}>
                    확인
                  </Btn>
                ))}
            </ModalContents>
          </ModalWrapper>
        </ModalOverlay>
      ) : null}
    </>
  );
}

export default SignModal;
