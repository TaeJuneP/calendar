import React from "react";
import styled from "styled-components";
import Header from "components/molecules/ModalHeader"
import Body from "components/molecules/ModalBody"
import Footer from "components/molecules/ModalFooter"
const Modal: React.FC = () => {

    return (
        <Container>
            <Header />
            <Body />
            <Footer />
        </Container>
    );
}

const Container = styled.div`
    right: 0;
    left: 0;
    position: fixed;
    top: 25%;
    height:auto;
    z-index:3;
    transform: translate(0,0);
    transition: transform .3s ease-out;
    width: auto;
    margin: .5rem;
    min-width:285px;
    border-radius: .3rem;
    border:1px solid rgba(0,0,0,.2);
    @media only screen and (min-width:576px) {
        max-width: 500px;
        margin: 1.75rem auto;
    }
`;
export default Modal;
