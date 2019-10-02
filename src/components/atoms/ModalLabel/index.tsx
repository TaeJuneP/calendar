import React from "react";
import styled from "styled-components"

type Props = {
    label: string
}
const ModalLabel: React.FC<Props> = (props: Props) => {

    return (
        <Container>{props.label}</Container>
    )
}

const Container = styled.div`
    font-size: 14px;
    line-height: 1.5;
    display: inline-block;
    margin-bottom: 2px;
    padding: 0;
`
export default ModalLabel;