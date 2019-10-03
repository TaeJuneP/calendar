import React from "react";
import styled, { keyframes } from "styled-components";

type Props = {
  setModalStatus: (status: boolean) => void;
};

const ModalFade: React.FC<Props> = (props: Props) => {
  return (
    <>
      <Container onClick={() => props.setModalStatus(false)} />
    </>
  );
};
const opacitys = keyframes`
    0% {
      opacity: 0;
    }  
    100%{
      opacity: 0.5;
    }
`;
const Container = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  opacity: 0.5;
  z-index: 2;
  background-color: black;
  animation: ${opacitys} 0.15s linear;
`;
export default ModalFade;
