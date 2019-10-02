import React from "react";
import styled from "styled-components"

type Props = {
    type: number;
}

const Plan: React.FC<Props> = (props: Props) => {

    return (
        <>
            <Container type={props.type}>연속 일정</Container>
        </>
    )
}

const Container: React.ComponentType<any> = styled.div`
    margin-top: 4px;
    background-color: ${(props: any) => props.type === 1 ? "#0078FF" : props.type === 2 ? "#E9ECF3" : "#673AB7"} ;
    color: #fff;
    margin-left: 4px;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    margin-bottom: 4px;
    padding: 4px 10px;
    z-index: 1;
    margin-right: 4px;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
`
export default Plan;