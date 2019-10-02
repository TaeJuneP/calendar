import React from "react";
import styled from "styled-components"


const CloseButton: React.FC = () => {

    return (
        <Container>
            <Close>×</Close>
        </Container>
    )
}
const Container = styled.div`
    float: right;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1;
    color: #000;
    text-shadow: 0 1px 0 #fff;
    opacity: .5;
    padding: 1rem;
    margin: -1rem -1rem -1rem auto;
    cursor: pointer;
    :hover {
        color: #000;
        text-decoration: none;
        opacity: .75;
    }
`
const Close = styled.span`
`
export default CloseButton;