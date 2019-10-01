import React from "react";
import styled from "styled-components"

type Props = {
    day: number;
};

const DayLabel: React.FC<Props> = (props: Props) => {

    return (
        <>
            <Container>{props.day}</Container>
        </>
    )
}
const Container = styled.div`
    min-width: 120px;
    grid-row-start: 1;
    position: relative;
    margin: 0;
    padding: 8px 16px;
    text-align: right;
    font-size: 12px;
    line-height: 1.5;
    box-sizing: border-box;
    color: #98A8B9;
    z-index: 1;

`
export default DayLabel;