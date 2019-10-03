import React from "react";
import styled from "styled-components";
import PlanName from "components/molecules/InputPlanName"
import PlanContent from "components/molecules/TextAreaPlan"
import PlanType from "components/molecules/PlanType"
import StartDate from "components/molecules/StartDatePicker"
import EndDate from "components/molecules/EndDatePicker"

type Props = {
    title: string
    setTitle: (title: string) => void;
    content: string
    setContent: (content: string) => void;
    startDate: Date | null;
    setStartDate: (date: Date | null) => void;
    startTime: Date | null;
    setStartTime: (time: Date | null) => void;
    endDate: (Date | null)
    setEndDate: (date: Date | null) => void;
    endTime: (Date | null)
    setEndTime: (time: Date | null) => void;
}
const ModalBody: React.FC<Props> = (props: Props) => {

    return (
        <Container>
            <PlanName title={props.title} setTitle={props.setTitle} />
            <PlanContent content={props.content} setContent={props.setContent} />
            <StartDate
                startDate={props.startDate} setStartDate={props.setStartDate}
                startTime={props.startTime} setStartTime={props.setStartTime} />
            <EndDate
                endDate={props.endDate} setEndDate={props.setEndDate}
                endTime={props.endTime} setEndTime={props.setEndTime} />
            <PlanType />
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
