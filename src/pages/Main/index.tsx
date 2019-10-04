import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "components/organisms/Header";
import Calendar from "components/organisms/Calender";
import DailyCalender from "components/organisms/DailyCalender";
// import Popover from "components/organisms/Popover";
import ModalFade from "components/atoms/ModalFade";
import Modal from "components/organisms/Modal";
import moment from "moment"
import { getSchedule } from "apis"

const Main: React.FC = () => {
  const [month, setMonth] = useState(0);
  const [linkStatus, setLinkStatus] = useState("월");
  const [modalStatus, setModalStatus] = useState(false);
  const [schedule, setSchedule] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const date = moment().subtract(month, "months");
      const plan = await getSchedule(date.format('YYYY-MM'))
      await setSchedule(plan)
    }
    fetchData()
  }, [month]);

  return (
    <>
      {modalStatus === true ? (
        <>
          <Modal setModalStatus={setModalStatus} />
          < ModalFade setModalStatus={setModalStatus} />
        </>
      ) : null}
      {/* <Popover /> */}
      <Container>
        <Header
          setMonth={setMonth}
          month={month}
          linkStatus={linkStatus}
          setLinkStatus={setLinkStatus}
        />
        {linkStatus === "월" ? (
          <Calendar month={month} setModalStatus={setModalStatus} schedule={schedule} />
        ) : (
            <DailyCalender setModalStatus={setModalStatus} schedule={schedule} />
          )}
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 90%;
  min-width: 840px;
  min-height: 480px;
  max-width: 1000px;
  margin: auto;
  overflow: hidden;
  border: 1px solid #d7e2eb;
  border-radius: 12px;
  background: #fff;
  
`;

export default Main;
