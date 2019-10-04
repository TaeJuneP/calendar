import React from "react";
import styled from "styled-components";
import DayLabel from "components/atoms/DayLabel";
import Plan from "components/atoms/Plan";

type Props = {
  days: any;
  schedule: any;
  setModalStatus: (status: boolean) => void;
};

const Week: React.FC<Props> = (props: Props) => {

  let date = props.schedule;
  return (
    <Container onClick={() => props.setModalStatus(true)}>
      {props.days.map((item: number, n: number) => {
        let k = String(item).split('-')
        return (<Day key={n}><DayLabel key={n} day={Number(k[2])} />
          {date !== undefined ? (
            date.map((plan: any, o: number) => {
              let k = plan['startDate'].split(" ");
              if (k[0] == item) {
                console.log(k[0], item)
                return (<Plan key={plan['id']} plan={plan} n={n + 1} />)
              }
              else return null
            })) : null}</Day>)
      })}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(120px, 1fr));
  grid-auto-flow: dense;
  grid-template-rows: 32px repeat(auto-fill, 32px) 32px;
  grid-gap: 0;
  border-bottom: 1px solid #d7e2eb;
`;
const Day = styled.div`
  border-right: 1px solid #d7e2eb;
  display: contents;
`


export default Week;
