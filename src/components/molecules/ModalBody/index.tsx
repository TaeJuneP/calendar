import React from "react";
import styled from "styled-components";
import PlanName from "components/molecules/InputPlanName"
import PlanContent from "components/molecules/TextAreaPlan"
import PlanType from "components/molecules/PlanType"
import DatePick from "components/atoms/DatePicker"
const ModalBody: React.FC = () => {

    return (
        <Container>
            <PlanName />
            <PlanContent />
            <DatePick />
            <PlanType/>
        </Container>
    );
}

const Container = styled.div`
    flex: 1 1 auto;
    padding: 1rem;
    display:block;
    background-color:#fff;
    color: #263747;
    border-bottom: 1px solid #e9ecef;
`;
export default ModalBody;
