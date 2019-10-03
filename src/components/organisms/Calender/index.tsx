import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DayNames from "components/molecules/DayNamesGrid";
import Week from "components/molecules/Week";
import moment from "moment";
type Props = {
  month: number;
  setModalStatus: (status: boolean) => void;
};
const Calendar: React.FC<Props> = (props: Props) => {
  const [days, setDays] = useState([]);

  const daily = (check: number) => {
    let calendar: any = [];
    const month = moment().subtract(check, "months");
    const startWeek = month.startOf("month").week();
    const endWeek =
      month.endOf("month").week() === 1 ? 53 : month.endOf("month").week();
    for (let week = startWeek; week <= endWeek; week++) {
      calendar.push(
        Array(7)
          .fill(0)
          .map((n, i) => {
            let current = month
              .week(week)
              .startOf("week")
              .add(n + i, "day");
            return current.format("D");
          })
      );
    }
    return calendar;
  };

  useEffect(() => {
    setDays(daily(props.month));
  }, [props.month]);

  return (
    <Container>
      <DayNames />
      {days.map(item => {
        return (
          <Week key={item} days={item} setModalStatus={props.setModalStatus} />
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  display: block;
`;
export default Calendar;
