import React from "react";
import styled from "styled-components"

type Props = {
    title: any
}

const PopoverTitle: React.FC<Props> = (props: Props) => {

    return (
        <>
            <Container>{props.title}</Container>
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