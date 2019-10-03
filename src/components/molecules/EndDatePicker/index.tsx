import React from "react";
import styled from "styled-components";
import Label from "components/atoms/ModalLabel"
import DatePicker from "components/atoms/DatePicker"
import TimePicker from "components/atoms/TimePicker"

type Props = {
    endDate: (Date | null)
    setEndDate: (date: Date | null) => void;
    endTime: (Date | null)
    setEndTime: (time: Date | null) => void;
}

const EndDatePicker: React.FC<Props> = (props:Props) => {
    const dateLabel = "일정 종료 날짜"
    const timeLabel = "일정 종료 시간"

    return (
        <Container>
            <PickerContainer>
                <Label label={dateLabel} />
                <DatePicker date={props.endDate} setDate={props.setEndDate}/>
            </PickerContainer >
            <PickerContainer>
                <Label label={timeLabel} />
                <TimePicker time={props.endTime} setTime={props.setEndTime}/>
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
export default EndDatePicker;
