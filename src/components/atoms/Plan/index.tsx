import React, { useState } from "react";
import styled from "styled-components"
import Popover from "components/organisms/Popover";

type Props = {
    plan: any
    n: any
}

const Plan: React.FC<Props> = (props: Props) => {
    const [popoverStatus, setPopoverStatus] = useState(false);
    let start = (new Date(props.plan['startDate'])).getDate()
    let end = (new Date(props.plan['endDate'])).getDate()
    let diff = end - start
    if (props.n === null) {
        if (diff > 5) {
            diff = 2
        }
    }
    const Click = (event: any) => {
        setPopoverStatus(true);
        event.stopPropagation();
    }

    return (
        <>
            {popoverStatus === true ? <Popover n={props.n} setPopoverStatus={setPopoverStatus} plan={props.plan} /> : null}
            <Container onClick={Click} type={diff} n={props.n}>{props.plan['title']}</Container>


        </>
    )
}

const Container: React.ComponentType<any> = styled.div`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    grid-column-start: ${(props: any) => props.n} ;
    grid-column-end: span ${(props: any) => props.type} ;
    background-color: ${(props: any) => props.type > 0 ? "#0078FF" : props.type === 0 ? "#E9ECF3" : "#673AB7"} ;
    color:  ${(props: any) => props.type === 0 ? "#263747" : "#fff"} ;
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