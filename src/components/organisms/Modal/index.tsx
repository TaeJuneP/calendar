import React from "react";
import styled from "styled-components";


const Modal: React.FC = () => {

    return (
        <Container>
        </Container>
    );
}

const Container = styled.div`
  transform: translate(0,0);
  transition: transform .3s ease-out;
  width: auto;
  margin: .5rem;
  pointer-events: none;
  @media only screen and (max-width: 576px) {
    max-width: 500px;
    margin: 1.75rem auto;
 }
`;
export default Modal;
