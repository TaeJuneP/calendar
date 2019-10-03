import React from "react";
import styled from "styled-components";
import Label from "components/atoms/ModalLabel"
import Input from "components/atoms/ModalInput"

type Props = {
    title: string
    setTitle: (title: string) => void;
}

const InputPlanName: React.FC<Props> = (props: Props) => {

    const label = "일정 제목"
    return (
        <Container>
            <Label label={label} />
            <Input title={props.title} setTitle={props.setTitle} />
        </Container>
    );
}

const Container = styled.div`
    margin-bottom: 1rem;
`;
export default InputPlanName;
