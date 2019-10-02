import React from "react";
import styled from "styled-components";
import ModalHeaderText from "components/atoms/ModalHeaderText"
import CloseButton from "components/atoms/CloseButton"
const ModalHeader: React.FC = () => {


    return (
        <Container>
            <ModalHeaderText />
            <CloseButton />
        </Container>
    );
}





const Container = styled.div`
    background: #F7F7FB;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid #e9ecef;
    border-top-left-radius: .3rem;
    border-top-right-radius: .3rem;
`;

export default ModalHeader;
