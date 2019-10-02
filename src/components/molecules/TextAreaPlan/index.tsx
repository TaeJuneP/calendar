import React from "react";
import styled from "styled-components";
import Label from "components/atoms/ModalLabel"
import TextArea from "components/atoms/ModalTextArea"
const TextAreaPlan: React.FC = () => {

    const label = "일정 설명"
    return (
        <Container>
            <Label label={label} />
            <TextArea />
        </Container>
    );
}

const Container = styled.div`
    margin-bottom: 1rem;
`;
export default TextAreaPlan;
