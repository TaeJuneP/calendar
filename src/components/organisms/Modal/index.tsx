import React, { useState } from "react";
import styled from "styled-components";
import Header from "components/molecules/ModalHeader";
import Body from "components/molecules/ModalBody";
import Footer from "components/molecules/ModalFooter";
import moment from "moment"
import { createSchedule } from "apis";

type Props = {
  setModalStatus: (status: boolean) => void;
};
const Modal: React.FC<Props> = (props: Props) => {

  const [title, setTitle] = useState('')
  const [content, setContent] = useState()
  const [startDate, setStartDate] = useState()
  const [startTime, setStartTime] = useState()
  const [endDate, setEndDate] = useState()
  const [endTime, setEndTime] = useState()


  const createScheduleHandler = () => {
    let start = moment(startDate).format('YYYY-MM-D') + " " + moment(startTime).format('hh:mm:A')
    let end = moment(endDate).format('YYYY-MM-D') + " " + moment(endTime).format('hh:mm:A')
    createSchedule(title, content, start, end)
  }

  return (
    <Container>
      <Header setModalStatus={props.setModalStatus} />
      <Body
        title={title} setTitle={setTitle}
        content={content} setContent={setContent}
        startDate={startDate} setStartDate={setStartDate}
        startTime={startTime} setStartTime={setStartTime}
        endDate={endDate} setEndDate={setEndDate}
        endTime={endTime} setEndTime={setEndTime} />
      <Footer setModalStatus={props.setModalStatus} createScheduleHandler={createScheduleHandler} />
    </Container>
  );
};

const Container = styled.div`
  right: 0;
  left: 0;
  position: fixed;
  top: 25%;
  height: auto;
  z-index: 3;
  transform: translate(0, 0);
  transition: transform 0.3s ease-out;
  width: auto;
  margin: 0.5rem;
  min-width: 285px;
  border-radius: 0.3rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  @media only screen and (min-width: 576px) {
    max-width: 500px;
    margin: 1.75rem auto;
  }
`;
export default Modal;
