import styled from "styled-components";

export const CloseBtn = styled.button``;

export const ModalContents = styled.div``;

export const ModalOverlay = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99999;
  ${ModalContents} {
    top: 30%;
    margin: 0 auto;
    max-width: 380px;
    width: 100%;
    border: 1px solid black;
    border-radius: 5px;
    position: relative;
    padding: 30px;
    background-color: white;
  }
  ${CloseBtn} {
    position: relative;
  }
`;
