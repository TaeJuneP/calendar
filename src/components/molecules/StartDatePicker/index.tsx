import React from "react";
import styled from "styled-components";
import Label from "components/atoms/ModalLabel"
import DatePicker from "components/atoms/DatePicker"
import TimePicker from "components/atoms/TimePicker"

type Props = {
    startDate: Date | null;
    setStartDate: (date: Date | null) => void;
    startTime: Date | null;
    setStartTime: (time: Date | null) => void;
}

const StartDatePicker: React.FC<Props> = (props: Props) => {
    const dateLabel = "일정 시작 날짜"
    const timeLabel = "일정 시작 시간"

    return (
        <Container>
            <PickerContainer>
                <Label label={dateLabel} />
                <DatePicker date={props.startDate} setDate={props.setStartDate} />
            </PickerContainer >
            <PickerContainer>
                <Label label={timeLabel} />
                <TimePicker time={props.startTime} setTime={props.setStartTime} />
            </PickerContainer >
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -5px;
    margin-left: -5px;
`;
const PickerContainer = styled.div`
    display: block;
    margin-bottom: 1rem;
    padding-right: 5px;
    padding-left: 5px;
    width:100%;
    @media (min-width: 768px){
    flex: 0 0 50%;
    max-width: 50%;
    }
`
export default StartDatePicker;
