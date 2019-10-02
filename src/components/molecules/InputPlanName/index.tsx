import React from "react";
import styled from "styled-components";
import Label from "components/atoms/ModalLabel"
import Input from "components/atoms/ModalInput"
const InputPlanName: React.FC = () => {

    const label = "일정 제목"
    return (
        <Container>
            <Label label={label} />
            <Input />
        </Container>
    );
}

const Container = styled.div`
    margin-bottom: 1rem;
`;
export default InputPlanName;
