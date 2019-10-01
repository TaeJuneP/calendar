import React, { useState } from "react";
import styled from "styled-components";
import Header from "components/organisms/Header";
import Calendar from "components/organisms/Calender"
import ModalFade from "components/atoms/ModalFade"
const Main: React.FC = () => {

  const [month, setMonth] = useState(0)

  return (
    <>
      <ModalFade />
      <Container>
        <Header setMonth={setMonth} month={month} />
        <Calendar month={month} />
      </Container>
    </>
  );

}

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
