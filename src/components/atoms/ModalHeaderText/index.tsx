import React from "react";
import styled from "styled-components"

const ModalHeaderText: React.FC = () => {

    return (
        <>
            <Container>일정 만들기</Container>
        </>
    )
}

const Container = styled.div`
    font-size: 1.25rem;
    font-family: inherit;
    font-weight: 500;
    color: #263747;
`
export default ModalHeaderText;