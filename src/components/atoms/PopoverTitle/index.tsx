import React from "react";
import styled from "styled-components"


const PopoverTitle: React.FC = () => {

    return (
        <>
            <Container>일정 1</Container>
        </>
    )
}
const Container = styled.div`
    font-size: 1.25rem;
    margin-bottom: .5rem;
    font-family: inherit;
    font-weight: 500;
    line-height: 1.2;
    color: inherit;
    max-width: 250px;
    word-wrap: break-word;
`

export default PopoverTitle;