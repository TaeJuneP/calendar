import React from "react";
import styled from "styled-components";
import Label from "components/atoms/ModalLabel"
import TextArea from "components/atoms/ModalTextArea"

type Props = { 
    content: string
    setContent: (content: string) => void;
}

const TextAreaPlan: React.FC<Props> = (props:Props) => {

    const label = "일정 설명"
    return (
        <Container>
            <Label label={label} />
            <TextArea content={props.content} setContent={props.setContent}/>
        </Container>
    );
}

const Container = styled.div`
    margin-bottom: 1rem;
`;
export default TextAreaPlan;
