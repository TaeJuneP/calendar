import React from "react";
import styled from "styled-components";
import MonthlyPlan from "components/molecules/MonthlyPlan";
import Fullday from "components/molecules/Fullday"

const PlanType: React.FC = () => {

    return (
        <Container>
            <MonthlyPlan />
            <Fullday />
        </Container>
    );
}

const Container = styled.div`
    display:flex;
    width: 170px;
    justify-content: space-between;
`;
export default PlanType;
