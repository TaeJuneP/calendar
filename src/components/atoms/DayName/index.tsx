import React from "react";
import styled from "styled-components"

type Props = {
    name: string;
};

const DayName: React.FC<Props> = (props: Props) => {

    return (
        <>
            <Container>{props.name}</Container>
        </>
    )
}
const Container = styled.div`
    min-width: 120px;
    font-size: 14px;
    grid-row: 1;
    color: #44576C;
    text-align: center;
    line-height: 48px;
    font-weight: 600;
    border-bottom:1px solid #D7E2EB;
`
export default DayName;