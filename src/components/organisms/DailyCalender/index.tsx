import React from "react";
import styled from "styled-components";
import DailyPlan from "components/molecules/DailyPlan"

const DailyCalender: React.FC = () => {
    return (
        < Container >
            <DailyPlan plan={[["2019-10-03"],[0,1,2]]} />
        </Container >
    );
}


const Container = styled.div`
  display:block;
`;
export default DailyCalender;
