import React from "react";
import styled from "styled-components";
import Title from "components/atoms/PopoverTitle"
import Period from "components/atoms/PopoverPeriod"
import Marking from "components/atoms/PopoverMarking"

type Props = {
    plan: any
}

const PopoverTitleAndPeriod: React.FC<Props> = (props: Props) => {

    return (
        <Container>
            <Marking />
            <Bundle>
                <Title title={props.plan['title']} />
                <Period plan={props.plan} />
            </Bundle>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    align-items: flex-start;
    color: #263747;
`;
const Bundle = styled.div`
    margin-left: 12px;
`
export default PopoverTitleAndPeriod;
