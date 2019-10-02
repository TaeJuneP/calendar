import React from "react";
import styled from "styled-components"


const PopoverContent: React.FC = () => {

    return (
        <>
            <Container>스케쥴 메모, 설명이 나타납니다.</Container>
        </>
    )
}
const Container = styled.div`
    color: #263747;
    max-width: 250px;
    word-wrap: break-word;
`

export default PopoverContent;