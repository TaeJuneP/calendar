import React from "react";
import styled from "styled-components"

type Props = {
    plan: any
}

const PopoverContent: React.FC<Props> = (props:Props) => {

    return (
        <>
            <Container>{props.plan["content"]}</Container>
        </>
    )
}
const Container = styled.div`
    color: #263747;
    max-width: 250px;
    word-wrap: break-word;
`

export default PopoverContent;