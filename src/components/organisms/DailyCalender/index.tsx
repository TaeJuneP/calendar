import React from "react";
import styled from "styled-components";
import DailyPlan from "components/molecules/DailyPlan";

type Props = {
  setModalStatus: (status: boolean) => void;
};

const DailyCalender: React.FC<Props> = (props: Props) => {
  return (
    <Container onClick={() => props.setModalStatus(true)}>
      <DailyPlan plan={[["2019-10-03"], [0, 1, 2]]} />
    </Container>
  );
};

const Container = styled.div`
  display: block;
`;
export default DailyCalender;
