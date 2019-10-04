import React from "react";
import styled from "styled-components"

type Props = {
    plan: any
}

const PopoverPeriod: React.FC<Props> = (props: Props) => {

    return (
        <>
            <Container>{props.plan['startDate']} - {props.plan['endDate']}</Container>
        </>
    )
}
const Container = styled.div`
    color: #263747;
`

export default PopoverPeriod;