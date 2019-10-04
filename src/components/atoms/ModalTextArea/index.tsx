import React from "react";
import styled from "styled-components"

type Props = {
    content: string
    setContent: (content: string) => void;
}


const ModalTextArea: React.FC<Props> = (props: Props) => {

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        props.setContent(event.target.value);
    };

    return (
        <>
            <TextArea
                onChange={handleChange}
                value={props.content} />
        </>
    )
}

const TextArea = styled.textarea`
    display: block;
    width: 100%;
    height:auto;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
`
export default ModalTextArea;