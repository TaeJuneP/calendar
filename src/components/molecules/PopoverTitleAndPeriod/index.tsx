import React from "react";
import styled from "styled-components";
import Title from "components/atoms/PopoverTitle"
import Period from "components/atoms/PopoverPeriod"
import Marking from "components/atoms/PopoverMarking"

const PopoverTitleAndPeriod: React.FC = () => {

    return (
        <Container>
            <Marking />
            <Bundle>
                <Title />
                <Period />
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
