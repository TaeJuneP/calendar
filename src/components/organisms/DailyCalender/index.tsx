import React from "react";
import styled from "styled-components";
import DailyPlan from "components/molecules/DailyPlan";

type Props = {
  schedule: any
  setModalStatus: (status: boolean) => void;
};

const DailyCalender: React.FC<Props> = (props: Props) => {
  let schedule = props.schedule;
  console.log(props.schedule)
  schedule.sort((a: any, b: any) => new Date(a['startDate']).getTime() - new Date(b['startDate']).getTime());
  console.log(schedule)
  let plans: any = []
  let result: any = []
  const CheckPlan = () => {
    for (let i = 0; i < schedule.length;) {
      if (plans.length === 0) {
        plans.push(schedule[i])
        i++
      }
      else if (schedule[i - 1]['startDate'] === schedule[i]['startDate']) {
        plans.push(schedule[i])
        i++
      }
      else {
        result.push(plans)
        plans = []
        plans.push(schedule[i])
        if (i === schedule.length - 1) {
          result.push(plans)
        }
        i++
      }
    }
    return result
  }
  return (
    <Container onClick={() => props.setModalStatus(true)}>
      <DailyPlan plan={CheckPlan()} />
    </Container>
  );
};

const Container = styled.div`
  display: block;
  
`;
export default DailyCalender;
