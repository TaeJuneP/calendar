import React from "react";
import styled from "styled-components";
import DayName from "components/atoms/DayName";
import moment from "moment";
import Plan from "components/atoms/Plan";

type Props = {
  plan: any;
};

const Week: React.FC<Props> = (props: Props) => {
  let day;
  let formatD = moment(props.plan[0]).format("D");
  if (moment(props.plan[0]).format("ddd") === "Mon") {
    day = "월요일";
  } else if (moment(props.plan[0]).format("ddd") === "Tue") {
    day = "화요일";
  } else if (moment(props.plan[0]).format("ddd") === "Wed") {
    day = "수요일";
  } else if (moment(props.plan[0]).format("ddd") === "Thu") {
    day = "목요일";
  } else if (moment(props.plan[0]).format("ddd") === "Fri") {
    day = "금요일";
  } else if (moment(props.plan[0]).format("ddd") === "Sat") {
    day = "토요일";
  } else if (moment(props.plan[0]).format("ddd") === "Sun") {
    day = "일요일";
  }

  return (
    <Container>
      <DayName name={formatD + "일 " + day} />
      {props.plan[1].map((item: any) => {
        return <Plan key={item} type={item} />;
      })}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  min-height: 640px;
  grid-template-columns: repeat(1, minmax(840px, 1fr));
  grid-template-rows: 48px repeat(auto-fill, 40px) 40px;
  grid-auto-rows: inherit;
  overflow: auto;
  border-bottom: 1px solid #d7e2eb;
`;

export default Week;
