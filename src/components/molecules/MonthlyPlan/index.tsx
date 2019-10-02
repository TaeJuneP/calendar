import React from "react";
import styled from "styled-components";
import Label from "components/atoms/ModalLabel"
import CheckBox from "components/atoms/CheckBox"

const MonthlyPlan: React.FC = () => {

    const label = "매월 반복"
    return (
        <Container>
            <CheckBox />
            <ChangePosition>
                <Label label={label} />
            </ChangePosition>
        </Container>
    );
}

const Container = styled.div`
    display:flex;
`;
const ChangePosition = styled.div`
    margin-top: -5px;
    margin-left: .3125rem;
`
export default MonthlyPlan;
