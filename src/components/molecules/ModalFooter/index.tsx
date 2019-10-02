import React from "react";
import styled from "styled-components";
import Cancel from "components/atoms/CancelButton"
import Confirm from "components/atoms/ConfirmButton"
const ModalFooter: React.FC = () => {

    return (
        <Container>
            <Cancel />
            <Confirm />
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 1rem;
    background-color:#fff;
    border-radius: 0 0 .3rem  .3rem;
`;
export default ModalFooter;
