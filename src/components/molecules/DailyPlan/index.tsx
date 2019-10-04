import React from "react";
import styled from "styled-components";
import DayName from "components/atoms/DayName";
import moment from "moment";
import Plan from "components/atoms/Plan";

type Props = {
  plan: any;
};

const Week: React.FC<Props> = (props: Props) => {
  console.log(props.plan)
  const dayFormat = (date: any) => {
    let day;
    let formatD;
    if (props.plan !== undefined) {
      formatD = moment(date).format("D");
      if (moment(date).format("ddd") === "Mon") {
        day = "월요일";
      } else if (moment(date).format("ddd") === "Tue") {
        day = "화요일";
      } else if (moment(date).format("ddd") === "Wed") {
        day = "수요일";
      } else if (moment(date).format("ddd") === "Thu") {
        day = "목요일";
      } else if (moment(date).format("ddd") === "Fri") {
        day = "금요일";
      } else if (moment(date).format("ddd") === "Sat") {
        day = "토요일";
      } else if (moment(date).format("ddd") === "Sun") {
        day = "일요일";
      }
    }
    return (formatD + "일 " + day)
  }


  return (
    <>
      {props.plan.map((item: any, k: number) => {
        return (<Container key={k}>
          < DayName name={dayFormat(item[0]['startDate'])} />
          {item.map((schedule: any, n: number = 1) => {
            return (
              <Plan key={schedule['id']} plan={schedule} n={null} />);
          }
          )
          }
        </Container>)
      })
      }
    </>
  )
};

const Container = styled.div`
  display: grid;
  min-height: 160px;;
  grid-template-columns: repeat(1, minmax(840px, 1fr));
  grid-template-rows: 48px repeat(auto-fill, 40px) 40px;
  grid-auto-rows: inherit;
  border-bottom: 1px solid #d7e2eb;
  overflow-y: auto;
  overflow-x: hidden;
`;

export default Week;
